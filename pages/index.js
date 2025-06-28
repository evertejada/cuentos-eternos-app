import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cuentos Eternos</title>
        <meta name="description" content="Cuentos personalizados para niños que quieren soñar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Bienvenido a Cuentos Eternos</h1>
        <p>Donde cada historia puede ser tuya ✨</p>
      </main>
    </div>
  );
}
