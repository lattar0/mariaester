import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Home() {

  const router = useRouter();

  const { cid } = router.query;

  const [apostilas, setApostilas] = useState('');

  useEffect(() => {
    axios.get(`/api/apostilas/${cid}`).then(response => {
      setApostilas(response.data)
    }); 
  }, [cid]);

  return (
    <div>
      <Navbar />
      <p>HM? {apostilas.curriculo}</p>
      <Footer />
    </div>
  )
}