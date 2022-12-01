import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <main>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li>
              <Link href="/">LOGO</Link>
            </li>
            <div className={styles.links}>
              <li className={styles.link}>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/products">Shop</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </div>
          </ul>
        </nav>
      </main>
    </div>
  );
}
