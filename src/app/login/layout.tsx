import { ReactNode } from "react";
import styles from './login.module.css'
export default function LoginLayout({children}: {children: ReactNode}) {
  return(
    <div>
      <aside className={styles.login}></aside>
      <div className={styles.forms}>{children}</div>
    </div>
  )
}