import { LoginPerdeuForm } from "@/components/login/loginperdeuform";
import { Metadata } from "next";


export const metadata:Metadata = {
  title: 'Perdeu a senha  | Dogs',
  description: 'Recupere a sua senha no site Dogs.'
 }
export default function Perdeu() {
  return (
    <div className="animeLeft">
     <h1 className="title">Perdeu a senha ?</h1>
     <LoginPerdeuForm />
    </div>
  );
}
