'use server'

import {  PASSWORD_LOST, USER_POST } from "@/utils/api";
import { apiError } from "@/utils/apierror";
import login from "./login";


export default async function recuperar(state:{},formData: FormData) {
  const login = formData.get('login') as string | null
  const urlPerdeu = formData.get('url') as string | null


  try {
    if(!login)  throw new Error("Preencha os dados.")

    const { url } = PASSWORD_LOST()
    
    const response = await fetch( url, {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login,
          url: urlPerdeu
        })
    })
    
    if(!response.ok) throw new Error( 'Email ou usuario nao existe cadastrado')
    return { data: null, ok: true,  error: ''}
    
  } catch (error:unknown) {
    return apiError(error)
  }


}