export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold tracking-tighter text-white block mb-2">
              Ribera del Río <span className="text-amber-500">| inResorts</span>
            </span>
            <p className="text-sm">
              Socio Independiente Autorizado. <br className="hidden md:block" />
              Esta no es la página web corporativa oficial de Inclub.
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-amber-500 transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Políticas de Privacidad</a>
          </div>
          
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-900 text-center text-sm">
          <p>&copy; {currentYear} Todos los derechos reservados. Diseñado para potenciar tu inversión.</p>
        </div>
      </div>
    </footer>
  );
}
