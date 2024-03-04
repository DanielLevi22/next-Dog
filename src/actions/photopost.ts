'use server'

import { PHOTO_POST, USER_POST } from "@/utils/api";
import { apiError } from "@/utils/apierror";
import login from "./login";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";


export default async function photoPost(state:{},formData: FormData) {
  const token = cookies().get('token')?.value
  const username = formData.get('nome') as string | null
  const email = formData.get('idade') as string | null
  const password = formData.get('peso') as string | null;
  const img = formData.get('img') as File 


  try {
    if(!token  || !username || !password || !email || img.size === 0)  throw new Error("Preencha os dados.")

    const { url } = PHOTO_POST()
    
    const response = await fetch( url, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    })
    
    if(!response.ok) throw new Error( 'Email ou usuario ja  cadastrado')
    
  } catch (error:unknown) {
    return apiError(error)
  }
  revalidateTag('photos')
  redirect('/conta')
}