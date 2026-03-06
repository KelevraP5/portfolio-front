import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailContactPropsFR {
  prenom: string;
  nom: string;
  email: string;
  objet: string;
  message: string;
};

export async function sendContactEmailFR(data: EmailContactPropsFR) {

  const { prenom, nom, email, objet, message } = data;

  try {
    const { data: resData, error } = await resend.emails.send({
      // ⚠️ IMPORTANT : Au début, utilise 'onboarding@resend.dev' comme expéditeur
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL as string],
      replyTo: email, // Le mail du client pour pouvoir lui répondre
      subject: `[Contact] ${objet}`,
      html: `
        <div style="font-family: sans-serif; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
          <h2 style="color: #333;">Nouveau message de ${prenom} ${nom}</h2>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Message :</strong></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 5px;">
            ${message.replaceAll('\n', '<br>')}
          </div>
        </div>
      `,
    });

    if (error) {
      throw new Error(error.message);
    }

    return resData;
  } catch (e) {
    console.error("Erreur Resend :", e);
    throw e;
  }
}

interface EmailContactPropsEN {
  firstname: string;
  lastname: string;
  email: string;
  object: string;
  message: string;
};

export async function sendContactEmailEN(data: EmailContactPropsEN) {

  const { firstname, lastname, email, object, message } = data;

  try {
    const { data: resData, error } = await resend.emails.send({
      // ⚠️ IMPORTANT : Au début, utilise 'onboarding@resend.dev' comme expéditeur
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL as string],
      replyTo: email, // Le mail du client pour pouvoir lui répondre
      subject: `[Contact] ${object}`,
      html: `
        <div style="font-family: sans-serif; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
          <h2 style="color: #333;">Nouveau message de ${firstname} ${lastname}</h2>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Message :</strong></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 5px;">
            ${message.replaceAll('\n', '<br>')}
          </div>
        </div>
      `,
    });

    if (error) {
      throw new Error(error.message);
    }

    return resData;
  } catch (e) {
    console.error("Erreur Resend :", e);
    throw e;
  }
}