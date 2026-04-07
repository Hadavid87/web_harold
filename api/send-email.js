import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'hadavid36@gmail.com',
      subject: `Nuevo Mensaje: ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0;">
          <!-- Header -->
          <div style="background-color: #0f172a; padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: -0.5px;">Harold<span style="color: #3b82f6;">.dev</span></h1>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px; background-color: #ffffff;">
            <h2 style="color: #1e293b; margin-top: 0; font-size: 20px;">¡Tienes un nuevo mensaje de contacto!</h2>
            <p style="color: #64748b; line-height: 1.6; font-size: 16px;">Has recibido una nueva consulta a través de tu portafolio web. Aquí están los detalles:</p>
            
            <div style="margin-top: 30px; background-color: #f1f5f9; padding: 25px; border-radius: 12px;">
              <p style="margin: 0 0 15px 0;">
                <strong style="color: #475569; text-transform: uppercase; font-size: 12px; letter-spacing: 0.05em;">Nombre del cliente:</strong><br>
                <span style="color: #1e293b; font-size: 17px; font-weight: 500;">${name}</span>
              </p>
              <p style="margin: 0 0 15px 0;">
                <strong style="color: #475569; text-transform: uppercase; font-size: 12px; letter-spacing: 0.05em;">Correo electrónico:</strong><br>
                <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none; font-size: 17px; font-weight: 500;">${email}</a>
              </p>
              <p style="margin: 0;">
                <strong style="color: #475569; text-transform: uppercase; font-size: 12px; letter-spacing: 0.05em;">Mensaje:</strong><br>
                <span style="color: #1e293b; font-size: 16px; line-height: 1.6; display: block; margin-top: 8px;">${message}</span>
              </p>
            </div>
            
            <div style="margin-top: 40px; text-align: center;">
              <a href="mailto:${email}" style="background-color: #0f172a; color: #ffffff; padding: 14px 28px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 16px; display: inline-block;">Responder directamente</a>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="padding: 20px; background-color: #f8fafc; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">&copy; ${new Date().getFullYear()} Harold Antonio Pérez - Portfolio Developer</p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
