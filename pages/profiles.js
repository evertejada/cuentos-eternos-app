// pages/seleccionar-perfil.js
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
    router.push('/'); // Redirige al home
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
        <title>Selecciona tu perfil | Cuentos Eternos</title>
      </Head>
      <div style={{
        background: 'linear-gradient(135deg, #ffd6ff, #e0c3fc)',
        minHeight: '100vh',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '30px', color: '#6a1b9a' }}>
          ¿Quién va a escuchar un cuento mágico hoy?
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '24px',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          {perfiles.map((perfil, i) => (
            <div
              key={i}
              onClick={() => seleccionarPerfil(perfil)}
              style={{
                background: '#fff',
                borderRadius: '16px',
                padding: '16px',
                cursor: 'pointer',
                boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img
                src={perfil.avatar}
                alt={perfil.nombre}
                style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '12px' }}
              />
              <h3 style={{ margin: 0, fontSize: '1rem', color: '#8e24aa' }}>{perfil.nombre}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

