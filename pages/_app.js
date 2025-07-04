import Link from 'next/link'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* MENÚ PRINCIPAL */}
      <nav style={{
        backgroundColor: '#6a1b9a',
        padding: '15px',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap'
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

      {/* CINTILLO ANIMADO */}
      <div className="promo-banner">
        <div className="promo-text">
          ✨ Crea tu historia, descarga nuestra app y hazla eterna ✨
        </div>
      </div>

      {/* Página activa */}
      <Component {...pageProps} />
    </>
  )
}
