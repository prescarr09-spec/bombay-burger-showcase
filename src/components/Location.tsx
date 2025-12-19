import { MapPin, Clock, DollarSign, Utensils, ShoppingBag } from "lucide-react";

const Location = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map embed */}
          <div className="relative rounded-2xl overflow-hidden border border-border aspect-video lg:aspect-square">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.8747854661267!2d-119.15899138474902!3d35.28739198028652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ea3fe8b8b8b8b8%3A0x8b8b8b8b8b8b8b8b!2s4302%20Gosford%20Rd%2C%20Bakersfield%2C%20CA%2093313!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
            
            {/* Overlay card */}
            <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm rounded-xl p-4 border border-border">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <MapPin className="w-4 h-4" />
                Get Directions
              </div>
            </div>
          </div>
          
          {/* Info */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Visit Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-8">
              Find Us in
              <br />
              <span className="text-gradient">Bakersfield</span>
            </h2>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Address</div>
                  <div className="text-muted-foreground">
                    4302 Gosford Rd<br />
                    Bakersfield, CA 93313
                  </div>
                </div>
              </div>
              
              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Hours</div>
                  <div className="text-muted-foreground">
                    Open Daily · Closes 8 PM
                  </div>
                </div>
              </div>
              
              {/* Price */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Price Range</div>
                  <div className="text-muted-foreground">
                    $10–20 per person
                  </div>
                </div>
              </div>
              
              {/* Services */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Utensils className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Services</div>
                  <div className="flex gap-2 mt-2">
                    <span className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground flex items-center gap-1">
                      <Utensils className="w-3 h-3" /> Dine-in
                    </span>
                    <span className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground flex items-center gap-1">
                      <ShoppingBag className="w-3 h-3" /> Takeout
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
