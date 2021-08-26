import Link from 'next/link';
import React from 'react';

import styles from "../styles/Button.module.scss";

const Button = (children) => {
  return (
    <Link href={children.url} passHref >
      <button className={styles.button}>
        {children.text}
      </button>
    </Link>
  );
}

export default Button;