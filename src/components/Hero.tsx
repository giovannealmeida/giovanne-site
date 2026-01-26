import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import Gravatar from "./Gravatar";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
      
      <div className="container relative z-10 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Avatar/Initials */}
          <div className="mb-10 animate-fade-in">
            <div className="inline-flex items-center justify-center rounded-full gradient-hero shadow-glow animate-[pulse-glow_3s_ease-in-out_infinite]">
              <Gravatar />
            </div>
          </div>
          
          {/* Name */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 animate-slide-up tracking-tight">
            GIOVANNE{" "}
            <span className="text-primary text-glow">ALMEIDA</span>
          </h1>
          
          {/* Title */}
          <div className="text-xl md:text-2xl mb-8 animate-slide-up font-mono" style={{ animationDelay: "0.1s" }}>
            <span className="text-primary font-bold">&lt;</span>
            <span className="text-muted-foreground">Android Developer</span>
            <span className="text-primary font-bold">/&gt;</span>
          </div>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8 animate-slide-up" style={{ animationDelay: "0.15s" }}>
            {["Java", "Kotlin", "Coroutines", "MVVM", "Compose", "Material 3"].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-secondary/50 border border-border rounded-full text-sm font-mono text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm">Ilhéus - Bahia - Brasil</span>
          </div>
          
          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              variant="outline" 
              size="lg"
              className="gap-2 card-hover border-border bg-card/50 font-semibold"
              asChild
            >
              <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="gap-2 card-hover border-border bg-card/50 font-semibold"
              asChild
            >
              <a href={import.meta.env.VITE_GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button 
              size="lg"
              className="gap-2 gradient-hero font-bold text-primary-foreground shadow-glow animate-[pulse-glow_3s_ease-in-out_infinite]"
              asChild
            >
              <a href={import.meta.env.VITE_EMAIL_URL.replace('mailto:', '')}>
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
