const { Resend } = require('resend')

const resend = new Resend(process.env.RESEND_API_KEY)

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { nombre, email, celular, ciudad, tipo, descripcion } = req.body

  if (!nombre || !email) {
    return res.status(400).json({ error: 'Nombre y email son requeridos' })
  }

  try {
    await resend.emails.send({
      from: 'Arkeím Studio <noreply@arkeimstudio.com>',
      to: 'arkeim.sas@gmail.com',
      replyTo: email,
      subject: `Nuevo contacto: ${nombre} — ${tipo || 'Sin tipo'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9f9;">
          <div style="background: #0A0A0A; padding: 24px 32px; border-radius: 4px 4px 0 0;">
            <h1 style="color: #fff; font-size: 22px; margin: 0; letter-spacing: -0.5px;">Nuevo mensaje de contacto</h1>
            <p style="color: rgba(255,255,255,0.4); font-size: 13px; margin: 6px 0 0;">arkeimstudio.com</p>
          </div>
          <div style="background: #fff; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 4px 4px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; width: 140px;">Nombre</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #0a0a0a; font-size: 15px; font-weight: 600;">${nombre}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #0a0a0a; font-size: 15px;"><a href="mailto:${email}" style="color: #B91C1C;">${email}</a></td>
              </tr>
              ${celular ? `<tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Celular</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #0a0a0a; font-size: 15px;">${celular}</td>
              </tr>` : ''}
              ${ciudad ? `<tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Ciudad</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #0a0a0a; font-size: 15px;">${ciudad}</td>
              </tr>` : ''}
              ${tipo ? `<tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Tipo de proyecto</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #0a0a0a; font-size: 15px;">${tipo}</td>
              </tr>` : ''}
              ${descripcion ? `<tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px; vertical-align: top; padding-top: 16px;">Descripción</td>
                <td style="padding: 10px 0; color: #0a0a0a; font-size: 15px; line-height: 1.6; padding-top: 16px;">${descripcion}</td>
              </tr>` : ''}
            </table>
            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #f3f4f6;">
              <a href="mailto:${email}" style="display: inline-block; background: #B91C1C; color: #fff; text-decoration: none; padding: 12px 28px; border-radius: 2px; font-size: 14px; font-weight: 500;">Responder a ${nombre}</a>
            </div>
          </div>
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return res.status(500).json({ error: 'Error al enviar el mensaje' })
  }
}
