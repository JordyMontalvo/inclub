import { Presentation, ShieldCheck, Rocket, Video } from "lucide-react";

export default function TeamSupport() {
  return (
    <section className="py-24 bg-emerald-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            No Vienes a Improvisar
          </h2>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto font-light">
            Únete al equipo y recibe todo el soporte, herramientas y mentoría que necesitas para recuperar tu inversión y construir un negocio rentable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: ShieldCheck,
              title: "Mentoría 1 a 1",
              desc: "Acompañamiento directo de Jordy Montalvo y líderes con resultados probados."
            },
            {
              icon: Rocket,
              title: "Herramientas Digitales",
              desc: "Embudos de venta, landing pages y recursos de marketing listos para usar."
            },
            {
              icon: Video,
              title: "Soporte en Zooms",
              desc: "Presentaciones semanales y capacitaciones para que no tengas que explicar todo tú solo."
            },
            {
              icon: Presentation,
              title: "Visitas al Club",
              desc: "Acompañamiento presencial para mostrar los avances del proyecto a tus prospectos."
            }
          ].map((feature, i) => (
            <div key={i} className="bg-emerald-900/50 backdrop-blur-sm p-8 rounded-3xl border border-emerald-800 hover:bg-emerald-800/50 transition-colors">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-emerald-950 mb-6">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-emerald-100 leading-relaxed font-light">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
