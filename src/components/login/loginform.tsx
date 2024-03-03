'use client'
import login from "@/actions/login";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/forms/button";
import { Input } from "../forms/input";
import { ErrorMessage } from "../helper/errormessage";
import { useEffect } from "react";


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
  const [state, action ] = useFormState(login, {
    ok: false,
    error: '',
    data: null
  })

  useEffect(() => {
    if(state.ok) window.location.href = '/conta'
  }, [state.ok])

  return(
    <>
      <form action={action}>
        <Input label="Usuario" name="username" type="text"/>
        <Input label="Senha" name="password" type="password" />
        <ErrorMessage 
          message={state.error}
        />
        <FormButton />
        
      </form>
    </>
  )
}