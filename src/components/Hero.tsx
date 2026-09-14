import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/constants";

export default function Hero() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-emerald-950/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-emerald-800/50 border border-emerald-500/30 text-amber-400 text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm">
          OPORTUNIDAD DE INVERSIÓN
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-5xl leading-tight mb-8">
          Construye ingresos residuales y diversifica tu patrimonio
        </h1>
        
        <p className="mt-4 text-xl md:text-2xl text-emerald-50 max-w-3xl mb-12 font-light">
          Sé parte de la primera cadena de Club Resorts del Perú. Invierte en 
          <span className="font-semibold text-amber-500"> Ribera del Río</span> (Cieneguilla) 
          y expande tu visión con Inclub.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#membresias"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-emerald-950 font-bold text-lg hover:bg-amber-400 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.4)]"
          >
            Ver Membresías
            <ArrowRight size={20} />
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-all"
          >
            <MessageCircle size={20} />
            Hablemos por WhatsApp
          </a>
        </div>
      </div>
      
      {/* Decorative Wave */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-[50px] lg:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.98,130.12,201.3,121.72,243.64,116.66,283.43,89.5,321.39,56.44Z" className="fill-slate-50"></path>
        </svg>
      </div>
    </section>
  );
}
