import { Star, MapPin, Clock, Phone, DollarSign } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />
      
      {/* Decorative glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] z-0" />
      
      <div className="container mx-auto px-4 z-20 text-center">
        <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Now Open in Bakersfield
          </span>
        </div>
        
        <h1 
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-foreground">Bombay</span>
          <br />
          <span className="text-gradient">Burgers</span>
        </h1>
        
        <p 
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Where authentic Indian spices meet classic American burgers. 
          Experience the fusion that Bakersfield can't stop talking about.
        </p>
        
        {/* Rating */}
        <div 
          className="flex items-center justify-center gap-4 mb-10 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-5 h-5 ${i < 5 ? 'fill-primary text-primary' : 'text-muted'}`} 
              />
            ))}
          </div>
          <span className="text-foreground font-semibold">4.7</span>
          <span className="text-muted-foreground">(10 reviews)</span>
          <span className="text-muted-foreground">•</span>
          <span className="flex items-center gap-1 text-muted-foreground">
            <DollarSign className="w-4 h-4" />
            $10–20
          </span>
        </div>
        
        {/* Quick info pills */}
        <div 
          className="flex flex-wrap items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm">4302 Gosford Rd, Bakersfield</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm">Open · Closes 8 PM</span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
