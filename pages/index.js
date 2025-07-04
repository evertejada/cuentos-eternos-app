import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      backgroundColor: '#f3e5f5',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>

      {/* CINTILLO PROMO */}
      <div style={{
        backgroundColor: '#e1bee7',
        textAlign: 'center',
        padding: '10px 0',
        fontWeight: 'bold',
        color: '#6a1b9a',
        fontSize: '1rem'
      }}>
        ✨ Crea tu historia, descarga nuestra app y hazla eterna ✨
      </div>

      {/* HERO SECTION */}
      <div style={{
        textAlign: 'center',
        marginTop: '60px',
        padding: '0 20px'
      }}>
        <h1 style={{ fontSize: '2.8em', color: '#7b1fa2', marginBottom: '10px' }}>
          Bienvenido a <span style={{ color: '#4a148c' }}>Cuentos Eternos</span>
        </h1>
        <p style={{ fontSize: '1.2em', color: '#6a1b9a', maxWidth: '600px', margin: '0 auto' }}>
          Donde cada historia se convierte en un recuerdo eterno, narrado con tu voz y tus emociones.
        </p>
        <button style={buttonStyle}>
          📲 Descarga la App
        </button>
      </div>

      {/* VIDEO DEMO */}
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <iframe
          width="90%"
          height="315"
          src="https://www.youtube.com/embed/WSL7c6L5YuE"
          title="Demo de Cuentos Eternos"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: '15px', maxWidth: '800px' }}
        ></iframe>
      </div>

      {/* SECCIÓN INFORMATIVA */}
      <div style={infoSection}>
        <div style={cardStyle}>
          <h3>🎨 Personaliza tu historia</h3>
          <p>Crea cuentos con tus personajes, tu voz y recuerdos reales.</p>
        </div>
        <div style={cardStyle}>
          <h3>👨‍👩‍👧‍👦 Conexión familiar</h3>
          <p>Fortalece el vínculo entre padres e hijos con historias únicas.</p>
        </div>
        <div style={cardStyle}>
          <h3>🧠 Educación emocional</h3>
          <p>Ayuda a los niños a comprender sus emociones a través de cuentos.</p>
        </div>
        <div style={cardStyle}>
          <h3>📚 Tu biblioteca mágica</h3>
          <p>Guarda y descarga todos los cuentos que crees con un solo clic.</p>
        </div>
      </div>
    </div>
  );
}

// 🎨 Estilos
const buttonStyle = {
  backgroundColor: '#8e24aa',
  color: 'white',
  border: 'none',
  padding: '15px 30px',
  fontSize: '1em',
  marginTop: '30px',
  borderRadius: '10px',
  cursor: 'pointer',
  boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
};

const cardStyle = {
  backgroundColor: 'white',
  padding: '25px',
  borderRadius: '15px',
  boxShadow: '0px 5px 20px rgba(0,0,0,0.1)',
  maxWidth: '280px',
  textAlign: 'center',
  color: '#4a148c',
  flex: '1 1 250px'
};

const infoSection = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginTop: '60px',
  gap: '30px',
  padding: '0 40px 80px'
};
