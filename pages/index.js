import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <title>Create Next App</title>
      <h1>Welcome</h1>

      <main>
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
