import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_PORT === '465', // true pour 465, false pour 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendContactEmail(data: {
  prenom: string;
  nom: string;
  email: string;
  objet: string;
  message: string;
}) {
  const { prenom, nom, email, objet, message } = data;

  const mailOptions = {
    from: `"${prenom} ${nom}" <${process.env.SMTP_USER}>`, // Expéditeur technique
    to: process.env.CONTACT_EMAIL, // Ton mail qui reçoit
    replyTo: email, // Permet de répondre directement au client
    subject: `[Contact Site] ${objet}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #333;">Nouveau message de contact</h2>
        <p><strong>De :</strong> ${prenom} ${nom} (${email})</p>
        <p><strong>Objet :</strong> ${objet}</p>
        <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 5px;">
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
}