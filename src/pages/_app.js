import '@/styles/globals.css';

import Head from 'next/head';

import Navbar from '@/components/Header/Navbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>astro.conv</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}
