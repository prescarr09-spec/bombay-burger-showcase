import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Todd Dempsey",
    role: "Local Guide",
    review: "This food truck posted up at Polo park one day and we were hungry. So glad it was there because Oh my God are the loaded curry fries delicious! By far one of the best things I've eaten in Bakersfield. The depth of flavor is incredible.",
    rating: 5,
  },
  {
    name: "Cameron Hutton",
    role: "Local Guide",
    review: "Had the amazing Bombay bacon burger. Great burger, even if you don't like Indian food. It had just enough flavor to make it special, but not overwhelm a solid American burger. Good staff. Mist spraying in the seating area is a great idea in the Bakersfield summer heat.",
    rating: 5,
  },
  {
    name: "Rhonda Bennett",
    role: "Customer",
    review: "My husband loves the bacon bombay burgers and my favorite is the Mumbai chicken with cheese. Curry fries are delicious and the people running it are very kind. I highly recommend the food if you want to try something new and delicious.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            What People Say
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-foreground font-bold text-lg">4.7</span>
            <span className="text-muted-foreground">from 10 reviews</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div 
              key={review.name}
              className="relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Review text */}
              <p className="text-foreground/90 leading-relaxed mb-6 text-sm">
                "{review.review}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
