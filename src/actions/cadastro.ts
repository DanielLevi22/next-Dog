'use server'

import { TOKEN_POST, USER_POST } from "@/utils/api";
import { apiError } from "@/utils/apierror";
import { cookies } from "next/headers";
import login from "./login";


export default async function cadastro(state:{},formData: FormData) {
  const username = formData.get('username') as string | null
  const email = formData.get('email') as string | null
  const password = formData.get('password') as string | null;

  try {
    if(!username || !password || !email)  throw new Error("Preencha os dados.")

    const { url } = USER_POST()
    
    const response = await fetch( url, {
      method: 'POST',
      body: formData,
    })
    
    if(!response.ok) throw new Error( 'Email ou usuario ja  cadastrado')
    const { ok } = await login({ ok: true ,error: '' }, formData)
    if(!ok) throw new Error( 'Error ao logar')
    return { data: null, ok: true,  error: ''}
    
  } catch (error:unknown) {
    return apiError(error)
  }


}