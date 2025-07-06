import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const defaultAvatars = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
];

export default function Profiles() {
  const [profiles, setProfiles] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("eternosProfiles")) || [];
    if (stored.length > 0) {
      setProfiles(stored);
    } else {
      const initialProfiles = defaultAvatars.map((img, i) => ({
        id: i,
        name: `Perfil ${i + 1}`,
        img,
      }));
      setProfiles(initialProfiles);
      localStorage.setItem("eternosProfiles", JSON.stringify(initialProfiles));
    }
  }, []);

  const handleSelect = (profile) => {
    localStorage.setItem("eternosSelected", JSON.stringify(profile));
    router.push("/dashboard");
  };

  const handleAdd = () => {
    const newId = profiles.length + 1;
    const newProfile = {
      id: newId,
      name: `Nuevo ${newId}`,
      img: `/images/${(newId % 3) + 1}.png`, // reutiliza imágenes
    };
    const updated = [...profiles, newProfile];
    setProfiles(updated);
    localStorage.setItem("eternosProfiles", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-purple-100 flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-2xl font-bold mb-8 text-purple-800">¿Quién está leyendo hoy?</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {profiles.map((p) => (
          <div
            key={p.id}
            className="flex flex-col items-center cursor-pointer transition hover:scale-105"
            onClick={() => handleSelect(p)}
          >
            <img
              src={p.img}
              alt={p.name}
              className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
            />
            <span className="mt-2 font-medium text-sm text-purple-900">{p.name}</span>
          </div>
        ))}

        {/* Botón para agregar nuevo perfil */}
        <div
          onClick={handleAdd}
          className="flex flex-col items-center justify-center w-28 h-28 rounded-full border-4 border-dashed border-purple-400 cursor-pointer hover:bg-purple-200 transition"
        >
          <span className="text-3xl font-bold text-purple-600">+</span>
        </div>
      </div>
    </div>
  );
}
