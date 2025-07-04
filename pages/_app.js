import Link from 'next/link';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <nav style={{
        background: '#6b21a8',
        padding: '1rem',
        display: 'flex',
        gap: '1.5rem',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold'
      }}>
        <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Inicio</Link>
        <Link href="/narrar" style={{ color: 'white', textDecoration: 'none' }}>Narrar</Link>
        <Link href="/upsell" style={{ color: 'white', textDecoration: 'none' }}>Upsell</Link>
        <Link href="/probar-cuento" style={{ color: 'white', textDecoration: 'none' }}>Probar cuento</Link>
        <Link href="/caricatura-entregada" style={{ color: 'white', textDecoration: 'none' }}>Caricatura</Link>
      </nav>

      <main style={{ padding: '2rem' }}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
