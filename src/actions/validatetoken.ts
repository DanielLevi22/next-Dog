'use server'

import { TOKEN_VALIDATE_POST } from "@/utils/api";
import { apiError } from "@/utils/apierror";
import { cookies } from "next/headers";


export async function validateToken() {
  try {
    const token = cookies().get('token')?.value

    if(!token) throw new Error('Acesso negado')

    const { url } = TOKEN_VALIDATE_POST()
    const response = await fetch(url ,{
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      next: {
        revalidate: 60
      }
    })
    if(!response.ok) throw new Error('Error ao validar token')
     const data = await response.json()  ;
     return {data, ok: true,error: '' }
    
  } catch (error) {
    return apiError(error)
  }
}