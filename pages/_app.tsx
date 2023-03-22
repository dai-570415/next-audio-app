import type { AppProps } from 'next/app';
import Head from 'next/head';

// グローバルスタイル
import '../styles/globals.css';
import '../styles/audio.css';

const App = ({ Component }: AppProps) => {
  return (   
    <>
      <Head>
        <title>Audio App</title>
        <meta name="description" content="Audio App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component />
    </>
  );
}

export default App;