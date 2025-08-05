import { Heart } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: "About Us", section: "about" },
    { label: "Our Programs", section: "programs" },
    { label: "Impact Stories", section: "impact" },
    { label: "News & Updates", section: "news" },
  ];

  const getInvolvedLinks = [
    { label: "Donate", href: "#" },
    { label: "Volunteer", href: "#" },
    { label: "Partner With Us", href: "#" },
    { label: "Corporate CSR", href: "#" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Annual Reports", href: "#" },
  ];

  return (
    <footer className="bg-ngo-dark text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-ngo-orange rounded-full flex items-center justify-center">
                <Heart className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-bold">Adiyuvaa Foundation</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering Indian youth through education, skills development, 
              and community support programs.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.section)}
                    className="text-gray-300 hover:text-ngo-orange transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2">
              {getInvolvedLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-ngo-orange transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>123 Service Road, Delhi</p>
              <p>+91 98765 43210</p>
              <p>info@adiyuvaafoundation.org</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 mb-4 md:mb-0">
            © 2024 Adiyuvaa Foundation. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {legalLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-gray-300 hover:text-ngo-orange transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
