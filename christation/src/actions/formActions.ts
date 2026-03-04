'use server'

import {z} from 'zod';
import { revalidatePath } from 'next/cache';
import { routes } from '../routes/routes';

const schema = z.object({
    prenom: z.string().min(2, {message: "Doit faire plus de 2 lettres"}).max(50, {message: "Doit faire moins de 50 caractères"}),
    nom: z.string().min(2, {message: "Doit faire plus de 2 lettres"}).max(50, {message: "Doit faire moins de 50 caractères"}),
    entreprise: z.string().min(2, {message: "Doit faire plus de 2 lettres"}).max(50, {message: "Doit faire moins de 50 caractères"}),
    objet: z.string().min(2, {message: "Doit faire plus de 2 lettres"}).max(20, {message: "Doit faire moins de 20 caractères"}),
    message: z.string().min(2, {message: "Doit faire plus de 2 lettres"}).max(1000, {message: "Doit faire moins de 1000 caractères"}),
});

export default async function contactForm(prevState: any, formData: FormData) {

    const validatedFields = schema.safeParse(Object.fromEntries(formData.entries()));

    if (!validatedFields.success) {
        return{
            errors: validatedFields.error.flatten((issue) => issue.message).fieldErrors,
        }        
    }

    try{
        console.log(validatedFields.data);
        revalidatePath('/contact');
        return {success : true, message: "Message envoyé avec succès ! Merci beaucoup !"}
    } catch(e) {
        return {message: e}
    }
}