'use client'
import login from "@/actions/login";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/forms/button";


function FormButton() {
  const  { pending } = useFormStatus()
  return (
    <>
    { pending ? (
      <Button disabled={pending}>Enviando...</Button>
    ):(
      <Button >Entrar</Button>
    )}
    </>
  )
}


export function LoginForm() {


  return(
    <>
      <form action={login}>
        <input type="text" placeholder="usuario" name="username"/>
        <input type="password" placeholder="senha" name="password"/>
        <FormButton />
      </form>
    </>
  )
}