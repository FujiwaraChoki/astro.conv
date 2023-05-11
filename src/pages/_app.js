import '@/styles/globals.css';

import Head from 'next/head';
import Navbar from '@/components/Header/Navbar';
import FileContext from '@/contexts/FileContext';
import FileDataContext from '@/contexts/FileDataContext';

import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [file, setFile] = useState(null);
  const [fileData, setFileData] = useState(null);

  return (
    <FileDataContext.Provider value={{ fileData, setFileData }} >
      <FileContext.Provider value={{ file, setFile }} >
        <Head>
          <title>astro.conv</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Component {...pageProps} />
      </FileContext.Provider>
    </FileDataContext.Provider>
  );
}
