import { Check, X, Shield, Sparkles } from "lucide-react";
import { COMPARISON_FEATURES, WHATSAPP_NUMBER } from "@/lib/constants";

export default function ComparisonTable() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hola, estuve viendo la comparativa de Inclub frente a clubes tradicionales y me gustaría recibir asesoría detallada."
  )}`;

  return (
    <section className="py-24 bg-white relative" id="comparativa">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 font-semibold text-xs uppercase tracking-wider mb-4 border border-amber-200">
            <Sparkles size={15} className="text-amber-600" />
            Decisión Inteligente
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-950 tracking-tight mb-4">
            ¿Por qué Inclub Supera al Modelo Tradicional?
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Descubre por qué miles de familias e inversionistas eligen la copropiedad hotelera y el modelo Inclub en lugar de gastar en membresías estáticas o pagar tarifas hoteleras todos los años.
          </p>
        </div>

        {/* Tabla Comparativa Desktop / Tablet */}
        <div className="overflow-x-auto pb-4">
          <div className="min-w-[760px] bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70">
                  <th className="py-6 px-6 text-sm font-bold text-slate-500 uppercase tracking-wider w-1/4">
                    Características Clave
                  </th>
                  
                  {/* Columna Inclub Destacada */}
                  <th className="py-6 px-6 bg-emerald-950 text-white w-1/3 relative">
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-amber-500" />
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-black text-white">Inclub / InResorts</span>
                      <span className="text-[10px] font-bold uppercase bg-amber-500 text-emerald-950 px-2 py-0.5 rounded-full">
                        Ganador
                      </span>
                    </div>
                    <span className="text-xs text-emerald-300 font-normal block mt-0.5">
                      Copropiedad, Acciones y Vacaciones
                    </span>
                  </th>

                  <th className="py-6 px-6 text-slate-700 w-1/4">
                    <span className="text-base font-bold block">Clubes Tradicionales</span>
                    <span className="text-xs text-slate-400 font-normal">Membresías sociales de lujo</span>
                  </th>

                  <th className="py-6 px-6 text-slate-700 w-1/4">
                    <span className="text-base font-bold block">Hoteles Comerciales</span>
                    <span className="text-xs text-slate-400 font-normal">Gasto por noche puntual</span>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {COMPARISON_FEATURES.map((item, idx) => (
                  <tr 
                    key={idx} 
                    className={`transition-colors ${item.highlight ? "bg-amber-50/30" : "hover:bg-slate-50/50"}`}
                  >
                    {/* Criterio */}
                    <td className="py-5 px-6 font-semibold text-slate-800 text-sm">
                      {item.feature}
                    </td>

                    {/* Inclub */}
                    <td className="py-5 px-6 bg-emerald-950/5 font-bold text-emerald-950 text-sm border-x border-emerald-900/10">
                      <div className="flex items-start gap-2.5">
                        <div className="p-1 rounded-full bg-emerald-100 text-emerald-700 mt-0.5 shrink-0">
                          <Check size={14} className="stroke-[3]" />
                        </div>
                        <span className="text-slate-900 font-bold">{item.inclub}</span>
                      </div>
                    </td>

                    {/* Club Tradicional */}
                    <td className="py-5 px-6 text-slate-600 text-sm">
                      <div className="flex items-start gap-2.5">
                        <div className="p-1 rounded-full bg-red-100 text-red-600 mt-0.5 shrink-0">
                          <X size={14} className="stroke-[2.5]" />
                        </div>
                        <span>{item.traditionalClub}</span>
                      </div>
                    </td>

                    {/* Hoteles */}
                    <td className="py-5 px-6 text-slate-600 text-sm">
                      <div className="flex items-start gap-2.5">
                        <div className="p-1 rounded-full bg-slate-100 text-slate-500 mt-0.5 shrink-0">
                          <X size={14} className="stroke-[2.5]" />
                        </div>
                        <span>{item.commercialHotels}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Banner Inferior de Respaldo */}
        <div className="mt-12 bg-gradient-to-r from-emerald-900 to-emerald-950 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-500/20 text-amber-400 rounded-2xl shrink-0">
              <Shield size={32} />
            </div>
            <div>
              <h4 className="text-lg font-bold">Sé Dueño de un Activo Real, no de un Gasto</h4>
              <p className="text-sm text-emerald-200">
                Tu inversión incluye acciones de la empresa propietaria y el respaldo de infraestructura construida.
              </p>
            </div>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-amber-500 text-emerald-950 font-bold hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/25"
          >
            Hablar con un Especialista
          </a>
        </div>

      </div>
    </section>
  );
}
