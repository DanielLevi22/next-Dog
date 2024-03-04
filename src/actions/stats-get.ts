'use server'

import { PHOTOS_GET, STATS_GET } from "@/utils/api";
import { apiError } from "@/utils/apierror";
import { cookies } from "next/headers";

export type StatsData = {
  id: number
  title: string
  acessos: string
}

export async function statsGet() {
  try {
    const token = cookies().get('token')?.value

    if(!token) throw new Error('Acesso negado')

    const { url } = STATS_GET()
    const response = await fetch(url ,{
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      next: {
        revalidate: 60
      }
    })
    if(!response.ok) throw new Error('Error ao buscar dados')
     const data = await response.json() as StatsData[] ;
     return {data, ok: true,error: '' }
    
  } catch (error) {
    return apiError(error)
  }
}