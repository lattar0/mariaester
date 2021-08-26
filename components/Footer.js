import React from 'react';

import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://www.facebook.com/profile.php?id=100048943937149" target="_blank" rel="noreferrer"><i className="fab fa-facebook" /></a>
      <span className={styles.text}>
        © 2021 por Maria Ester
      </span>
    </footer>
  );
}

export default Footer;