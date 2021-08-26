import Button from "../components/Button";
import Footer from "../components/Footer";
import HomeCard from "../components/HomeCard";
import MapContainer from "../components/MapContainer";
import Navbar from "../components/Navbar";

import styles from '../styles/HomePage.module.scss';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.mainContent}>
        <HomeCard />

        <div className={styles.buttonsContainer}>
          <div className={styles.buttonsContainer}>
          <span>Centro de Mídias</span>
          <Button text="Dúvidas sobre o CMSP" url="/cmsp" />
          </div>

          <div className={styles.buttonsContainer}>
            <span>Agendar informática</span>
            <Button text="Clique aqui!" url="/agendamento" />
          </div>
        </div>

        <div className={styles.container}>
          <MapContainer />
          <div className={styles.infoContainer}>
            <strong>
              Rua Olavo Bilac, nº 350,
              Morro do Algodão, Caraguatatuba
            </strong>

            <strong>eemendd@gmail.com</strong>

            <strong>Tel: (12) 3887-2571</strong>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
