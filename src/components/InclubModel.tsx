import { TrendingUp, PartyPopper, Network } from "lucide-react";

export default function InclubModel() {
  const pillars = [
    {
      icon: TrendingUp,
      title: "Valorización Patrimonial",
      description: "Tus acciones se revalorizan con el desarrollo de cada proyecto. Participa en las utilidades generadas por el alojamiento, restaurantes y servicios del resort.",
      color: "emerald"
    },
    {
      icon: PartyPopper,
      title: "Disfrute y Ahorro",
      description: "Tú y tu familia disfrutan de semanas de alojamiento gratuito, full days ilimitados y descuentos exclusivos en consumo. Tus vacaciones, aseguradas.",
      color: "amber"
    },
    {
      icon: Network,
      title: "Comisiones y Red",
      description: "Opcionalmente, genera ingresos residuales recomendando el club. Obtén bonos de patrocinio directo y comisiones recurrentes por construir tu equipo.",
      color: "emerald"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="negocio">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-emerald-50 rounded-full blur-3xl opacity-50 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold tracking-wider mb-6">
              EL MODELO INCLUB
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-6 leading-tight">
              Gana de 3 formas distintas con una sola inversión
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              No es solo comprar por comprar. Nuestro modelo está diseñado para que tu dinero trabaje para ti, mientras tú disfrutas, y te premia si decides compartir la oportunidad con otros.
            </p>
            
            <a href="#contacto" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-emerald-900 text-white font-bold text-lg hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-900/20">
              Conocer el Plan de Pagos
            </a>
          </div>

          <div className="space-y-6">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-2xl shrink-0 ${pillar.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-600'}`}>
                    <pillar.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{pillar.title}</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
