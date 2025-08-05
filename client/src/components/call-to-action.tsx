import { Button } from "@/components/ui/button";
import { Heart, HandHeart } from "lucide-react";

export default function CallToAction() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-ngo-orange text-white">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Join Our Mission to Transform Lives
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Every contribution, no matter how small, makes a difference in a young person's life. 
          Together, we can build a stronger, more empowered India.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-white text-ngo-orange px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            onClick={scrollToContact}
          >
            <Heart className="mr-2" size={20} />
            Donate Today
          </Button>
          <Button 
            variant="outline" 
            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-ngo-orange transition-colors"
            onClick={scrollToContact}
          >
            <HandHeart className="mr-2" size={20} />
            Volunteer With Us
          </Button>
        </div>
      </div>
    </section>
  );
}
