import Link from "next/link";
import styles from './Header.module.css'
import Image from "next/image";
export function Header() {
  const user = true
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link href="/" className={styles.logo}>
          <Image src="/assets/dogs.svg" alt="dogs"  width={28} height={22} priority />
        </Link>
        {user ? (
        <Link href="/conta" className={styles.login} >Dogs</Link>
        ): (
        <Link href="/login" className={styles.login} >Login / Criar</Link>
        )}
      </nav>
    </header>
  )
}