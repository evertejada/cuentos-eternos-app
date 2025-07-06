// pages/profiles.js

import { useRouter } from 'next/router';

export default function Profiles() {
  const router = useRouter();

  const profiles = [
    { name: 'Ximena', image: '/images/ximena.jpg' },
    { name: 'Mía', image: '/images/mia.jpg' },
    { name: 'Lucas', image: '/images/lucas.jpg' },
  ];

  const handleSelect = (name) => {
    router.push(`/perfil/${name}`);
  };

  return (
    <div style={{
      background: 'linear-gradient(to bottom, #e0eafc, #cfdef3)',
      minHeight: '100vh',
      textAlign: 'center',
      padding: '40px 20px'
    }}>
      <h1 style={{ color: '#6A1B9A', fontSize: '2.5rem', marginBottom: '40px' }}>
        ¿Quién va a escuchar un cuento mágico hoy?
      </h1>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        flexWrap: 'wrap',
      }}>
        {profiles.map((profile, i) => (
          <div
            key={i}
            onClick={() => handleSelect(profile.name)}
            style={{
              cursor: 'pointer',
              padding: '15px',
              borderRadius: '20px',
              backgroundColor: 'white',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              width: '130px',
              textAlign: 'center',
              transition: 'transform 0.2s ease-in-out',
            }}
          >
            <img
              src={profile.image}
              alt={profile.name}
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'cover',
                borderRadius: '50%',
                marginBottom: '10px',
              }}
            />
            <strong style={{ color: '#6A1B9A' }}>{profile.name}</strong>
          </div>
        ))}

        {/* Botón de Agregar perfil */}
        <div
          onClick={() => alert('Funcionalidad próxima')}
          style={{
            cursor: 'pointer',
            padding: '15px',
            borderRadius: '20px',
            backgroundColor: 'linear-gradient(to right, #ff416c, #ff4b2b)',
            background: '#f0f0f0',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            width: '130px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            transition: 'transform 0.2s ease-in-out',
          }}
        >
          <span style={{
            fontSize: '3rem',
            color: '#9c27b0',
            lineHeight: '1',
            marginBottom: '10px'
          }}>+</span>
          <strong style={{ color: '#6A1B9A' }}>Agregar nuevo</strong>
        </div>
      </div>
    </div>
  );
}
