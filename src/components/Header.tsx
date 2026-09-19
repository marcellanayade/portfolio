import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-900/30">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img className="h-8 w-auto" src="/images/logo.svg" alt="Logo" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-base font-medium text-gray-300">
          <li><a href="#about-me" className="hover:text-purple-400 transition-colors">Sobre mim</a></li>
          <li><a href="#projects" className="hover:text-purple-400 transition-colors">Projetos</a></li>
          <li><a href="#skills" className="hover:text-purple-400 transition-colors">Habilidades</a></li>
          <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contato</a></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-300 hover:text-purple-400 transition-colors" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-purple-900/30">
          <ul className="flex flex-col px-6 py-4 space-y-4 text-center text-gray-300">
            <li><a href="#about-me" className="block hover:text-purple-400 transition-colors" onClick={toggleMenu}>Sobre mim</a></li>
            <li><a href="#projects" className="block hover:text-purple-400 transition-colors" onClick={toggleMenu}>Projetos</a></li>
            <li><a href="#skills" className="block hover:text-purple-400 transition-colors" onClick={toggleMenu}>Habilidades</a></li>
            <li><a href="#contact" className="block hover:text-purple-400 transition-colors" onClick={toggleMenu}>Contato</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
