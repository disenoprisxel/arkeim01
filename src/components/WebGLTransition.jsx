import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const VERT = `
  attribute vec2 a_pos;
  void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`

const FRAG = `
  precision mediump float;
  uniform float u_t;
  uniform float u_time;
  uniform vec2  u_res;

  vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
  vec2 mod289(vec2 x){return x-floor(x*(1./289.))*289.;}
  vec3 permute(vec3 x){return mod289(((x*34.)+1.)*x);}
  float snoise(vec2 v){
    const vec4 C=vec4(.211324865,.366025403,-.577350269,.024390243);
    vec2 i=floor(v+dot(v,C.yy));
    vec2 x0=v-i+dot(i,C.xx);
    vec2 i1=(x0.x>x0.y)?vec2(1,0):vec2(0,1);
    vec4 x12=x0.xyxy+C.xxzz; x12.xy-=i1;
    i=mod289(i);
    vec3 p=permute(permute(i.y+vec3(0,i1.y,1))+i.x+vec3(0,i1.x,1));
    vec3 m=max(.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.);
    m=m*m; m=m*m;
    vec3 x=2.*fract(p*C.www)-1.;
    vec3 h=abs(x)-.5;
    vec3 ox=floor(x+.5);
    vec3 a0=x-ox;
    m*=1.79284291-.85373472*(a0*a0+h*h);
    vec3 g;
    g.x=a0.x*x0.x+h.x*x0.y;
    g.yz=a0.yz*x12.xz+h.yz*x12.yw;
    return 130.*dot(m,g);
  }

  void main(){
    vec2 uv = gl_FragCoord.xy / u_res;
    float noise = snoise(uv * 2.5 + u_time * 0.25) * 0.2;
    float edge  = uv.x + noise;
    float mask  = smoothstep(u_t - 0.12, u_t + 0.12, edge);

    // Red accent at wipe edge
    float rim = 1.0 - abs(smoothstep(u_t-0.02, u_t+0.02, edge) - 0.5) * 2.0;
    vec3 col = mix(vec3(0.04, 0.0, 0.0), vec3(0.06, 0.06, 0.06), smoothstep(u_t-0.02,u_t+0.02,edge));
    col = mix(col, vec3(0.72, 0.11, 0.11), rim * 0.7);

    gl_FragColor = vec4(col, 1.0 - mask);
  }
`

export default function WebGLTransition() {
  const canvas  = useRef(null)
  const prog    = useRef(null)
  const uniforms = useRef({})
  const anim    = useRef({ t: 2.0, time: 0, active: false, raf: 0 })
  const location = useLocation()
  const prevPath = useRef(location.pathname)

  // Trigger wipe on route change
  useEffect(() => {
    if (location.pathname === prevPath.current) return
    prevPath.current = location.pathname
    anim.current.t = 0
    anim.current.active = true
  }, [location.pathname])

  // Setup WebGL once
  useEffect(() => {
    const c = canvas.current
    const gl = c.getContext('webgl', { alpha: true, premultipliedAlpha: false })
    if (!gl) return

    const mk = (type, src) => {
      const s = gl.createShader(type)
      gl.shaderSource(s, src); gl.compileShader(s); return s
    }
    const p = gl.createProgram()
    gl.attachShader(p, mk(gl.VERTEX_SHADER, VERT))
    gl.attachShader(p, mk(gl.FRAGMENT_SHADER, FRAG))
    gl.linkProgram(p); gl.useProgram(p)
    prog.current = p

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1,-1,1, 1,1]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(p, 'a_pos')
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

    uniforms.current = {
      t:   gl.getUniformLocation(p, 'u_t'),
      time: gl.getUniformLocation(p, 'u_time'),
      res: gl.getUniformLocation(p, 'u_res'),
    }

    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
    gl.clearColor(0, 0, 0, 0)

    const resize = () => {
      c.width = window.innerWidth; c.height = window.innerHeight
      gl.viewport(0, 0, c.width, c.height)
    }
    resize()
    window.addEventListener('resize', resize)

    const loop = () => {
      const a = anim.current
      a.time += 0.016

      if (a.active) {
        a.t += 0.024
        if (a.t >= 1.4) { a.t = 1.4; a.active = false }
      }

      const visible = a.t < 1.3
      c.style.opacity = visible ? '1' : '0'
      c.style.pointerEvents = (visible && a.t < 0.85) ? 'all' : 'none'

      gl.clear(gl.COLOR_BUFFER_BIT)
      if (visible) {
        gl.uniform1f(uniforms.current.t, a.t)
        gl.uniform1f(uniforms.current.time, a.time)
        gl.uniform2f(uniforms.current.res, c.width, c.height)
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      }

      anim.current.raf = requestAnimationFrame(loop)
    }
    anim.current.raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(anim.current.raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvas}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        width: '100%', height: '100%',
        opacity: 0, pointerEvents: 'none',
      }}
    />
  )
}
