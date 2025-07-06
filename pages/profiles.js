import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const defaultAvatars = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png"
];

export default function Profiles() {
  const [profiles, setProfiles] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("eternosProfiles")) || [];
    setProfiles(stored.length > 0 ? stored : defaultAvatars.map((img, i) => ({ id: i, name: `Perfil ${i + 1}`, img })));
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
      img: `/images/${newId}.png`
    };
    const updated = [...profiles, newProfile];
    setProfiles(updated);
    localStorage.setItem("eternosProfiles", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-purple-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-6 text-purple-800">¿Quién está leyendo hoy?</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {profiles.map((p) => (
          <div
            key={p.id}
            className="cursor-pointer flex flex-col items-center hover:scale-105 transition"
            onClick={() => handleSelect(p)}
          >
            <img src={p.img} className="w-24 h-24 rounded-full shadow-lg border-4 border-white" />
            <span className="mt-2 text-purple-700 font-semibold">{p.name}</span>
          </div>
        ))}
        <div
          onClick={handleAdd}
          className="flex flex-col items-center justify-center w-24 h-24 rounded-full border-4 border-dashed border-purple-400 text-purple-500 text-4xl hover:scale-105 transition cursor-pointer bg-white"
        >
          +
        </div>
      </div>
    </div>
  );
}
