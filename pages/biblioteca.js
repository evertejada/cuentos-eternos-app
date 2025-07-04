export default function Biblioteca() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>📖 Mi Biblioteca</h1>
      <p>Accede aquí a todo el contenido desbloqueado: cuentos, caricaturas, libros para colorear, y más.</p>

      <ul>
        <li>✨ Cuento: <a href="/pdfs/jessica.pdf" download>Jessica: La Gran Hermana</a></li>
        <li>🖍️ Libro para Colorear: <a href="/pdfs/libro-jessica.pdf" download>Descargar PDF</a></li>
        <li>🎧 Audio Narrado: <a href="/audios/jessica.mp3" download>Escuchar</a></li>
      </ul>

      <p>💡 Si no ves tu contenido, asegúrate de haber iniciado sesión o revisa tu correo.</p>
    </div>
  );
}
