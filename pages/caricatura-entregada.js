import { useEffect } from "react";
import { useRouter } from "next/router";

export default function CaricaturaEntregada() {
  const router = useRouter();

  useEffect(() => {
    if (!router.query.success) {
      router.push("/");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-white flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-3xl font-bold text-purple-800 mb-4 text-center">
        🎉 ¡Gracias por tu compra!
      </h1>
      <p className="text-lg text-center mb-6 max-w-xl">
        Tu caricatura mágica será creada en las próximas horas. Por favor, llena el siguiente formulario para que nuestro equipo comience.
      </p>

      {/* Formulario incrustado */}
      <iframe
        src="https://tupagina.com/formulario-caricatura"  // Reemplazar con el formulario real
        className="w-full max-w-xl h-[500px] border rounded-lg shadow"
      />

      <div className="mt-10 w-full max-w-xl">
        <h2 className="text-2xl font-semibold text-purple-700 mb-2 text-center">
          💖 ¿Quieres un cuento personalizado con tu voz?
        </h2>
        <p className="text-center text-gray-700 mb-4">
          Mira este ejemplo y descubre lo mágico que puede ser:
        </p>

        {/* Video de ejemplo */}
        <div className="w-full aspect-video mb-6">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/WSLZc6L5YuE"
            title="Ejemplo de Cuento"
            allow="accelerometer; autoplay; encrypted-media; gyroscope;"
            allowFullScreen
          ></iframe>
        </div>

        {/* Botón de upsell */}
        <div className="text-center">
          <a
            href="https://evertejada.gumroad.com/l/otkrg"
            className="bg-purple-600 text-white px-6 py-3 rounded-xl text-lg font-bold shadow hover:bg-purple-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quiero mi cuento personalizado ✨
          </a>
        </div>
      </div>
    </div>
  );
}
