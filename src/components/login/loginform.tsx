import login from "@/actions/login";


export function LoginForm() {
  return(
    <>
      <form action={login}>
        <input type="text" placeholder="usuario" name="username"/>
        <input type="password" placeholder="senha" name="password"/>
        <button>Entrar</button>
      </form>
    </>
  )
}