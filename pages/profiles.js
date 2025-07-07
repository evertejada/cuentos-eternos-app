import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function SeleccionPerfil() {
  const perfiles = [
    { nombre: "Leo", img: "/leo.jpg" },
    { nombre: "Mia", img: "/mia.jpg" },
    { nombre: "Max", img: "/max.jpg" }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 px-4 py-10">
      <h1 className="text-4xl font-bold text-purple-700 mb-10 shadow-sm">
        ¿Quién está viendo?
      </h1>

      <div className="flex flex-wrap gap-6 justify-center mb-12">
        {perfiles.map((perfil, index) => (
          <Card key={index} className="w-32 h-40 flex flex-col items-center justify-center rounded-2xl shadow-xl transition-transform hover:scale-105 cursor-pointer bg-white">
            <img
              src={perfil.img}
              alt={perfil.nombre}
              className="w-20 h-20 rounded-full object-cover mb-2 border-4 border-blue-200"
            />
            <span className="text-lg font-semibold text-gray-700">{perfil.nombre}</span>
          </Card>
        ))}

        <Card className="w-32 h-40 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-400 to-pink-400 text-white shadow-xl hover:scale-105 cursor-pointer transition-all">
          <span className="text-4xl mb-2">＋</span>
          <span className="font-medium">Agregar perfil</span>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full px-6 py-4 shadow-md flex items-center gap-6">
        <p className="text-white font-bold text-lg m-0">¡Caricatura mágica por $1!</p>
        <Button className="bg-white text-orange-500 hover:bg-orange-100 transition-all font-semibold px-4 py-2 rounded-full shadow">
          ¡Descúbrelo!
        </Button>
      </div>
    </div>
  );
}
