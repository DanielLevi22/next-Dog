'use client'
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/forms/button";
import { Input } from "../forms/input";
import { ErrorMessage } from "../helper/errormessage";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from './loginForm.module.css'
import cadastro from "@/actions/cadastro";
import recuperar from "@/actions/recuperar";
import resete from "@/actions/resete";

function FormButton() {
  const  { pending } = useFormStatus()
  return (
    <>
    { pending ? (
      <Button disabled={pending}>Resetando...</Button>
    ):(
      <Button >Resetar Senha</Button>
    )}
    </>
  )
}

export function LoginResetarForm({ KeyToken,login}: { login: string, KeyToken: string}) {
  const [state, action ] = useFormState(resete, {
    ok: false,
    error: '',
    data: null
  })


  return(
    <>
      <form action={action} className={styles.form}>
        <Input label="Nova Senha" name="password" type="password"/>
        <input  name="login" type="hidden" value={login}/>
        <input  name="key" type="hidden" value={KeyToken}/>

        <ErrorMessage 
          message={state.error}
        />
        <FormButton /> 
      
        <Link className={styles.perdeu} href="/login/perdeu">Perdeu a senha ?</Link>
      </form>
    </>
  )
}