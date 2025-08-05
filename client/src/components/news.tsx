import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import type { NewsArticle } from "@shared/schema";

export default function News() {
  const { data: articles, isLoading } = useQuery<NewsArticle[]>({
    queryKey: ["/api/news"]
  });

  if (isLoading) {
    return (
      <section id="news" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold ngo-dark mb-6">
              Latest <span className="ngo-orange">News</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="w-full h-48 bg-gray-200 animate-pulse" />
                <CardContent className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse" />
                  <div className="h-6 bg-gray-200 rounded mb-3 animate-pulse" />
                  <div className="h-16 bg-gray-200 rounded mb-4 animate-pulse" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

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
          {articles?.map((article) => (
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
