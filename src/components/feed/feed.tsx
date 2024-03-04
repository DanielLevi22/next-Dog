'use client'

import { Photo, photosGet } from "@/actions/photos-get";
import { FeedPhotos } from "./feed-photos";
import { useEffect, useRef, useState } from "react";



export function Feed({ photos , user} : { photos: Photo[], user?:0 | string} ){
  const  [ photosFeed, setPhotosFeed] = useState<Photo[]>(photos)
  const [page,setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const[infinite, setInfinite] = useState(photos.length < 6 ? false : true)

  const fetching = useRef(false)
  function infiniteScroll() {
    if(fetching.current) return;
    fetching.current = true
    setLoading(true)

    setTimeout(() => {
      setPage(currentPage => currentPage +1)
      fetching.current = false
      setLoading(false)

    },1000)
  }

  useEffect(()=> {
    if(page === 1) return;
      async function getPagePhotos(page: number) {
        const actionData = await photosGet({page, total: 6, user: 0})
        if(actionData && actionData.data !== null) {
          const  { data } = actionData
            setPhotosFeed(currentPhotos => [...currentPhotos, ...data])
            if(data.length < 6) setInfinite(false)
        }
      }
      getPagePhotos(page)
  },[page])

  useEffect(() => {
    if(infinite) {
      window.addEventListener('scroll', infiniteScroll)
      window.addEventListener('wheel', infiniteScroll)
    } else {
      window.removeEventListener('scroll', infiniteScroll)
      window.removeEventListener('wheel', infiniteScroll)
    }
    return () => {
      window.removeEventListener('scroll', infiniteScroll)
      window.removeEventListener('wheel', infiniteScroll)
    }

  })
  return (
    <div>
      <FeedPhotos
        photos={photosFeed}
      />
      {loading && <p>Carregando....</p>}
    </div>
  )
}