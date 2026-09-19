import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: "Gerenciador de Projetos",
    image: "/images/kanban.png",
    description: "Aplicação web completa para gestão de projetos e tarefas estilo Kanban, incluindo fluxo de autenticação, controle de acessos, modo escuro e alertas interativos.",
    stack: ["TypeScript", "React", "Node.js", "Express", "MongoDB"],
    link: "https://i.ibb.co/TDPWWLYy/taskflow-project.png"
  },
  {
    title: "Login rede social",
    image: "/images/project-01.jpg",
    description: "Desenvolvimento da página de login de rede social similar à do Instagram.",
    stack: ["HTML5", "CSS3"],
    link: "https://i.ibb.co/d0rXx90K/landing-page-sujeitogram.jpg"
  },
  {
    title: "Landing page de restaurante",
    image: "/images/project-02.jpg",
    description: "Landing page do ramo alimentício que fornece cardápio e avaliações de clientes.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    link: "https://i.ibb.co/qMzXLSmR/landing-page-menu.jpg"
  },
  {
    title: "Landing page de petshop",
    image: "/images/project-03.png",
    description: "Landing page de petshop com diversos serviços além de loja própria.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    link: "https://i.ibb.co/FLqhRsZm/landing-page-paws.jpg"
  },
  {
    title: "E-commerce",
    image: "/images/project-04.png",
    description: "E-commerce que oferece móveis e decoração para sala, quarto e jantar.",
    stack: ["HTML5", "CSS3", "TypeScript", "React", "Nest.js"],
    link: "https://i.ibb.co/8ncsyq8Y/ecommerce-furniro.jpg"
  }
];

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1));
  };

  return (
    <section id="projects" className="py-24 bg-black/80 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 inline-block relative">
            Meus Projetos
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-purple-600 rounded-full"></span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Buttons */}
          <button 
            onClick={prevProject}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-10 bg-purple-900/50 hover:bg-purple-600 text-white p-3 rounded-full backdrop-blur-md transition-all border border-purple-500/30 shadow-[0_0_15px_rgba(147,51,234,0.3)] hidden md:block"
            aria-label="Projeto anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            onClick={nextProject}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-10 bg-purple-900/50 hover:bg-purple-600 text-white p-3 rounded-full backdrop-blur-md transition-all border border-purple-500/30 shadow-[0_0_15px_rgba(147,51,234,0.3)] hidden md:block"
            aria-label="Próximo projeto"
          >
            <ChevronRight size={24} />
          </button>

          {/* Mobile Buttons (below carousel) */}
          <div className="flex justify-center gap-4 mt-8 md:hidden mb-4">
            <button 
              onClick={prevProject}
              className="bg-purple-900/50 hover:bg-purple-600 text-white p-3 rounded-full backdrop-blur-md transition-all border border-purple-500/30"
              aria-label="Projeto anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextProject}
              className="bg-purple-900/50 hover:bg-purple-600 text-white p-3 rounded-full backdrop-blur-md transition-all border border-purple-500/30"
              aria-label="Próximo projeto"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="overflow-hidden relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 30 }}
                className="bg-gray-900/60 rounded-2xl border border-purple-900/40 overflow-hidden flex flex-col md:flex-row group"
              >
                <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-black/50">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                    {/* Placeholder content if image fails */}
                    <span>Imagem: {projectsData[currentIndex].image.split('/').pop()}</span>
                  </div>
                  <img 
                    src={projectsData[currentIndex].image} 
                    alt={projectsData[currentIndex].title}
                    className="w-full h-full object-contain p-4 relative z-10 transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.opacity = '0';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-20" />
                </div>
                
                <div className="p-8 md:w-1/2 flex flex-col justify-center bg-gradient-to-bl from-gray-900 to-black">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {projectsData[currentIndex].title}
                  </h3>
                  <p className="text-gray-400 mb-6 line-clamp-3">
                    {projectsData[currentIndex].description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wider">Desenvolvido com:</h4>
                    <div className="flex flex-wrap gap-2">
                      {projectsData[currentIndex].stack.map((tech, i) => (
                        <span key={i} className="bg-purple-900/30 text-purple-300 text-xs py-1 px-3 rounded-full border border-purple-700/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href={projectsData[currentIndex].link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white bg-purple-600 hover:bg-purple-700 py-3 px-6 rounded-lg font-medium transition-all w-fit shadow-lg shadow-purple-900/20"
                  >
                    Ver Projeto <ExternalLink size={18} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {projectsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-purple-500 w-8' : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Ir para o projeto ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
