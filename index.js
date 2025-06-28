
export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem', textAlign: 'center', backgroundColor: '#f8f4ff' }}>
      <img src="/logo.png" alt="Cuentos Eternos" style={{ width: '120px', marginBottom: '1rem' }} />
      <h1>Bienvenidos a Cuentos Eternos</h1>
      <p>Historias mágicas para soñar y compartir en familia.</p>
      <a href="https://wa.me/50493413922?text=Hola!%20Quiero%20crear%20mi%20cuento%20eterno." target="_blank" style={{ marginTop: '2rem', display: 'inline-block', padding: '1rem 2rem', backgroundColor: '#8e77ff', color: 'white', borderRadius: '10px', textDecoration: 'none' }}>Crear mi cuento eterno</a>
    </div>
  );
}
