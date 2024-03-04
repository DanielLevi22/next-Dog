'use client'
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/forms/button";
import { Input } from "../forms/input";
import { ErrorMessage } from "../helper/errormessage";
import { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";
import styles from './contaphotopost.module.css'
import cadastro from "@/actions/cadastro";
import photoPost from "@/actions/photopost";

function FormButton() {
  const  { pending } = useFormStatus()
  return (
    <>
    { pending ? (
      <Button disabled={pending}>Enviando...</Button>
    ):(
      <Button >Enviar</Button>
    )}
    </>
  )
}


export function ContaPhotoPost() {
const [img, setImg ] = useState('')


  const [state, action ] = useFormState(photoPost, {
    ok: false,
    error: '',
    data: null
  })

  function handleImgChange({target}: ChangeEvent<HTMLInputElement>) {
    if(target.files) {
      setImg(URL.createObjectURL(target.files[0]))
    }
  }


  return(
    <section className={`${styles.photoPost} animeLeft`}>
      <form action={action} >
        <Input label="Nome" name="nome" type="text"/>
        <Input label="Peso" name="peso" type="number"/>
        <Input label="Idade" name="idade" type="number"/>
        <input type="file" name="img" id="img"  className={styles.file} onChange={handleImgChange}/>
      
        <ErrorMessage 
          message={state.error}
        />
        <FormButton />
      </form>
      <div>
          <div className={styles.preview} style={{backgroundImage: `url(${img})`}}></div>
        </div>
    </section>
  )
}