import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 bg-ngo-dark bg-opacity-60" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Empowering <span className="ngo-orange">Youth</span><br />
            Building <span className="ngo-orange">Futures</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
            Through education, skills development, and food relief programs, 
            we're transforming lives and communities across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-ngo-orange text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors"
              onClick={() => scrollToSection('contact')}
            >
              Support Our Mission
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-ngo-dark transition-colors"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
