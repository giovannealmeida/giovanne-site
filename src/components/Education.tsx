import { GraduationCap, Calendar } from "lucide-react";
import { Card } from "./ui/card";

const Education = () => {
  return (
    <section className="py-24 px-4" id="education">
      <div className="container max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="p-3 rounded gradient-hero shadow-glow">
            <GraduationCap className="w-6 h-6 text-primary-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black">
            FORMAÇÃO <span className="text-primary text-glow">ACADÊMICA</span>
          </h2>
        </div>
        
        <Card className="p-8 gradient-card card-hover animate-slide-up">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded gradient-hero flex items-center justify-center flex-shrink-0 shadow-glow">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  Universidade Estadual de Santa Cruz
                </h3>
                <p className="text-primary font-semibold font-mono text-lg mt-1">
                  Bacharelado em Ciência da Computação
                </p>
                <div className="flex items-center gap-2 mt-3 text-muted-foreground font-mono">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>2011 - 2017</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;
