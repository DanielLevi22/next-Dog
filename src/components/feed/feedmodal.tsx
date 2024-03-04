'use client'
import { PhotoData } from "@/actions/photo-get";
import { PhotoContent } from "../photo/photocontent";
import styles from './feedmodal.module.css'
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent } from "react";



export default function FeedModal({photo}: {photo: PhotoData}) {
  const router = useRouter()
  const pathname = usePathname()

  if(!pathname.includes('foto')) {
    return null
  }


  function handleOutSide(event: MouseEvent<HTMLDivElement>) {
    if(event.target === event.currentTarget) router.back()
  }
  return( 
    <div className={styles.modal} onClick={handleOutSide}>
      <PhotoContent data={photo} single={false}/>
      
    </div>
  )
}
