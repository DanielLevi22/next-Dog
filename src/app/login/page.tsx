import { LoginForm } from "@/components/login/loginform";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: 'Login  | Dogs',
  description: 'faca login no site Dogs.'
 }
export default async function Login() {
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
     <LoginForm />
    </section>
  );
}
