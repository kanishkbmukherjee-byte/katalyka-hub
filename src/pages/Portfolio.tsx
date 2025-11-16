import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Users, TrendingUp } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Corporate English Training Program",
      client: "Tech Solutions Inc.",
      description: "Delivered comprehensive English training to 50+ employees, improving their business communication skills",
      category: "English Coaching",
      results: ["95% satisfaction rate", "40% improvement in presentation skills", "Increased team confidence"],
    },
    {
      title: "Women Empowerment Workshop Series",
      client: "NGO Partnership",
      description: "Conducted 6-month workshop series focusing on decision-making and personal growth",
      category: "Workshops",
      results: ["200+ participants", "85% achieved personal goals", "Ongoing community support"],
    },
    {
      title: "Business Memoir Ghostwriting",
      client: "CEO - Manufacturing Industry",
      description: "Wrote comprehensive business memoir covering 30-year entrepreneurial journey",
      category: "Ghostwriting",
      results: ["300+ pages published", "Successfully launched", "Positive media coverage"],
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Marketing Manager",
      company: "Tech Solutions Inc.",
      content: "The English coaching program transformed our team's communication. We're now more confident in client presentations and internal meetings.",
    },
    {
      name: "Anjali Reddy",
      role: "Entrepreneur",
      company: "Self-employed",
      content: "The decision-making workshop helped me overcome years of paralysis. I finally launched my business and it's thriving!",
    },
    {
      name: "Rahul Verma",
      role: "CEO",
      company: "Manufacturing Company",
      content: "The ghostwriting service exceeded my expectations. My story was told beautifully and authentically.",
    },
  ];

  const stats = [
    { icon: Users, number: "2000+", label: "Students Taught" },
    { icon: Award, number: "500+", label: "Success Stories" },
    { icon: BookOpen, number: "50+", label: "Workshops Conducted" },
    { icon: TrendingUp, number: "95%", label: "Satisfaction Rate" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-primary-foreground/90">
              Showcasing our journey of transforming lives through education and empowerment
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div className="text-3xl font-bold mb-1 text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="space-y-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">Client: {project.client}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
