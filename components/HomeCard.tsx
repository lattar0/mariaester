import React from "react";
import styles from "../styles/HomeCard.module.scss";
import ClassButton from "./ClassButton";

const HomeCard = () => {
  return (
    <div className={styles.homeCard}>
      <div className={styles.divTitle}>
        <p>Informações e materiais das turmas.</p>
        <p>Clique na sua turma.</p>

      </div>
      <div className={styles.columns}>
        <div className="columnSix">
          <ClassButton text="6A" />
          <ClassButton text="6B" />
          <ClassButton text="6C" />
          <ClassButton text="6D" />
        </div>
        <div className="columnSeven">
          <ClassButton text="7A" />
          <ClassButton text="7B" />
          <ClassButton text="7C" />
          <ClassButton text="7D" />
          <ClassButton text="7E" />
        </div>
        <div className="columnEight">
          <ClassButton text="8A" />
          <ClassButton text="8B" />
          <ClassButton text="8C" />
        </div>
        <div className="columnNine">
          <ClassButton text="9A" />
          <ClassButton text="9B" />
          <ClassButton text="9C" />
          <ClassButton text="9D" />
        </div>

        <div className={styles.columnsSuperior}>
          <div className="columnOne">
            <ClassButton text="1A" />
            <ClassButton text="1B" />
            <ClassButton text="1C" />
            <ClassButton text="1D" />
          </div>
          <div className="columnTwo">
            <ClassButton text="2A" />
            <ClassButton text="2B" />
            <ClassButton text="2C" />
            <ClassButton text="2D" />
          </div>
          <div className="columnThree">
            <ClassButton text="3A" />
            <ClassButton text="3B" />
            <ClassButton text="3C" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
