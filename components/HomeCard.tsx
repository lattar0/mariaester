import React from "react";
import styles from "../styles/HomeCard.module.scss";
import ClassRoom from "./ClassRoom";

const HomeCard = () => {
  return (
    <div className={styles.homeCard}>
      <div className={styles.divTitle}>
        <p>Informações e materiais das turmas.</p>
        <p>Clique na sua turma.</p>
      </div>
      <div className="columns">
        <div className="columnSix">
          <ClassRoom text="6A" />
          <ClassRoom text="6B" />
          <ClassRoom text="6C" />
          <ClassRoom text="6D" />
        </div>
        <div className="columnSeven">
          <ClassRoom text="7A" />
          <ClassRoom text="7B" />
          <ClassRoom text="7C" />
          <ClassRoom text="7D" />
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
