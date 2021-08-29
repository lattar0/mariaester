import '../styles/globals.scss';

import '@fortawesome/fontawesome-free/css/all.min.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Maria Ester</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
