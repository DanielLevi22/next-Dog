import Link from "next/link";
import styles from './Header.module.css'
import Image from "next/image";
import getUser from "@/actions/getuser";
export async function Header() {
  const { data } = await getUser()

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link href="/" className={styles.logo}>
          <Image src="/assets/dogs.svg" alt="dogs"  width={28} height={22} priority />
        </Link>
        {data ? (
        <Link href="/conta" className={styles.login} >{data.username}</Link>
        ): (
        <Link href="/login" className={styles.login} >Login / Criar</Link>
        )}
      </nav>
    </header>
  )
}