export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f4ecff',
      fontFamily: 'sans-serif',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ color: '#8e44ad', fontSize: '3rem' }}>Bienvenido a Cuentos Eternos</h1>
      <p style={{ fontSize: '1.2rem' }}>Donde cada historia puede ser tuya ✨</p>
    </div>
  );
}
