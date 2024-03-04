'use server'
import { cookies } from "next/headers";



export default async function setCookies( tenant: string){
  const token = cookies().set('', tenant)
}