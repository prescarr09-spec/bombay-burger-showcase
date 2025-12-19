import curryFries from "@/assets/curry-fries-hero.jpg";
import bombayBurger from "@/assets/bombay-burger.jpg";
import mumbaiChicken from "@/assets/mumbai-chicken.jpg";

const menuItems = [
  {
    name: "Loaded Curry Fries",
    description: "Crispy golden fries smothered in our signature curry sauce, topped with melted cheese and fresh cilantro. The dish everyone raves about.",
    image: curryFries,
    tag: "Fan Favorite",
  },
  {
    name: "Bombay Bacon Burger",
    description: "Juicy beef patty with crispy bacon, melted cheese, and our secret Indian spice blend. American comfort meets Bombay flavor.",
    image: bombayBurger,
    tag: "Signature",
  },
  {
    name: "Mumbai Chicken",
    description: "Tender grilled chicken breast seasoned with aromatic spices, fresh vegetables, and creamy raita sauce on a toasted bun.",
    image: mumbaiChicken,
    tag: "Popular",
  },
];

const MenuHighlights = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Menu</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Signature Dishes
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every dish tells a story of two cuisines coming together in perfect harmony
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div 
              key={item.name}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.25)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Tag */}
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                {item.tag}
              </span>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
