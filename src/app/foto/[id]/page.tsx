

export default function FotoId( {params} : {params: { id: number}}) {
  return(
    <main>
      <h1>{params.id}</h1>
    </main>
  )
}