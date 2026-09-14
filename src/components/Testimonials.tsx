"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState<'fotos' | 'videos'>('fotos');
  const testimonials = [
    {
      name: "Carlos Mendoza",
      role: "Socio Fundador - Ribera del Río",
      text: "Comencé con muchas dudas, pero al visitar el resort en Cieneguilla y ver los avances, supe que era el lugar correcto. Hoy disfruto con mi familia y ya estoy generando utilidades.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop",
      stars: 5,
    },
    {
      name: "Familia Rojas",
      role: "Socios Vitalicia Family",
      text: "La mejor decisión para nuestras vacaciones. Nuestros hijos aman las piscinas, y saber que esta membresía será para ellos en el futuro nos da mucha tranquilidad.",
      image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=2070&auto=format&fit=crop",
      stars: 5,
    },
    {
      name: "Ana Lucía G.",
      role: "Socia y Desarrolladora de Red",
      text: "No solo compré mi membresía para disfrutar los fines de semana, sino que vi la oportunidad de negocio. Gracias a las comisiones por referir, he recuperado mi inversión inicial en menos de 6 meses.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
      stars: 5,
    }
  ];

  return (
    <section className="py-24 bg-white" id="comunidad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold tracking-wider mb-4">
            COMUNIDAD INCLUB
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-4">
            Historias de Socios Reales
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Miles de peruanos ya confiaron en la visión de inResorts, diversificando su dinero y disfrutando junto a los suyos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 relative group hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300">
              <Quote className="absolute top-6 right-6 text-emerald-200 w-12 h-12 z-0" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-500">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-950 text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-500 text-amber-500" />
                ))}
              </div>
              
              <p className="text-slate-700 leading-relaxed relative z-10 italic">
                &quot;{testimonial.text}&quot;
              </p>
            </div>
          ))}
        </div>

        {/* Galería Interactiva con Tabs */}
        <div className="mt-20 pt-16 border-t border-slate-100">
          <div className="flex flex-col items-center mb-10">
            <h3 className="text-2xl font-bold text-emerald-950 mb-6 text-center">Momentos inResorts</h3>
            
            {/* Tabs */}
            <div className="flex bg-slate-100 p-1.5 rounded-full w-fit">
              <button 
                onClick={() => setActiveTab('fotos')}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${activeTab === 'fotos' ? 'bg-white text-emerald-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Fotos de Socios
              </button>
              <button 
                onClick={() => setActiveTab('videos')}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${activeTab === 'videos' ? 'bg-white text-emerald-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Reels y Videos
              </button>
            </div>
          </div>

          {/* Contenido de Fotos */}
          {activeTab === 'fotos' && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-in fade-in zoom-in-95 duration-500">
              <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden group">
                <Image src="/images/imagen_nueva.jpg" alt="Inclub Resort" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium text-sm">Disfrute Familiar</span>
                </div>
              </div>
              <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden group">
                <Image src="/images/gallery_2_group_trip_1789388071839.png" alt="Socios Inclub" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium text-sm">Viajes Grupales</span>
                </div>
              </div>
              <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden group">
                <Image src="/images/gallery_3_machupicchu_tour_1789388195068.png" alt="Tour Inclub" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium text-sm">Tours Exclusivos</span>
                </div>
              </div>
              <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden group">
                <Image src="/images/gallery_4_solo_trip_1789388349981.png" alt="Viaje de Socios" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium text-sm">Comunidad Activa</span>
                </div>
              </div>
            </div>
          )}

          {/* Contenido de Videos */}
          {activeTab === 'videos' && (
            <div className="flex justify-center gap-6 animate-in fade-in zoom-in-95 duration-500">
              <div className="relative h-[476px] rounded-2xl overflow-hidden shadow-2xl shadow-emerald-900/20 bg-slate-900">
                <iframe 
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F906252575618887%2F&show_text=false&width=265&t=0" 
                  width="265" 
                  height="476" 
                  style={{ border: 'none', overflow: 'hidden' }} 
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className="mx-auto"
                ></iframe>
              </div>
              {/* Espacio para más videos si los añades en el futuro */}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
