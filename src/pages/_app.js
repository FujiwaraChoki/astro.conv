import "@/styles/globals.css";

import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "@/components/Header/Navbar";
import FileContext from "@/contexts/FileContext";
import FileDataContext from "@/contexts/FileDataContext";

import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [file, setFile] = useState(null);
  const [fileData, setFileData] = useState(null);

  const router = useRouter();

  // Check if the user requested paths ffmpeg-core.js, ffmpeg-core.wasm or ffmpeg-core.worker.js
  // If so, redirect them to the public folder
  if (router.pathname.includes("ffmpeg-core")) {
    return null;
  }

  return (
    <FileDataContext.Provider value={{ fileData, setFileData }}>
      <FileContext.Provider value={{ file, setFile }}>
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
