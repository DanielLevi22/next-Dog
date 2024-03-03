import { LoginCriarForm } from "@/components/login/logincriarform";
import { Metadata } from "next";


export const metadata:Metadata = {
title: 'Criar | Dogs',
 description: 'Crie sua conta no site Dogs.'
}
export default function Criar() {
  return (
    <div className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <LoginCriarForm />
    </div>
  );
}
