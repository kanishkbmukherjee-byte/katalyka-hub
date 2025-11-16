import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Sparkles, ShoppingBag, Briefcase, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const services = [
    {
      icon: BookOpen,
      title: "English Coaching",
      description: "Transform your communication skills with personalized English coaching",
      link: "/services#english",
    },
    {
      icon: Sparkles,
      title: "Tarot Reading",
      description: "Gain clarity and guidance through intuitive tarot consultations",
      link: "/services#tarot",
    },
    {
      icon: Briefcase,
      title: "Ghostwriting",
      description: "Professional ghostwriting services for your stories and content",
      link: "/services#ghostwriting",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Course Student",
      content: "The English coaching completely transformed my confidence. I can now present in meetings without hesitation!",
    },
    {
      name: "Rahul Verma",
      role: "Client",
      content: "The tarot reading gave me the clarity I needed to make an important life decision. Truly insightful!",
    },
    {
      name: "Anjali Reddy",
      role: "Workshop Attendee",
      content: "The workshops on decision-making helped me overcome paralysis and take action on my goals.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(220, 80, 20, 0.9) 0%, rgba(220, 70, 30, 0.85) 100%), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-6 py-2 bg-accent/20 backdrop-blur-sm rounded-full">
              <span className="text-accent font-semibold">Empowering Through Education</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Katalyka Consultancy Foundation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Transform your life through education, empowerment, and personal growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8">
                  Explore Courses
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive solutions for personal and professional growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={index} to={service.link}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-accent-foreground" />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses Highlight */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Courses</h2>
            <p className="text-muted-foreground text-lg">
              Learn at your own pace with our comprehensive online courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-2xl">Spoken English Mastery</CardTitle>
                <CardDescription>From basics to advanced presentation skills</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Build confidence in speaking English with structured lessons and practice sessions
                </p>
                <Link to="/courses">
                  <Button className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-2xl">Overcoming Decision Paralysis</CardTitle>
                <CardDescription>Take action and achieve your goals</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Break free from indecision and develop strategies for confident decision-making
                </p>
                <Link to="/courses">
                  <Button className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Shop Highlight */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="inline-block mb-4 px-4 py-2 bg-secondary/50 rounded-full">
                <span className="text-secondary-foreground font-semibold">Tulika Crafts</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Handmade with Love</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Discover beautiful handcrafted crochet items, coasters, scrunchies, and home décor pieces. 
                Each item is made with care and attention to detail.
              </p>
              <Link to="/shop">
                <Button size="lg" variant="default" className="gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Visit Shop
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-accent/20">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Crochet Coasters</h3>
                    <p className="text-sm text-muted-foreground">Colorful & unique designs</p>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/20">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Sofa Covers</h3>
                    <p className="text-sm text-muted-foreground">Custom made pieces</p>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/20">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Scrunchies</h3>
                    <p className="text-sm text-muted-foreground">Handmade accessories</p>
                  </CardContent>
                </Card>
                <Card className="bg-accent/20">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Home Décor</h3>
                    <p className="text-sm text-muted-foreground">Unique mandala designs</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg">
              Real stories from people whose lives we've touched
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-red text-red" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Life?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of people who have already started their journey with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                Start Learning Today
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
