import { Book, ServerCog, Heart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Programs() {
  const programs = [
    {
      icon: Book,
      title: "Education Programs",
      description: "Providing quality education, digital literacy, and academic support to underprivileged youth across rural and urban India.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Students learning computer skills",
      features: ["Digital Literacy Training", "Academic Tutoring", "Scholarship Programs"],
      color: "bg-ngo-blue",
      buttonColor: "bg-ngo-blue hover:bg-blue-600"
    },
    {
      icon: ServerCog,
      title: "Skills Development",
      description: "Vocational training and skill development programs that prepare youth for meaningful employment and entrepreneurship opportunities.",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Youth learning practical skills in workshop",
      features: ["Vocational Training", "Entrepreneurship Support", "Job Placement Assistance"],
      color: "bg-ngo-orange",
      buttonColor: "bg-ngo-orange hover:bg-orange-600"
    },
    {
      icon: Heart,
      title: "Food Relief",
      description: "Emergency food distribution and nutrition programs ensuring no child goes hungry while pursuing their education and dreams.",
      image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Volunteers distributing food to families",
      features: ["Daily Meal Programs", "Emergency Relief", "Nutrition Education"],
      color: "bg-ngo-green",
      buttonColor: "bg-ngo-green hover:bg-green-600"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold ngo-dark mb-6">
            Our <span className="ngo-orange">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We run comprehensive programs designed to address the core challenges 
            facing Indian youth today, from education to employment readiness.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={program.image} 
                alt={program.alt} 
                className="w-full h-64 object-cover" 
              />
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${program.color} rounded-full flex items-center justify-center mr-4`}>
                    <program.icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold ngo-dark">{program.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <Check className="ngo-green mr-3" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${program.buttonColor} text-white py-3 rounded-full font-semibold transition-colors`}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
