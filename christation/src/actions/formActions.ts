'use server'

import {z} from 'zod';
import { revalidatePath } from 'next/cache';

import { routes } from '../routes/routes';

import { sendContactEmailFR, sendContactEmailEN } from '../lib/mail/mailTemplate';

const schemaFR = z.object({
    prenom: z.string().trim().min(2, {message: "Doit faire plus de 2 lettres"}).max(50, {message: "Doit faire moins de 50 lettres"}),
    nom: z.string().trim().min(2, {message: "Doit faire plus de 2 lettres"}).max(50, {message: "Doit faire moins de 50 lettres"}),
    email: z.email("Email invalide"),
    objet: z.string().trim().min(2, {message: "Doit faire plus de 2 lettres"}).max(20, {message: "Doit faire moins de 20 lettres"}),
    message: z.string().trim().min(2, {message: "Doit faire plus de 2 lettres"}).max(1000, {message: "Doit faire moins de 1000 lettres"}),
});

export async function contactFormFR(prevState: any, formData: FormData) {

    const validatedFields = schemaFR.safeParse(Object.fromEntries(formData.entries()));

    if (!validatedFields.success) {
        return{
            errors: validatedFields.error.flatten((issue) => issue.message).fieldErrors,
        }        
    }

    try{
        await sendContactEmailFR(validatedFields.data);

        revalidatePath(routes.fr.contact);

        return {success : true, message: "Message envoyé avec succès ! \n Merci beaucoup !"};
    } catch(e) {
        console.log(e);

        return {success: false, message: "Erreur d'envoi du mail"};
    }
}


const schemaEN = z.object({
    firstname: z.string().min(2, {message: "Must have more than 2 letters"}).max(50, {message: "Must have less than 50 letters"}),
    lastname: z.string().min(2, {message: "Must have more than 2 letters"}).max(50, {message: "Must have less than 50 letters"}),
    email: z.email("Invalid e-mail address"),
    object: z.string().min(2, {message: "Must have more than 2 letters"}).max(20, {message: "Must have less than 20 letters"}),
    message: z.string().min(2, {message: "Must have more than 2 letters"}).max(1000, {message: "Must have less than 1000 letters"}),
});

export async function contactFormEN(prevState: any, formData: FormData) {

    const validatedFields = schemaEN.safeParse(Object.fromEntries(formData.entries()));

    if (!validatedFields.success) {
        return{
            errors: validatedFields.error.flatten((issue) => issue.message).fieldErrors,
        }        
    }

    try{
        await sendContactEmailEN(validatedFields.data);

        revalidatePath(routes.en.contact);

        return {success : true, message: "Your message has been sent successfully! \n Thank you very much!"};
    } catch(e) {
        console.log(e);

        return {success: false, message: "Your email couldn't be sent"};
    }
}