'use client'
import { useFormState, useFormStatus } from "react-dom";

import { Input } from "../forms/input";
import { ErrorMessage } from "../helper/errormessage";
import { useEffect } from "react";
import Link from "next/link";
import styles from './loginForm.module.css'
import cadastro from "@/actions/cadastro";
import { Button } from "../forms/button";

function FormButton() {
  const  { pending } = useFormStatus()
  return (
    <>
    { pending ? (
      <Button disabled={pending}>Cadastrando...</Button>
    ):(
      <Button >Cadastrar</Button>
    )}
    </>
  )
}


export function LoginCriarForm() {
  const [state, action ] = useFormState(cadastro, {
    ok: false,
    error: '',
    data: null
  })

  useEffect(() => {
    if(state.ok) window.location.href = '/conta'
  }, [state.ok])

  return(
    <>
      <form action={action} className={styles.form}>
        <Input label="Usuario" name="username" type="text"/>
        <Input label="Email" name="email" type="email" />
        <Input label="Senha" name="password" type="password" />
        <ErrorMessage 
          message={state.error}
        />
        <FormButton />
        <Link className={styles.perdeu} href="/login/perdeu">Perdeu a senha ?</Link>
       
      </form>
    </>
  )
}