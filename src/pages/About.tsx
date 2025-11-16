import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Sparkles, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Empowerment",
      description: "We believe in empowering individuals to reach their full potential",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering the highest quality in education and service",
    },
    {
      icon: Sparkles,
      title: "Transformation",
      description: "Facilitating meaningful personal and professional transformation",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive community of learners and achievers",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Katalyka</h1>
            <p className="text-xl text-primary-foreground/90">
              Foundation for Education and Empowerment
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Katalyka Consultancy Foundation was born from a passion for education and a deep 
                commitment to empowering individuals. Our journey began with a simple belief: that 
                everyone deserves access to quality education and the tools they need to transform 
                their lives.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Through English coaching, we help individuals break communication barriers and unlock 
                new opportunities. Our tarot reading services provide guidance and clarity for those 
                seeking direction. With professional ghostwriting, we give voice to untold stories.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Beyond our core services, we've expanded into handcrafted products through Tulika, 
                celebrating creativity and craftsmanship. Every coaster, scrunchie, and home décor 
                piece is made with love and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-2 border-accent">
              <CardContent className="pt-8">
                <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To provide accessible, high-quality education and empowerment services that 
                  enable individuals to achieve their personal and professional goals. We strive 
                  to create lasting positive change in the lives of those we serve.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary">
              <CardContent className="pt-8">
                <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To become a leading force in education and personal development, recognized 
                  for our innovative approach, commitment to excellence, and the transformative 
                  impact we create in communities worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
