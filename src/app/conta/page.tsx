'use client'

import { UserContext, useUser } from "@/context/usercontext"
import { useContext } from "react"


export default function Conta() {
  const { user } = useUser()
  return(
    <main>
      <h1>Conta</h1>
    </main>
  )
}