import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-purple-50 font-sans">
      {/* CINTILLO */}
      <div className="bg-purple-200 text-purple-900 font-bold py-3 text-center animate-pulse">
        ✨ Crea tu historia, descarga nuestra app y hazla eterna ✨
      </div>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center py-16 px-6 text-center">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-purple-800">
          Bienvenido a Cuentos Eternos
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-purple-700 mt-4 max-w-2xl">
          Donde cada historia puede ser tuya. Hazla inolvidable con tu voz, personajes y recuerdos.
        </motion.p>
        <motion.a href="#descarga" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          className="mt-8 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg">
          📲 Descargar la App
        </motion.a>
      </section>

      {/* INFO SECTION */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <FeatureCard icon="🎨" title="Personaliza tu historia" text="Crea cuentos únicos con tu voz, personajes y emociones reales." />
          <FeatureCard icon="👧" title="Ideal para niños" text="Fortalece el vínculo familiar y fomenta el amor por la lectura." />
          <FeatureCard icon="📚" title="Biblioteca mágica" text="Guarda y descarga todos tus cuentos en un solo lugar." />
        </div>
      </section>

      {/* SECCIÓN CTA FINAL */}
      <section id="descarga" className="bg-purple-100 py-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4">Empieza hoy tu viaje mágico</h2>
        <p className="text-purple-600 mb-6">Descarga la app y crea el recuerdo más hermoso para tus hijos</p>
        <a href="https://cuentoseternos.com" className="bg-purple-700 text-white px-6 py-3 rounded-full hover:bg-purple-800 transition">
          Ir a cuentoseternos.com
        </a>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-md text-center">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold text-purple-800 mb-2">{title}</h3>
      <p className="text-purple-600">{text}</p>
    </motion.div>
  );
}
