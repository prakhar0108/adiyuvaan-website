import { GraduationCap, Wrench, Utensils, HandHeart } from "lucide-react";

export default function About() {
  const features = [
    { icon: GraduationCap, label: "Education First", color: "bg-ngo-orange" },
    { icon: Wrench, label: "Skills Development", color: "bg-ngo-blue" },
    { icon: Utensils, label: "Food Security", color: "bg-ngo-green" },
    { icon: HandHeart, label: "Community Care", color: "bg-purple-500" },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold ngo-dark mb-6">
              Our <span className="ngo-orange">Mission</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Adiyuvaa Foundation is dedicated to empowering the youth of India through 
              comprehensive programs that address education, skill development, and basic needs. 
              We believe every young person deserves the opportunity to build a better future.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Since our founding, we've worked tirelessly to break the cycle of poverty 
              through sustainable development programs that create lasting change in communities 
              across India.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center`}>
                    <feature.icon className="text-white" size={20} />
                  </div>
                  <span className="font-semibold">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Indian youth in community development program" 
              className="rounded-2xl shadow-2xl w-full" 
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold ngo-orange">10+</div>
              <p className="text-gray-600 font-medium">Years of Impact</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
