import Image from "next/image";
import styles from  './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Image src="/assets/dogs-footer.svg" alt="dogs" width={28} height={22} /> 
      <p>Dogs. alguns direitos reservados.</p>
    </footer>
  )
}