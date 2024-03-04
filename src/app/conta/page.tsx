
import getUser from "@/actions/getuser"
import { photosGet } from "@/actions/photos-get"
import { Feed } from "@/components/feed/feed"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = { 
  title: 'Minha Conta'
}
export default async  function Conta() {
const { data: user} = await getUser()
const { data } = await photosGet({ user: user?.username})
  return(
    <main>
      {
        data?.length ?  <Feed  photos={data}/> : 
        <div>
          <p style={{color: '#444', fontSize: '1.25rem', marginBottom: '1rem'}}>
           Nenhuma foto encontrada.
          </p>
          <Link className="button" href="conta/postar" style={{display:'inline-block'}}> Postar Foto</Link>
        </div> 
      }
     
    </main>
  )
}