import { Card } from "@/components/ui/card";

export default function ImpactStats() {
  const stats = [
    { value: "25,000+", label: "Youth Empowered", color: "ngo-orange" },
    { value: "150+", label: "Skills Programs", color: "ngo-blue" },
    { value: "500K+", label: "Meals Served", color: "ngo-green" },
    { value: "100+", label: "Communities", color: "ngo-orange" },
  ];

  return (
    <section className="py-16 bg-ngo-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className={`text-4xl lg:text-5xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
