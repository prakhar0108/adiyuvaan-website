import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-ngo-orange rounded-full flex items-center justify-center">
              <Heart className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold ngo-dark">Adiyuvaa Foundation</h1>
              <p className="text-sm text-gray-600">Empowering Youth, Building Futures</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-8">
            <li>
              <button 
                onClick={() => scrollToSection('home')} 
                className="ngo-dark hover:ngo-orange transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')} 
                className="ngo-dark hover:ngo-orange transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('programs')} 
                className="ngo-dark hover:ngo-orange transition-colors"
              >
                Programs
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('impact')} 
                className="ngo-dark hover:ngo-orange transition-colors"
              >
                Impact
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('news')} 
                className="ngo-dark hover:ngo-orange transition-colors"
              >
                News
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="ngo-dark hover:ngo-orange transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <Button className="bg-ngo-orange text-white hover:bg-orange-600 rounded-full font-medium">
              Donate Now
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden ngo-dark"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="block w-full text-left ngo-dark hover:ngo-orange transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="block w-full text-left ngo-dark hover:ngo-orange transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('programs')} 
                  className="block w-full text-left ngo-dark hover:ngo-orange transition-colors"
                >
                  Programs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('impact')} 
                  className="block w-full text-left ngo-dark hover:ngo-orange transition-colors"
                >
                  Impact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('news')} 
                  className="block w-full text-left ngo-dark hover:ngo-orange transition-colors"
                >
                  News
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="block w-full text-left ngo-dark hover:ngo-orange transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
