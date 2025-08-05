import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function News() {
  const articles = [
    {
      id: "1",
      title: "New Skills Center Opens in Delhi",
      excerpt: "Our newest skills development center is now operational, offering courses in digital marketing, web development, and entrepreneurship to 500+ youth.",
      imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      publishedAt: "2024-03-15"
    },
    {
      id: "2",
      title: "200 Youth Graduate from Tech Program",
      excerpt: "Celebrating the success of our latest batch of technology program graduates, with 95% placement rate in leading companies.",
      imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      publishedAt: "2024-03-10"
    },
    {
      id: "3",
      title: "Emergency Food Drive Reaches 5,000 Families",
      excerpt: "Our rapid response team successfully distributed emergency food supplies to families affected by recent floods in West Bengal.",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      publishedAt: "2024-03-05"
    }
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold ngo-dark mb-6">
            Latest <span className="ngo-orange">News</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our recent activities, achievements, and upcoming initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={article.imageUrl} 
                alt={article.title} 
                className="w-full h-48 object-cover" 
              />
              <CardContent className="p-6">
                <div className="text-sm ngo-orange font-semibold mb-2">
                  {new Date(article.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <h3 className="text-xl font-bold ngo-dark mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <button className="ngo-orange font-semibold hover:text-orange-600 transition-colors flex items-center">
                  Read More <ArrowRight className="ml-1" size={16} />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
