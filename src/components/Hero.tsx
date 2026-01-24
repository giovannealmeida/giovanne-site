import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-5" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar/Initials */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full gradient-hero shadow-glow">
              <span className="text-3xl font-bold text-primary-foreground">GA</span>
            </div>
          </div>
          
          {/* Name */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-slide-up">
            Giovanne Almeida
          </h1>
          
          {/* Title */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-primary font-semibold">Android Developer</span>
            <span className="mx-3 text-border">|</span>
            Java • Kotlin • MVVM • Compose
          </p>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <MapPin className="w-4 h-4" />
            <span>Brasil</span>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              variant="outline" 
              size="lg"
              className="gap-2 card-hover"
              asChild
            >
              <a href="https://www.linkedin.com/in/giovanne-almeida/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="gap-2 card-hover"
              asChild
            >
              <a href="https://github.com/giovannealmeid" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button 
              size="lg"
              className="gap-2 gradient-hero shadow-glow hover:opacity-90 transition-opacity"
              asChild
            >
              <a href="mailto:contato@giovannealmeida.dev">
                <Mail className="w-5 h-5" />
                Contato
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
