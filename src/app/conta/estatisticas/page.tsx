import { statsGet } from "@/actions/stats-get"
import { Metadata } from "next"
import dynamic from "next/dynamic"

const ContaEstatisticas =  dynamic(() => import('@/components/conta/contaestatisticas'), {
  loading: () => <p>carregando...</p>,
  ssr: false
})

export const metadata: Metadata = { 
  title: 'Estatiticas  | Minha Conta'
}

export default async function Estatisticas() {
  const { data } = await statsGet()
  if(!data) return null
  return(
    <section>
      <ContaEstatisticas data={data}/>
    </section>
  )
}