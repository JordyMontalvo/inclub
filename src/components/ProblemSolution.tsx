import { Building2, Landmark, TrendingDown, Users, Coins, TrendingUp, CheckCircle2, XCircle } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-slate-50" id="modelo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-4">
            Un Modelo Inteligente de Inversión
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Descubre por qué nuestro modelo fraccional y de red supera a la inversión tradicional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Inversión Tradicional (Problema) */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500">
                <Landmark size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Inmobiliaria Tradicional</h3>
            </div>
            
            <ul className="space-y-6">
              {[
                { icon: Coins, text: "Altas barreras de entrada y capital inmovilizado." },
                { icon: Building2, text: "Dependencia de bancos y créditos hipotecarios." },
                { icon: TrendingDown, text: "Riesgo de desocupación, mantenimiento e inquilinos morosos." },
                { icon: XCircle, text: "Rentabilidad lineal y lenta (años para recuperar la inversión)." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-red-50 p-1.5 rounded-full text-red-500">
                    <item.icon size={20} />
                  </div>
                  <p className="text-slate-600 leading-relaxed font-medium">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Modelo InResorts (Solución) */}
          <div className="bg-emerald-900 rounded-3xl p-8 lg:p-10 shadow-2xl shadow-emerald-900/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-800 rounded-bl-full opacity-50 -z-10 transition-transform group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-950 rounded-tr-full opacity-50 -z-10" />
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center text-emerald-950 shadow-lg shadow-amber-500/30">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">Modelo inResorts</h3>
            </div>
            
            <ul className="space-y-6 relative z-10">
              {[
                { icon: CheckCircle2, text: "Cuotas accesibles y financiamiento directo sin bancos." },
                { icon: CheckCircle2, text: "Uso familiar inmediato en instalaciones de primer nivel." },
                { icon: TrendingUp, text: "Alta rentabilidad: Utilidades anuales + Comisiones de red." },
                { icon: CheckCircle2, text: "Cero estrés: Nosotros administramos y mantenemos el complejo." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-amber-500/20 p-1.5 rounded-full text-amber-400">
                    <item.icon size={20} />
                  </div>
                  <p className="text-emerald-50 leading-relaxed font-medium">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
