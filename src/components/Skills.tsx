import { motion } from 'framer-motion';
import { Code2, Blocks, Wrench } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "Linguagens de Programação",
      icon: <Code2 className="w-8 h-8 text-purple-400 mb-4" />,
      skills: ["JavaScript", "TypeScript", "HTML", "CSS"]
    },
    {
      title: "Frameworks & Bibliotecas",
      icon: <Blocks className="w-8 h-8 text-purple-400 mb-4" />,
      skills: ["React", "Node.js", "Nest.js"]
    },
    {
      title: "Ferramentas & Tecnologias",
      icon: <Wrench className="w-8 h-8 text-purple-400 mb-4" />,
      skills: ["Git & GitHub", "Figma", "n8n", "Insomnia/Postman"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 inline-block relative">
            Habilidades
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-purple-600 rounded-full"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-900/50 border border-purple-900/30 rounded-2xl p-8 hover:bg-gray-900/80 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {category.icon}
                <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
                <ul className="space-y-3 w-full">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="bg-black/50 text-gray-300 py-2 px-4 rounded-lg text-sm border border-gray-800">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
