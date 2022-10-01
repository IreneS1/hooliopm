import Head from 'next/head';
import TopHome from '../components/TopHome';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hooliopm</title>
        <meta name='author' content='Irene Sanchez' />
        <meta name='description' content='HoolioPM personal website' />
      </Head>
      <main>
        <TopHome />
      </main>
    </div>
  )
}
