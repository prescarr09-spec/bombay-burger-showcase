const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <h3 className="font-display text-2xl font-bold">
              <span className="text-foreground">Bombay</span>{" "}
              <span className="text-primary">Burgers</span>
            </h3>
            <p className="text-muted-foreground text-sm mt-1">
              Indian-American Fusion Cuisine
            </p>
          </div>
          
          {/* Location */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              4302 Gosford Rd, Bakersfield, CA 93313
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Open Daily · Closes 8 PM
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Bombay Burgers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
