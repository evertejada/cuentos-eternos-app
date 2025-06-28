export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: '3rem', color: '#7e3ff2' }}>
        Bienvenido a Cuentos Eternos
      </h1>
      <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>
        Donde cada historia puede ser tuya ✨
      </p>

      <a href="https://tupagina.com/formulario" style={{
        marginTop: '30px',
        padding: '15px 30px',
        backgroundColor: '#7e3ff2',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '10px',
        fontWeight: 'bold',
        fontSize: '18px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        transition: 'transform 0.2s',
      }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        Crear mi caricatura mágica
      </a>
    </div>
  );
}
