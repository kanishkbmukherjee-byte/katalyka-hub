import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Star } from "lucide-react";
import craftHero from "@/assets/craft-hero.jpg";

const Shop = () => {
  const products = [
    {
      name: "Crochet Coasters Set",
      description: "Set of 6 colorful handmade crochet coasters",
      price: "₹399",
      rating: 4.8,
      reviews: 45,
      category: "Home Décor",
      inStock: true,
      colors: ["Red", "Blue", "Green", "Yellow"],
    },
    {
      name: "Mandala Wall Hanging",
      description: "Beautiful intricate mandala design for your wall",
      price: "₹1,299",
      rating: 4.9,
      reviews: 32,
      category: "Home Décor",
      inStock: true,
      colors: ["Multi-color"],
    },
    {
      name: "Handmade Scrunchies",
      description: "Pack of 5 soft and stylish hair scrunchies",
      price: "₹249",
      rating: 4.7,
      reviews: 68,
      category: "Accessories",
      inStock: true,
      colors: ["Pink", "Purple", "Blue", "Yellow", "Green"],
    },
    {
      name: "Crochet Sofa Cover",
      description: "Custom-made sofa cover in your choice of colors",
      price: "₹2,499",
      rating: 4.9,
      reviews: 28,
      category: "Home Décor",
      inStock: true,
      colors: ["Custom"],
    },
    {
      name: "Mini Crochet Basket",
      description: "Perfect for organizing small items",
      price: "₹499",
      rating: 4.6,
      reviews: 52,
      category: "Storage",
      inStock: true,
      colors: ["Natural", "White", "Grey"],
    },
    {
      name: "Crochet Table Runner",
      description: "Elegant table runner for dining table",
      price: "₹899",
      rating: 4.8,
      reviews: 35,
      category: "Home Décor",
      inStock: true,
      colors: ["White", "Cream", "Beige"],
    },
    {
      name: "Handmade Gift Set",
      description: "Curated set of crochet items - perfect gift",
      price: "₹1,999",
      rating: 5.0,
      reviews: 42,
      category: "Gift Sets",
      inStock: true,
      colors: ["Assorted"],
    },
    {
      name: "Crochet Plant Hanger",
      description: "Stylish way to display your plants",
      price: "₹599",
      rating: 4.7,
      reviews: 38,
      category: "Home Décor",
      inStock: true,
      colors: ["Natural", "White"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-secondary/80 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={craftHero} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">Tulika Crafts</Badge>
            <h1 className="text-5xl font-bold mb-6 text-foreground">Handmade with Love</h1>
            <p className="text-xl text-muted-foreground">
              Discover our collection of beautiful handcrafted crochet items. Each piece is unique and made with care.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <ShoppingBag className="w-16 h-16 text-muted-foreground" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{product.category}</Badge>
                    {product.inStock && (
                      <Badge className="bg-green/20 text-green hover:bg-green/30">In Stock</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-red text-red" />
                      <span className="text-sm font-semibold">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  </div>

                  <div className="mb-3">
                    <p className="text-sm text-muted-foreground mb-2">Available colors:</p>
                    <div className="flex flex-wrap gap-1">
                      {product.colors.map((color, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {color}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col gap-3">
                  <div className="w-full flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                  </div>
                  <Button className="w-full" size="lg">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Handmade Quality</h3>
                <p className="text-muted-foreground">
                  Every item is carefully crafted by hand with attention to detail
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Custom Orders</h3>
                <p className="text-muted-foreground">
                  We accept custom orders in your preferred colors and sizes
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Quick processing and reliable delivery to your doorstep
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Orders CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-2 border-accent">
            <CardContent className="pt-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Need Something Custom?</h2>
              <p className="text-muted-foreground text-lg mb-6">
                We'd love to create something special just for you. Contact us to discuss your custom order requirements.
              </p>
              <Button size="lg" className="font-semibold">
                Contact Us for Custom Orders
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Shop;
