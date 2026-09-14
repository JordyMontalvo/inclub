import { PORTFOLIO_PROJECTS } from "@/lib/constants";
import { MapPin } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  return (
    <section className="py-24 bg-white" id="proyectos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-4">
            Nuestro Portafolio inResorts
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Proyectos reales, tangibles y en constante expansión a nivel nacional e internacional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_PROJECTS.map((project) => (
            <div key={project.id} className="group rounded-3xl overflow-hidden bg-white shadow-lg border border-slate-100 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="flex items-center gap-1.5 text-white bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-medium">
                    <MapPin size={16} className="text-amber-400" />
                    {project.location}
                  </div>
                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                    project.status === "100% Operativo" ? "bg-emerald-500 text-white" : 
                    project.status === "En desarrollo" ? "bg-amber-500 text-emerald-950" : 
                    "bg-blue-500 text-white"
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-emerald-950 mb-3">{project.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <a href="#contacto" className="text-emerald-700 font-semibold hover:text-amber-500 transition-colors inline-flex items-center gap-2">
                    Solicitar información &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
