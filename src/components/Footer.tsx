import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-purple-900/30 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center mb-12"
        >
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">Onde me encontrar</h2>
            <p className="text-gray-400">Vamos conversar sobre tecnologia e oportunidades.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/marcellanayade" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(147,51,234,0.5)]">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/marcella-santiago-dev" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(147,51,234,0.5)]">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://www.instagram.com/nayademarcella/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(147,51,234,0.5)]">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="mailto:marcella_nayade@hotmail.com" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(147,51,234,0.5)]">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; 2026 Marcella Santiago. Todos os direitos reservados.</p>
          <a href="mailto:marcella_nayade@hotmail.com" className="mt-2 md:mt-0 hover:text-purple-400 transition-colors">
            marcella_nayade@hotmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
