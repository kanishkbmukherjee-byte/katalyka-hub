import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles, PenTool, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: "english",
      icon: BookOpen,
      title: "English Coaching",
      description: "Transform your communication skills with personalized English coaching",
      features: [
        "One-on-one coaching sessions",
        "Beginner to advanced levels",
        "Presentation and storytelling skills",
        "Business communication",
        "Interview preparation",
        "Customized learning plans",
      ],
      color: "accent",
    },
    {
      id: "tarot",
      icon: Sparkles,
      title: "Tarot Reading",
      description: "Gain clarity and guidance through intuitive tarot consultations",
      features: [
        "Personal guidance sessions",
        "Life path insights",
        "Decision-making support",
        "Spiritual guidance",
        "Relationship readings",
        "Career direction",
      ],
      color: "secondary",
    },
    {
      id: "ghostwriting",
      icon: PenTool,
      title: "Ghostwriting Services",
      description: "Professional ghostwriting services for your stories and content",
      features: [
        "Book ghostwriting",
        "Blog and article writing",
        "Business content",
        "Personal memoirs",
        "Social media content",
        "Professional editing",
      ],
      color: "accent",
    },
    {
      id: "workshops",
      icon: Users,
      title: "Workshops & Training",
      description: "Engaging workshops on personal development and empowerment",
      features: [
        "Decision-making workshops",
        "Women empowerment programs",
        "Communication skills",
        "Leadership training",
        "Personal growth sessions",
        "Corporate training",
      ],
      color: "secondary",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive solutions for your personal and professional growth journey
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
                >
                  <div className="md:w-1/2">
                    <Card className={`border-2 border-${service.color}`}>
                      <CardHeader>
                        <div className={`w-16 h-16 rounded-full bg-${service.color} flex items-center justify-center mb-4`}>
                          <Icon className={`w-8 h-8 text-${service.color}-foreground`} />
                        </div>
                        <CardTitle className="text-3xl">{service.title}</CardTitle>
                        <CardDescription className="text-lg">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 mb-6">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Link to="/contact">
                          <Button className="w-full" size="lg">
                            Get Started
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="md:w-1/2">
                    <div className="bg-muted rounded-lg p-8">
                      <h3 className="text-2xl font-bold mb-4">Why Choose This Service?</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                        Our {service.title.toLowerCase()} is designed with your success in mind. 
                        We combine expertise, personalized attention, and proven methodologies to 
                        deliver results that exceed expectations.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        Whether you're just starting out or looking to advance your skills, 
                        we provide the guidance and support you need to achieve your goals.
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book a consultation to discuss your needs and find the perfect service for you
            </p>
            <Link to="/contact">
              <Button size="lg" className="font-semibold">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
