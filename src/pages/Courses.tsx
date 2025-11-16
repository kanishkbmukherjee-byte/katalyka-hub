import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, Star } from "lucide-react";
import coursesHero from "@/assets/courses-hero.jpg";

const Courses = () => {
  const courses = [
    {
      title: "Spoken English for Beginners",
      description: "Master the fundamentals of English communication with confidence",
      level: "Beginner",
      duration: "8 weeks",
      students: "500+",
      rating: 4.8,
      modules: 12,
      price: "₹4,999",
      features: [
        "Basic grammar and vocabulary",
        "Pronunciation practice",
        "Daily conversation skills",
        "Interactive exercises",
      ],
    },
    {
      title: "Advanced Spoken English",
      description: "Perfect your presentation and storytelling skills in English",
      level: "Advanced",
      duration: "10 weeks",
      students: "300+",
      rating: 4.9,
      modules: 15,
      price: "₹7,999",
      features: [
        "Professional presentations",
        "Business communication",
        "Storytelling techniques",
        "Public speaking mastery",
      ],
    },
    {
      title: "Overcoming Decision Paralysis",
      description: "Break free from indecision and take confident action",
      level: "All Levels",
      duration: "6 weeks",
      students: "450+",
      rating: 4.7,
      modules: 10,
      price: "₹3,999",
      features: [
        "Decision-making frameworks",
        "Overcoming analysis paralysis",
        "Goal-setting strategies",
        "Action-taking techniques",
      ],
    },
    {
      title: "Women Empowerment Mini Course",
      description: "Build confidence and reclaim your power",
      level: "All Levels",
      duration: "4 weeks",
      students: "600+",
      rating: 4.9,
      modules: 8,
      price: "₹2,999",
      features: [
        "Self-confidence building",
        "Personal boundaries",
        "Career advancement",
        "Work-life balance",
      ],
    },
    {
      title: "Tarot for Beginners",
      description: "Learn the art of tarot reading and intuitive guidance",
      level: "Beginner",
      duration: "6 weeks",
      students: "250+",
      rating: 4.8,
      modules: 12,
      price: "₹5,999",
      features: [
        "Card meanings and symbolism",
        "Reading techniques",
        "Intuitive development",
        "Practice sessions",
      ],
    },
    {
      title: "Creative Writing Masterclass",
      description: "Develop your writing skills and find your unique voice",
      level: "Intermediate",
      duration: "8 weeks",
      students: "350+",
      rating: 4.7,
      modules: 14,
      price: "₹6,999",
      features: [
        "Writing fundamentals",
        "Storytelling techniques",
        "Character development",
        "Editing and revision",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={coursesHero} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Courses</h1>
            <p className="text-xl text-primary-foreground/90">
              Transform your life with our expert-led online courses. Learn at your own pace and achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={course.level === "Beginner" ? "secondary" : "default"}>
                      {course.level}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-red text-red" />
                      <span className="text-sm font-semibold">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                    <div className="flex flex-col items-center p-2 bg-muted rounded">
                      <Clock className="w-5 h-5 mb-1 text-muted-foreground" />
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex flex-col items-center p-2 bg-muted rounded">
                      <BookOpen className="w-5 h-5 mb-1 text-muted-foreground" />
                      <span className="font-medium">{course.modules} modules</span>
                    </div>
                    <div className="flex flex-col items-center p-2 bg-muted rounded">
                      <Users className="w-5 h-5 mb-1 text-muted-foreground" />
                      <span className="font-medium">{course.students}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="flex flex-col gap-3">
                  <div className="w-full flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary">{course.price}</span>
                  </div>
                  <Button className="w-full" size="lg">
                    Enroll Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Our Courses?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
                <p className="text-muted-foreground">
                  Learn from experienced professionals with proven track records
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Learn at Your Pace</h3>
                <p className="text-muted-foreground">
                  Flexible scheduling and lifetime access to course materials
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                <p className="text-muted-foreground">
                  Join a vibrant community of learners and get support when needed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
