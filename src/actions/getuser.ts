'use server'

import { USER_GET } from "@/utils/api";
import { apiError } from "@/utils/apierror";
import { cookies } from "next/headers";


export type User = {
  id: number;
  email: string;
  username: string;
  nome: string;
}
export  async function getUser() {
  try {
    const token = cookies().get('token')?.value
    if(!token) throw new Error("Token nao encontrado")
    const { url } = USER_GET()
    
    const response = await fetch( url, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      next: {
        revalidate: 60
      }
    })
    
    if(!response.ok) throw new Error( 'Error ao pegar usuario.')
    
    const data = await response.json() as User

    return { data, ok: true,  error: ''}
    
  } catch (error:unknown) {
    return apiError(error)
  }


}