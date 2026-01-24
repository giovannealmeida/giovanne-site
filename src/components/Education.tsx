import { GraduationCap, Calendar } from "lucide-react";
import { Card } from "./ui/card";

const Education = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30" id="education">
      <div className="container max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 rounded-lg gradient-hero">
            <GraduationCap className="w-6 h-6 text-primary-foreground" />
          </div>
          <h2 className="text-3xl font-bold">Formação Acadêmica</h2>
        </div>
        
        <Card className="p-6 gradient-card shadow-soft card-hover animate-slide-up">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Universidade Estadual de Santa Cruz
                </h3>
                <p className="text-primary font-medium">
                  Bacharelado em Ciência da Computação
                </p>
                <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
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
