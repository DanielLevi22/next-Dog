import { ContaPhotoPost } from "@/components/conta/contaphotopost"
import { Metadata } from "next"

export const metadata: Metadata = { 
  title: 'Postar | Minha Conta'
}

export const runtime = 'edge'

export default function Postar() {
  return(
    <ContaPhotoPost />
  )
}