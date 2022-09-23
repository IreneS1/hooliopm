import { Navbar } from '@nextui-org/react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <title>Create Next App</title>
      <Navbar />
      <main>
        <h1>Welcome</h1>
        <h1 className="title">
          <Link href="/Contact">Contact page!</Link>
        </h1>

      </main>

      <footer>
        Powered by{' '}
      </footer>
    </div>
  )
}
