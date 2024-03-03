import { LoginResetarForm } from "@/components/login/loginresetarform";
import { Metadata } from "next";

export const metadata:Metadata= {
  title: 'Resetar a senha  | Dogs',
  description: 'Resete sua senha site Dogs.'
 }
 
type  SearchParams = {
  searchParams: {
    key: string;
    login: string;
  }
}

export default function Resetar({ searchParams }: SearchParams) {
  return (
    <div className="animeLeft">
     <h1 className="title">Resete a senha </h1>
     <LoginResetarForm KeyToken={searchParams.key} login={searchParams.login}/>
    </div>
  );
}
