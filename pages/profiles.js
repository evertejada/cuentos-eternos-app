import React from 'react';
import Image from 'next/image';

const profiles = [
  { name: 'Leo', image: '/images/1.png' },
  { name: 'Mia', image: '/images/2.png' },
  { name: 'Max', image: '/images/3.png' },
];

export default function Profiles() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e3e9ff] to-[#f5f7ff] flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-purple-700 mb-12">¿Quién está viendo?</h1>

      {/* Perfiles */}
      <div className="flex gap-6 flex-wrap justify-center mb-16">
        {profiles.map((profile, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-300 shadow-lg">
              <Image
                src={profile.image}
                alt={profile.name}
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-lg font-semibold text-gray-800">{profile.name}</p>
          </div>
        ))}

        {/* Agregar perfil */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
            <span className="text-white text-5xl font-bold">+</span>
          </div>
          <p className="text-lg font-semibold text-purple-600">Agregar perfil</p>
        </div>
      </div>

      {/* Banner inferior */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-4 rounded-xl shadow-xl flex items-center gap-4">
        <p className="text-white font-bold text-lg">¡Caricatura mágica por $1!</p>
        <button
          className="bg-white text-orange-600 font-semibold px-4 py-2 rounded-full shadow hover:bg-orange-100 transition"
          onClick={() => window.location.href = '/pago'}
        >
          ¡Descúbrelo!
        </button>
      </div>
    </div>
  );
}
