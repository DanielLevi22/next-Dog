'use client'
import photoDelete from '@/actions/photodelete'
import styles from './photodelete.module.css'
import { useState } from "react"

export function PhotoDelete({ id }: { id: string}) {
  const [loading, setLoading] = useState(false)
  async function handleClick() {
    setLoading(true)
    const confirm = window.confirm('Tem certeza que deseja deletar ?')
    if(confirm) {
      await photoDelete(id)
    }
    setLoading(false)

  }


  return (
    <>
    {loading ? 
      (
        <button disabled  className={styles.delete}>
          Deletar
        </button>
      ):(
        <button onClick={handleClick}  className={styles.delete}>
        Deletar
      </button>
      )
      
    }
    </>
   
  )
}