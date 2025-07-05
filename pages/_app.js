import Link from 'next/link';

export default function Home() {
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
          fontSize: '16px',
        }}>
          ✨ Descarga nuestra app, inmortaliza lo que más amas con un cuento eterno ✨
        </div>
      </div>

      {/* HERO */}
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <h1 style={{ fontSize: '3em', color: '#7b1fa2' }}>Bienvenido a Cuentos Eternos</h1>
        <p style={{ fontSize: '1.2em', marginTop: '10px', color: '#4a148c' }}>
          Donde cada historia se convierte en un recuerdo eterno, narrado con tu voz y tus emociones.
        </p>
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
          <p>Crea cuentos con tus personajes, voz y recuerdos reales.</p>
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

      {/* ANIMACIÓN GLOBAL */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>

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
