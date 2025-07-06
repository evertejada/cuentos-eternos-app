// pages/profiles.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';

const perfiles = [
  { nombre: 'Ximena', avatar: '/avatars/avatar1.png' },
  { nombre: 'Mía', avatar: '/avatars/avatar2.png' },
  { nombre: 'Lucas', avatar: '/avatars/avatar3.png' },
  { nombre: 'Agregar nuevo', avatar: '/avatars/add.png', nuevo: true },
];

export default function SeleccionarPerfil() {
  const router = useRouter();

  const seleccionarPerfil = (perfil) => {
    if (perfil.nuevo) {
      alert('Función "Agregar nuevo perfil" disponible en versión premium.');
      return;
    }

    localStorage.setItem('perfilSeleccionado', JSON.stringify(perfil));
    router.push('/');
  };

  useEffect(() => {
    const yaSeleccionado = localStorage.getItem('perfilSeleccionado');
    if (yaSeleccionado) {
      router.push('/');
    }
  }, []);

  return (
    <>
      <Head>
        <title>Selecciona tu perfil</title>
      </Head>
      <div style={{ minHeight: '100vh', backgroundColor: '#1a1a2e', color: '#fff', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>¿Quién va a soñar hoy? ✨</h1>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '30px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {perfiles.map((perfil) => (
            <div key={perfil.nombre} onClick={() => seleccionarPerfil(perfil)} style={{ cursor: 'pointer', transition: '0.3s' }}>
              <img
                src={perfil.avatar}
                alt={perfil.nombre}
                style={{
                  width: '100%',
                  borderRadius: '16px',
                  border: perfil.nuevo ? '2px dashed #aaa' : '3px solid #fff',
                  opacity: perfil.nuevo ? 0.6 : 1,
                  transition: 'transform 0.2s',
                }}
              />
              <p style={{ marginTop: '10px', fontSize: '1.1rem', fontWeight: '500' }}>{perfil.nombre}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
