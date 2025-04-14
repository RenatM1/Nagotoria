
import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Head>
        <title>Nagotoria</title>
      </Head>
      <header style={{ textAlign: 'center', padding: '2rem', borderBottom: '1px solid #333' }}>
        <h1 style={{ fontSize: '2rem' }}>Nagotoria</h1>
        <p style={{ color: '#aaa' }}>Forbidden Allure & Cybernetic Embrace Universe</p>
      </header>
      <main style={{ padding: '2rem' }}>
        <h2>Home</h2>
        <p>Welcome to the Nagotoria anime studio — where forbidden passion meets psychological tension. Dive into the universe of art, stories, and cinematic moments.</p>
      </main>
    </div>
  );
}
