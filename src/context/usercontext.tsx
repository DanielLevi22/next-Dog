'use client'
import { User } from "@/actions/getuser";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";


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

  return (
    <UserContext.Provider value={{ user: userState, setUser}}>{children}</UserContext.Provider>
  )
}