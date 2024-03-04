'use client'
import { User } from "@/actions/getuser";
import logout from "@/actions/logout";
import { validateToken } from "@/actions/validatetoken";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";


type IUserContext = {
  user: User | null
  setUser: Dispatch<SetStateAction<User | null>>
}

export const UserContext = createContext<IUserContext | null>(null)

export const useUser = () => {
  const context = useContext(UserContext)
  if(context === null) {
    throw new Error('use context deve estar dentro do provider')
  }
  return context
}


export function UserContextProvider({children, user}: { children: ReactNode, user: User | null}) {
  const [userState, setUser] = useState<User | null>(user)

  useEffect(() => {
    async function validate() {
      const { ok } = await validateToken()
      if(!ok) await logout()
    }
    if(userState) validate()
  },[userState])
  return (
    <UserContext.Provider value={{ user: userState, setUser}}>{children}</UserContext.Provider>
  )
}