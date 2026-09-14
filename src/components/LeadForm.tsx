"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "membresias"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, mi nombre es ${formData.name}. Mi número es ${formData.phone} y estoy interesado en: ${
      formData.interest === 'membresias' ? 'Comprar una membresía' : 
      formData.interest === 'negocio' ? 'El modelo de negocio/red' : 'Información general'
    }.`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-24 bg-slate-100" id="contacto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          <div className="md:w-5/12 bg-emerald-900 p-10 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">¿Listo para dar el siguiente paso?</h3>
              <p className="text-emerald-100 font-light mb-8">
                Déjanos tus datos y te contactaremos de inmediato por WhatsApp para resolver todas tus dudas sin compromiso.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center font-bold">1</div>
                  <p className="font-medium">Llena el formulario</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center font-bold">2</div>
                  <p className="font-medium">Ir a WhatsApp</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center font-bold">3</div>
                  <p className="font-medium">Recibe asesoría VIP</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-7/12 p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Nombre completo</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-slate-50"
                  placeholder="Ej. Juan Pérez"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Teléfono / WhatsApp</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-slate-50"
                  placeholder="+51 999 999 999"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-semibold text-slate-700 mb-2">Motivo de consulta</label>
                <select
                  id="interest"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-slate-50 text-slate-700"
                  value={formData.interest}
                  onChange={(e) => setFormData({...formData, interest: e.target.value})}
                >
                  <option value="membresias">Quiero comprar una membresía</option>
                  <option value="negocio">Me interesa el modelo de negocio / red</option>
                  <option value="general">Información general</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-500 text-emerald-950 font-bold text-lg hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/30 mt-4"
              >
                Enviar a WhatsApp
                <Send size={20} className="ml-1" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
