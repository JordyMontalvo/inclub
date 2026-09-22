"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { FAQ_ITEMS, WHATSAPP_NUMBER } from "@/lib/constants";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Primera abierta por defecto

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hola, tengo algunas consultas específicas sobre las membresías de Inclub que no encontré en las preguntas frecuentes."
  )}`;

  return (
    <section className="py-24 bg-slate-50 relative" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 font-semibold text-xs uppercase tracking-wider mb-4 border border-emerald-200">
            <HelpCircle size={15} className="text-emerald-700" />
            Transparencia Total
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-950 tracking-tight mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Todo lo que necesitas saber sobre el respaldo legal, la entrega de acciones, financiamiento y el uso de tus beneficios en Ribera del Río.
          </p>
        </div>

        {/* Acordeón Interactivo */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-white border-emerald-600/30 shadow-lg shadow-emerald-900/5 ring-1 ring-emerald-600/10"
                    : "bg-white/80 hover:bg-white border-slate-200/80"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between gap-4 text-left font-bold text-base sm:text-lg text-emerald-950"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${isOpen ? "bg-amber-500" : "bg-slate-300"}`} />
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-emerald-100 text-emerald-900" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 mt-1">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Tarjeta de contacto para dudas adicionales */}
        <div className="mt-14 p-8 rounded-3xl bg-white border border-slate-200 shadow-md text-center max-w-xl mx-auto flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
            <MessageCircle size={24} />
          </div>
          <h4 className="text-xl font-bold text-emerald-950 mb-2">
            ¿Tienes alguna consulta adicional?
          </h4>
          <p className="text-slate-600 text-sm mb-6">
            Nuestros asesores patrimoniales están disponibles para resolver tus dudas de forma personalizada por WhatsApp o programar una visita guiada al resort.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-900 text-white font-bold hover:bg-emerald-800 transition-all shadow-md shadow-emerald-900/20"
          >
            <MessageCircle size={18} />
            Consultar con un Asesor
          </a>
        </div>

      </div>
    </section>
  );
}
