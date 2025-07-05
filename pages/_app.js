import Link from 'next/link';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* MENÚ PRINCIPAL */}
      <nav style={{
        backgroundColor: '#6a1b9a',
        padding: '15px',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px'
      }}>
        <Link href="/"><span style={{ color: 'white', fontWeight: 'bold' }}>Inicio</span></Link>
        <Link href="/narrar"><span style={{ color: 'white' }}>Narrar</span></Link>
        <Link href="/probar-cuento"><span style={{ color: 'white' }}>Probar Cuento</span></Link>
        <Link href="/caricatura-entregada"><span style={{ color: 'white' }}>Caricatura</span></Link>
        <Link href="/mis-compras"><span style={{ color: 'white' }}>Mis Compras</span></Link>
        <Link href="/mis-cuentos"><span style={{ color: 'white' }}>Mis Cuentos</span></Link>
        <Link href="/clonar-mi-voz"><span style={{ color: 'white' }}>Clonar mi Voz</span></Link>
        <Link href="/biblioteca"><span style={{ color: 'white' }}>Biblioteca</span></Link>
      </nav>

      {/* CINTILLO ANIMADO CON SCROLL */}
      <div style={{
        backgroundColor: '#f3e5f5',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
        height: '40px',
      }}>
        <div style={{
          position: 'absolute',
          whiteSpace: 'nowrap',
          willChange: 'transform',
          animation: 'scroll-left 15s linear infinite',
          fontWeight: 'bold',
          color: '#6a1b9a',
          fontSize: '16px',
          paddingLeft: '100%'
        }}>
          ✨ Descarga nuestra app, inmortaliza lo que más amas con un cuento eterno ✨
        </div>
      </div>

      <Component {...pageProps} />

      {/* ANIMACIÓN GLOBAL */}
      <style jsx global>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </>
  );
}
