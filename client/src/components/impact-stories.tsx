import { Card, CardContent } from "@/components/ui/card";

export default function ImpactStories() {
  const mainTestimonial = {
    quote: "Thanks to Adiyuvaa Foundation's skills program, I learned web development and now run my own tech startup, employing 15 other young people from my community.",
    name: "Priya Sharma",
    title: "Web Developer & Entrepreneur",
    location: "Mumbai, Maharashtra",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  };

  const testimonials = [
    {
      name: "Rajesh Kumar",
      program: "Skills Program Graduate",
      quote: "The foundation didn't just teach me coding skills, they gave me confidence and a vision for my future. Now I'm working at a tech company and supporting my family.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Anita Patel",
      program: "Education Program Beneficiary",
      quote: "Through the scholarship program, I completed my engineering degree. Today I'm designing sustainable solutions for rural communities.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Arjun Singh",
      program: "Food Relief Volunteer",
      quote: "Starting as a beneficiary of the food program, I'm now a volunteer coordinator helping distribute meals to 200+ families weekly.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <section id="impact" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold ngo-dark mb-6">
            Stories of <span className="ngo-orange">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from the lives we've touched and the communities we've transformed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={mainTestimonial.image} 
              alt="Success story portrait" 
              className="rounded-2xl shadow-2xl w-full" 
            />
          </div>
          <div>
            <div className="text-6xl ngo-orange mb-4">"</div>
            <blockquote className="text-2xl text-gray-700 mb-6 leading-relaxed italic">
              {mainTestimonial.quote}
            </blockquote>
            <div className="border-l-4 border-ngo-orange pl-6">
              <div className="font-bold ngo-dark">{mainTestimonial.name}</div>
              <div className="text-gray-600">{mainTestimonial.title}</div>
              <div className="text-gray-500">{mainTestimonial.location}</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white p-8 rounded-2xl shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt="Testimonial portrait" 
                    className="w-16 h-16 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <div className="font-bold ngo-dark">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.program}</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
