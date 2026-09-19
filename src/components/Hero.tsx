import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between z-10 relative">
        <motion.div 
          className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Marcella <span className="text-purple-500">Santiago</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 flex items-center gap-3">
            Programadora em construção, soluções em movimento.
            <img className="h-6 w-6 animate-pulse" src="/images/cursor.svg" alt="Cursor" />
          </p>
          <a 
            href="#projects" 
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(147,51,234,0.5)]"
          >
            Ver Meus Projetos
          </a>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-full blur-2xl opacity-40 animate-pulse" />
            <img 
              src="/images/marcella.jpg" 
              alt="Marcella Santiago" 
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-purple-500/30 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
