import Link from "next/link";

import styles from "../styles/ClassButton.module.scss";

const ClassButton = (children) => {
  return (
    <button type="button" className={styles.classButton}>
      <Link href="/" passHref>
        <span>{children.text}</span>
      </Link>
    </button>
  );
};

export default ClassButton;
