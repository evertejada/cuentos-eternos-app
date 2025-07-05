import '@/styles/globals.css';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  return (
    <div style={{ backgroundColor: '#f3e5f5', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      
      {/* CINTILLO ANIMADO */}
      <div style={{
        backgroundColor: '#f3e5f5',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
        height: '40px',
        borderBottom: '1px solid #ccc'
      }}>
        <div style={{
          display: 'inline-block',
          paddingLeft: '100%',
          animation: 'scroll-left 15s linear infinite',
          fontWeight: 'bold',
          color: '#6a1b9a',
          fontSize: '16px'
        }}>
          ✨ Descarga nuestra app, inmortaliza lo que más amas con un cuento eterno ✨
        </div>
      </div>

      {/* CONTENIDO DE LA PÁGINA */}
      <Component {...pageProps} />
    </div>
  );
}
