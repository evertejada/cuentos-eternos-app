export default function Page() {
  const perfiles = [
    { nombre: "Leo", img: "/1.png" },
    { nombre: "Mia", img: "/2.png" },
    { nombre: "Max", img: "/3.png" },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#e7ecfb] to-[#f2f6ff] text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-12 drop-shadow-md">
        ¿Quién está viendo?
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {perfiles.map((perfil, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-xl shadow-lg p-4 w-[120px] hover:scale-105 transition"
          >
            <img
              src={perfil.img}
              alt={perfil.nombre}
              className="w-20 h-20 rounded-full border-4 border-blue-300 object-cover"
            />
            <p className="mt-2 font-semibold text-gray-700">{perfil.nombre}</p>
          </div>
        ))}

        {/* Agregar Perfil */}
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-pink-500 to-purple-500 text-white rounded-xl shadow-lg p-4 w-[120px] hover:scale-105 transition">
          <div className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center text-3xl font-bold">
            +
          </div>
          <p className="mt-2 font-semibold">Agregar perfil</p>
        </div>
      </div>

      {/* Oferta */}
      <div className="mt-10 bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-4 rounded-xl shadow-md text-white flex items-center justify-between w-full max-w-md">
        <span className="text-lg font-bold">
          ¡Caricatura mágica por $1!
        </span>
        <a
          href="/caricatura"
          className="bg-white text-orange-500 font-semibold px-4 py-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          ¡Descúbrelo!
        </a>
      </div>
    </main>
  );
}
