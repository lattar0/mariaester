import styles from '../styles/Navbar.module.scss';

import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <Link href="/" passHref>
          <span className={styles.title}>
            EE Profª Maria Ester das Neves Dutra Damásio
          </span>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar