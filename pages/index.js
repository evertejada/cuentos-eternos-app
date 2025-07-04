import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#f3e5f5', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      
      {/* NAVBAR */}
      <nav style={{ backgroundColor: '#6a1b9a', padding: '15px 0', display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <Link href="/"><span style={{ color: 'white', fontWeight: 'bold' }}>Inicio</span></Link>
        <Link href="/narrar"><span style={{ color: 'white' }}>Narrar</span></Link>
        <Link href="/probar-cuento"><span style={{ color: 'white' }}>Probar Cuento</span></Link>
        <Link href="/caricatura-entregada"><span style={{ color: 'white' }}>Caricatura</span></Link>
        <Link href="/mis-compras"><span style={{ color: 'white' }}>Mis Compras</span></Link>
        <Link href="/mis-cuentos"><span style={{ color: 'white' }}>Mis Cuentos</span></Link>
        <Link href="/clonar-voz"><span style={{ color: 'white' }}>Clonar mi Voz</span></Link>
        <Link href="/biblioteca"><span style={{ color: 'white' }}>Biblioteca</span></Link>
      </nav>

      {/* CINTILLO PROMO */}
      <div style={{ backgroundColor: '#e1bee7', textAlign: 'center', padding: '10px 0', fontWeight: 'bold', color: '#6a1b9a' }}>
        ✨ Crea tu historia, descarga nuestra app y hazla eterna ✨
      </div>

      {/* HERO */}
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <h1 style={{ fontSize: '3em', color: '#7b1fa2' }}>Bienvenido a Cuentos Eternos</h1>
        <p style={{ fontSize: '1.2em', marginTop: '10px', color: '#4a148c' }}>Donde cada historia puede ser tuya ✨</p>
        <button style={{
          backgroundColor: '#8e24aa',
          color: 'white',
          border: 'none',
          padding: '15px 30px',
          fontSize: '1em',
          marginTop: '30px',
          borderRadius: '10px',
          cursor: 'pointer',
        }}>
          📲 Descarga la App
        </button>
      </div>

      {/* SECCIÓN INFORMATIVA */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: '60px',
        gap: '30px',
        padding: '0 40px 80px',
      }}>
        <div style={cardStyle}>
          <h3>🎨 Personaliza tu historia</h3>
          <p>Crea cuentos con tus personajes, voz y emociones reales.</p>
        </div>
        <div style={cardStyle}>
          <h3>👧 Ideal para niños</h3>
          <p>Estimula la imaginación, el amor por la lectura y fortalece el vínculo familiar.</p>
        </div>
        <div style={cardStyle}>
          <h3>📚 Biblioteca mágica</h3>
          <p>Accede a todos tus cuentos y descárgalos cuando quieras.</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '15px',
  boxShadow: '0px 5px 15px rgba(0,0,0,0.1)',
  maxWidth: '300px',
  textAlign: 'center',
  color: '#6a1b9a',
};
