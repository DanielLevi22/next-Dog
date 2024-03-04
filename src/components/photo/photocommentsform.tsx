'use client'
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styles from './photcommentsform.module.css'
import { Comment } from '@/actions/photo-get';
import { useFormState, useFormStatus } from 'react-dom';
import EnviarIcon from '../icons/enviar-icon';
import { ErrorMessage } from '../helper/errormessage';
import commentPost from '@/actions/commentpost';




function FormButton() {
 const  { pending } =  useFormStatus()
 return <button  type="submit" disabled={pending} className={styles.button}><EnviarIcon /></button>
}

export  function  PhotoCommentsForm ({single, id, setComments}: {
  single: boolean
  id: number
  setComments: Dispatch<SetStateAction<Comment[]>>
}) {  
  const [comment, setComment] = useState('')
  const [state, action] = useFormState(commentPost, {
    ok:false,
    data: null,
    error: ''
  })

  useEffect(() => {
    if(state.ok && state.data) {
      setComments(comments =>  [...comments, state.data])
      setComment('')
    }
  },[state,setComments])


  return (
    <form action={action} className={`${styles.form} ${single ? styles.single : ''}` }>
      <input type="hidden" name='id' value={id} id='id'/>
      <textarea value={comment} onChange={({target }) => setComment(target.value)} className={styles.textarea} name="comment" id="comment" placeholder='Comente...' ></textarea>
      <FormButton />
      <ErrorMessage message={state.error} />
    </form>
  )

}

