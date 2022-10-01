import Link from 'next/link';
import Head from 'next/head';
import { Button } from '@nextui-org/react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hooliopm</title>
        <meta name='author' content='Irene Sanchez' />
        <meta name='description' content='HoolioPM personal website' />
      </Head>
      <main>
        <h1>Welcome</h1>
        <h1 className="title">
          <Link href="/Contact">Contact page!</Link>
        </h1>
      </main>
    </div>
  )
}
