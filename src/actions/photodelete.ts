'use server'

import { PHOTO_DELETE, PHOTO_POST, USER_POST } from "@/utils/api";
import { apiError } from "@/utils/apierror";
import login from "./login";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";


export default async function photoDelete(id: string) {
  const token = cookies().get('token')?.value
 

  try {
    if(!token )  throw new Error("Token invalido.")

    const { url } = PHOTO_DELETE(id)
    
    const response = await fetch( url, {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + window.localStorage.getItem('token'),
        },
    })
    
    if(!response.ok) throw new Error( 'Email ao deletar a foto')
    
  } catch (error:unknown) {
    return apiError(error)
  }
  revalidateTag('photos')
  redirect('/conta')
}