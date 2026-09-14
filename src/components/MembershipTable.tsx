import { MEMBERSHIPS, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/constants";
import { Check, Users } from "lucide-react";

export default function MembershipTable() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="py-24 bg-slate-50" id="membresias">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-4">
            Elige tu Membresía Vitalicia
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Planes diseñados para tu familia y tu bolsillo. Adquiere acciones, disfruta de beneficios exclusivos y construye un activo heredable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {MEMBERSHIPS.map((plan, idx) => (
            <div 
              key={plan.name} 
              className={`relative rounded-3xl p-8 bg-white border-2 flex flex-col h-full transition-all duration-300 hover:-translate-y-2
                ${plan.popular ? "border-amber-500 shadow-2xl shadow-amber-500/20" : "border-slate-100 shadow-lg"}
              `}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-emerald-950 font-bold px-6 py-1.5 rounded-full text-sm uppercase tracking-widest shadow-md">
                  Más Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-emerald-950 mb-2">{plan.name}</h3>
                <p className="text-slate-500 h-10">{plan.description}</p>
              </div>

              <div className="mb-8 p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-3">
                <div className={`p-2 rounded-lg ${plan.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                  <Users size={24} />
                </div>
                <div className="font-semibold text-slate-800">{plan.beneficiaries}</div>
              </div>

              <div className="mb-8 flex-grow">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Beneficios Incluidos</h4>
                <ul className="space-y-4">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-slate-100 mt-auto">
                <div className="mb-2">
                  <span className="text-sm text-slate-500 font-medium">Inversión Total:</span>
                  <div className="text-3xl font-bold text-emerald-950">{plan.price}</div>
                </div>
                <div className="mb-6">
                  <span className="text-sm text-slate-500 font-medium">Financiamiento Directo:</span>
                  <div className="text-xl font-bold text-amber-500">{plan.cuotas}</div>
                </div>
                
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-4 rounded-xl font-bold transition-all
                    ${plan.popular 
                      ? "bg-amber-500 text-emerald-950 hover:bg-amber-400 shadow-lg shadow-amber-500/30" 
                      : "bg-emerald-900 text-white hover:bg-emerald-800 shadow-lg shadow-emerald-900/20"
                    }
                  `}
                >
                  Quiero este plan
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
