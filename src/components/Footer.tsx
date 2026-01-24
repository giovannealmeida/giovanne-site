import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-border bg-card/30">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black mb-2">
            VAMOS <span className="text-primary text-glow">CONVERSAR</span>?
          </h2>
          <p className="text-muted-foreground font-mono">giovanne.almeida91@gmail.com</p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-10">
          <a
            href="https://www.linkedin.com/in/giovanne-almeida/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-glow-sm transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/giovannealmeid"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-glow-sm transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="mailto:giovanne.almeida91@gmail.com"
            className="p-3 rounded border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-glow-sm transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
        
        <div className="text-center text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} <span className="text-primary">Giovanne Almeida</span>. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
