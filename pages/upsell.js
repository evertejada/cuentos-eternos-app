import Link from 'next/link';

export default function Upsell() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🎁 ¡Gracias por tu compra!</h1>
      <p>Ya recibimos tu solicitud para la caricatura mágica. 🧚‍♀️</p>

      <hr style={{ margin: '2rem 0' }} />

      <h2>✨ Pero espera... tenemos algo muy especial para ti:</h2>
      <p>
        ¿Te gustaría transformar tu historia familiar en un <strong>cuento ilustrado profesional</strong> con voces reales y un libro para colorear incluido?
      </p>

      <ul>
        <li>📘 Cuento en PDF con ilustraciones estilo Pixar</li>
        <li>🎙️ Narrado con tu voz (opcional)</li>
        <li>🎨 Libro para colorear personalizado</li>
      </ul>

      <p><strong>Precio especial solo por hoy: <span style={{ fontSize: '1.5rem', color: 'green' }}>$4.99</span></strong></p>

      <a
        href="https://go.hotmart.com/V100303552Y"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '1rem',
          padding: '1rem 2rem',
          backgroundColor: '#ff6600',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 'bold'
        }}
      >
        👉 Quiero mi cuento personalizado
      </a>

      <p style={{ marginTop: '2rem' }}>
        O si ya hiciste tu compra, puedes volver al <Link href="/">inicio</Link>.
      </p>
    </div>
  );
}
