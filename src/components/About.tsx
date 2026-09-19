import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about-me" className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 inline-block relative">
            Sobre mim
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-purple-600 rounded-full"></span>
          </h2>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Desenvolvedora full stack em início de carreira, formada em Análise e Desenvolvimento de Sistemas, 
              com foco na criação de aplicações web modernas, responsivas e funcionais.
            </p>
            <p>
              Tenho experiência prática no desenvolvimento front-end e back-end utilizando HTML, CSS, JavaScript, 
              TypeScript, React e Node.js, além de integração com APIs e interesse contínuo em arquitetura de aplicações e boas práticas de desenvolvimento. 
              Busco oportunidades que me permitam evoluir tecnicamente e contribuir com projetos reais na área de tecnologia.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
