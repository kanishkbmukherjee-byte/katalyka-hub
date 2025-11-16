import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "10 Daily Habits to Improve Your Spoken English",
      excerpt: "Discover simple yet effective habits that will transform your English speaking skills in just a few weeks.",
      category: "English Tips",
      date: "2024-01-15",
      readTime: "5 min read",
      featured: true,
    },
    {
      title: "Understanding Tarot: A Beginner's Guide",
      excerpt: "Learn the fundamentals of tarot reading and how it can provide guidance in your daily life.",
      category: "Tarot",
      date: "2024-01-12",
      readTime: "7 min read",
      featured: false,
    },
    {
      title: "Breaking Free from Decision Paralysis",
      excerpt: "Practical strategies to overcome analysis paralysis and start taking action on your goals.",
      category: "Personal Growth",
      date: "2024-01-10",
      readTime: "6 min read",
      featured: true,
    },
    {
      title: "The Art of Storytelling in Business",
      excerpt: "How to craft compelling narratives that captivate your audience and drive results.",
      category: "Communication",
      date: "2024-01-08",
      readTime: "8 min read",
      featured: false,
    },
    {
      title: "Women Empowerment: Finding Your Voice",
      excerpt: "Empowering strategies to build confidence and assert yourself in personal and professional life.",
      category: "Empowerment",
      date: "2024-01-05",
      readTime: "6 min read",
      featured: false,
    },
    {
      title: "Creative Writing Techniques for Beginners",
      excerpt: "Essential writing techniques to help you find your unique voice and tell better stories.",
      category: "Writing",
      date: "2024-01-03",
      readTime: "7 min read",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-primary-foreground/90">
              Insights, tips, and inspiration for your personal and professional growth journey
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {posts
              .filter((post) => post.featured)
              .map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="default">{post.category}</Badge>
                      <Badge variant="secondary" className="bg-red/20 text-red">Featured</Badge>
                    </div>
                    <CardTitle className="text-2xl hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Button variant="link" className="p-0 h-auto gap-2">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>

          <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts
              .filter((post) => !post.featured)
              .map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Button variant="link" className="p-0 h-auto gap-2">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-2 border-accent">
            <CardContent className="pt-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Get the latest articles, tips, and resources delivered to your inbox weekly
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="lg">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;
