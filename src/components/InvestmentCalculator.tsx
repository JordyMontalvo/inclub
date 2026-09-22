"use client";

import { useState, useId } from "react";
import { Calculator, CheckCircle2, TrendingUp, Sparkles, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { MEMBERSHIPS, WHATSAPP_NUMBER } from "@/lib/constants";

export default function InvestmentCalculator() {
  const initialInputId = useId();
  const [selectedPlanId, setSelectedPlanId] = useState<string>("family");
  const [months, setMonths] = useState<number>(36);
  const [initialPayment, setInitialPayment] = useState<number>(600);

  const currentPlan = MEMBERSHIPS.find((p) => p.id === selectedPlanId) || MEMBERSHIPS[1];

  // Actualizar la inicial por defecto al cambiar de plan si la inicial actual supera el precio
  const handleSelectPlan = (planId: string) => {
    setSelectedPlanId(planId);
    const plan = MEMBERSHIPS.find((p) => p.id === planId);
    if (plan) {
      setInitialPayment(plan.defaultInitial || 500);
    }
  };

  // Cálculos financieros
  const totalPrice = currentPlan.numericPrice || 6600;
  const clampedInitial = Math.min(initialPayment, totalPrice - 500);
  const financedAmount = Math.max(0, totalPrice - clampedInitial);
  const monthlyQuota = Math.round(financedAmount / months);

  // Estimaciones de valor agregado
  const estimatedVacationSavings10Y = Math.round(currentPlan.numericPrice * 2.8);
  const estimatedAssetAppreciation = Math.round(currentPlan.numericPrice * 1.55);

  const whatsappQuoteText = `Hola, he estado usando el Simulador Inclub y me interesa cotizar:\n\n📋 *Plan:* ${currentPlan.name}\n💰 *Inversión Total:* $${totalPrice.toLocaleString()} USD\n💵 *Inicial propuesta:* $${clampedInitial.toLocaleString()} USD\n⏱️ *Plazo elegido:* ${months} cuotas mensuales\n💳 *Cuota estimada:* ~$${monthlyQuota.toLocaleString()} USD/mes\n\n¿Podrían brindarme asesoría para reservar este financiamiento directo?`;

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappQuoteText)}`;

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden" id="simulador">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/30 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 font-semibold text-xs uppercase tracking-wider mb-4 border border-emerald-200">
            <Calculator size={15} className="text-emerald-700" />
            Simulador Financiero Inteligente
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-950 tracking-tight mb-4">
            Diseña tu Inversión a tu Propia Medida
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Calcula tus cuotas con financiamiento directo sin evaluación de bancos ni Infocorp. Conoce la rentabilidad y el ahorro patrimonial que generarás.
          </p>
        </div>

        {/* Tarjeta Principal del Simulador */}
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden grid lg:grid-cols-12 gap-0">
          
          {/* Columna Izquierda: Parámetros y Selectores (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-8">
            
            {/* Paso 1: Selección de Membresía */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                1. Selecciona tu Membresía Inclub
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {MEMBERSHIPS.map((plan) => {
                  const isSelected = plan.id === selectedPlanId;
                  return (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => handleSelectPlan(plan.id || "family")}
                      className={`text-left p-4 rounded-2xl border-2 transition-all relative ${
                        isSelected
                          ? "border-emerald-700 bg-emerald-50/50 shadow-md ring-2 ring-emerald-600/20"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      {plan.popular && (
                        <span className="absolute -top-2.5 right-3 bg-amber-500 text-emerald-950 font-bold text-[10px] uppercase px-2 py-0.5 rounded-full shadow-sm">
                          Recomendado
                        </span>
                      )}
                      <h4 className="font-bold text-slate-900 text-sm mb-1">{plan.name}</h4>
                      <p className="text-xs text-slate-500 mb-2">{plan.beneficiaries}</p>
                      <div className="text-emerald-900 font-extrabold text-base">{plan.price}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Paso 2: Control Deslizante de Cuota Inicial */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <label htmlFor={initialInputId} className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    2. Cuota Inicial Propuesta
                  </label>
                  <span className="text-xs text-slate-500">Mínimo sugerido según plan</span>
                </div>
                <div className="text-2xl font-black text-emerald-900">
                  ${clampedInitial.toLocaleString()} <span className="text-xs font-medium text-slate-500">USD</span>
                </div>
              </div>

              <input
                id={initialInputId}
                type="range"
                min={300}
                max={Math.min(4000, totalPrice - 1000)}
                step={50}
                value={clampedInitial}
                onChange={(e) => setInitialPayment(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-700 focus:outline-none"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-2">
                <span>Desde $300 USD</span>
                <span>Hasta ${(Math.min(4000, totalPrice - 1000)).toLocaleString()} USD</span>
              </div>
            </div>

            {/* Paso 3: Plazo de Cuotas */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                  3. Plazo de Financiamiento Directo
                </label>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Sin interés bancario
                </span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {[12, 24, 36, 48, 60].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMonths(m)}
                    className={`py-3 rounded-xl font-bold text-sm transition-all border ${
                      months === m
                        ? "bg-emerald-900 text-white border-emerald-900 shadow-md shadow-emerald-900/20 scale-[1.02]"
                        : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {m}m
                  </button>
                ))}
              </div>
              <p className="text-xs text-slate-400 mt-2 text-center">
                Periodo seleccionado: <strong className="text-slate-700">{months} meses ({months / 12} {months === 12 ? 'año' : 'años'})</strong>
              </p>
            </div>

            {/* Garantías y Respaldo */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs text-slate-600">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck size={16} className="text-emerald-700" />
                Contrato legal con entrega de acciones
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 size={16} className="text-emerald-700" />
                Sin revisión en centrales de riesgo
              </span>
            </div>

          </div>

          {/* Columna Derecha: Resultado Proyectado & CTA (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 p-8 sm:p-10 lg:p-12 text-white flex flex-col justify-between relative">
            
            {/* Glow decorativo */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between border-b border-emerald-800/80 pb-4 mb-6">
                <span className="text-emerald-300 font-semibold text-xs uppercase tracking-wider">
                  Resumen de tu Cotización
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-800/70 border border-emerald-700 text-amber-400 font-semibold text-xs">
                  {currentPlan.name}
                </span>
              </div>

              {/* Cuota Destacada */}
              <div className="mb-8">
                <span className="text-xs text-emerald-200 uppercase tracking-wider block mb-1">
                  Cuota Mensual Estimada
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl sm:text-6xl font-black text-amber-400 tracking-tight">
                    ${monthlyQuota}
                  </span>
                  <span className="text-emerald-200 text-sm font-semibold">USD / mes</span>
                </div>
                <p className="text-xs text-emerald-200/80 mt-1">
                  Saldo a financiar: ${financedAmount.toLocaleString()} USD en {months} cuotas fijas
                </p>
              </div>

              {/* Métricas de Valor Patrimonial */}
              <div className="space-y-4 mb-8">
                <div className="p-3.5 rounded-2xl bg-emerald-900/60 border border-emerald-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                      <Sparkles size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-emerald-200">Ahorro Vacacional (10 años)</div>
                      <div className="text-xs text-slate-400">vs. tarifas hoteleras comerciales</div>
                    </div>
                  </div>
                  <div className="text-base font-bold text-white">~${estimatedVacationSavings10Y.toLocaleString()} USD</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-emerald-900/60 border border-emerald-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                      <TrendingUp size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-emerald-200">Revalorización Patrimonial</div>
                      <div className="text-xs text-slate-400">Plusvalía proyectada de activos</div>
                    </div>
                  </div>
                  <div className="text-base font-bold text-emerald-300">~${estimatedAssetAppreciation.toLocaleString()} USD</div>
                </div>
              </div>
            </div>

            {/* CTA WhatsApp con datos inyectados */}
            <div className="pt-6 border-t border-emerald-800/80">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-amber-500 text-emerald-950 font-extrabold text-base hover:bg-amber-400 transition-all transform hover:scale-[1.02] shadow-xl shadow-amber-500/25"
              >
                <MessageCircle size={22} className="shrink-0" />
                <span>Solicitar esta Cotización</span>
                <ArrowRight size={18} className="shrink-0 ml-auto" />
              </a>
              <p className="text-center text-[11px] text-emerald-300/70 mt-3">
                Te contactará un asesor oficial de Inclub por WhatsApp para validar tu reserva sin compromiso.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
