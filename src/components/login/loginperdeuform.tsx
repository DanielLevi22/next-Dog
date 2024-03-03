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

function FormButton() {
  const  { pending } = useFormStatus()
  return (
    <>
    { pending ? (
      <Button disabled={pending}>Enviando...</Button>
    ):(
      <Button >Enviar Email</Button>
    )}
    </>
  )
}


export function LoginPerdeuForm() {
  const [state, action ] = useFormState(recuperar, {
    ok: false,
    error: '',
    data: null
  })

 const [url,setUrl] = useState('')

  useEffect(() => {
    setUrl(window.location.href.replace('perdeu', 'resetar'))
  },[])
  return(
    <>
      <form action={action} className={styles.form}>
        <Input label="Email / Usuario" name="login" type="text"/>
        <input type="hidden" name="url" value={url}/>
        <ErrorMessage 
          message={state.error}
        />
        {state.ok ?  <p style={{ color: '#4c1'}}>Email Enviado</p> :   <FormButton /> }
      
        <Link className={styles.perdeu} href="/login/perdeu">Perdeu a senha ?</Link>
        
       
      </form>
    </>
  )
}