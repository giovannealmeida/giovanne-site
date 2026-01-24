import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card } from "./ui/card";

interface ExperienceItem {
  title: string;
  company: string;
  type: string;
  period: string;
  duration: string;
  location?: string;
  description: string[];
  skills?: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Desenvolvedor Kotlin",
    company: "Mapzer",
    type: "Autônomo",
    period: "nov 2020 - jan 2026",
    duration: "5 anos 3 meses",
    location: "Curitiba, Paraná, Brasil · Remota",
    description: [
      "Desenvolvimento de aplicativo Android e aplicação desktop embarcada em Kotlin",
      "Desenvolvimento e manutenção de aplicação web e APIs em ASP.NET Core",
      "Desenvolvimento e manutenção de bancos de dados MySQL e SQL Server",
    ],
    skills: ["Kotlin", "Android", "ASP.NET Core", "MySQL", "SQL Server", "Azure DevOps", "CI/CD"],
  },
  {
    title: "Desenvolvedor para Android",
    company: "enjoei",
    type: "Tempo integral",
    period: "ago 2022 - mai 2025",
    duration: "2 anos 10 meses",
    description: [
      "Desenvolvimento de app Android nativo (MVVM)",
      "Migração de Java para Kotlin",
      "Migração de ViewBinding para Compose",
    ],
    skills: ["Kotlin", "Jetpack Compose", "MVVM", "GitHub Actions", "Fastlane", "CI/CD"],
  },
  {
    title: "Desenvolvedor Android",
    company: "Autônomo",
    type: "Autônomo",
    period: "fev 2013 - mai 2025",
    duration: "12 anos 4 meses",
    location: "Ilhéus, Bahia, Brasil",
    description: [
      "Desenvolvimento de diversas aplicações Android (Java e Kotlin)",
      "Desenvolvimento de CMS para alimentar os apps",
      "Desenvolvimento de APIs RESTful (Java EE, CodeIgniter, Laravel, Flask, FastApi)",
      "Desenvolvimento de bancos de dados (MySQL e PostgreSQL)",
    ],
    skills: ["Java", "Kotlin", "Python", "Django", "Flask", "Laravel", "PostgreSQL"],
  },
  {
    title: "Desenvolvedor Android",
    company: "Techmobil",
    type: "Freelance",
    period: "ago 2017 - set 2019",
    duration: "2 anos 2 meses",
    location: "Ilhéus, Bahia, Brasil",
    description: [
      "Desenvolvimento do aplicativo de resultados de exames VIDA",
      "Desenvolvimento do aplicativo de feed de notícias Notícias de Contabilidade",
    ],
    skills: ["Java", "Android", "REST API", "GitFlow"],
  },
  {
    title: "Programador Estagiário",
    company: "IPSoft",
    type: "Estágio",
    period: "fev 2014 - set 2014",
    duration: "8 meses",
    location: "Ilhéus, Bahia, Brasil",
    description: [
      "Desenvolvimento de aplicações Android nativa (Java)",
      "Desenvolvimento de aplicações web e APIs RESTful (Java EE, JSF, JPA)",
      "Deploy de aplicações no servidor (Glassfish)",
      "Manutenção de banco de dados MySQL",
    ],
    skills: ["Java", "Java EE", "JSF", "JPA", "MySQL", "Glassfish"],
  },
];

const Experience = () => {
  return (
    <section className="py-24 px-4" id="experience">
      <div className="container max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="p-3 rounded gradient-hero shadow-glow">
            <Briefcase className="w-6 h-6 text-primary-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black">
            EXPERIÊNCIA <span className="text-primary text-glow">PROFISSIONAL</span>
          </h2>
        </div>
        
        <div className="relative">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative pl-12 pb-12 last:pb-0 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline */}
              {index < experiences.length - 1 && <div className="timeline-line" />}
              <div className="timeline-dot" />
              
              <Card className="p-6 gradient-card card-hover">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-semibold font-mono">{exp.company} · {exp.type}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1 text-sm text-muted-foreground font-mono">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{exp.period}</span>
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">{exp.duration}</span>
                  </div>
                </div>
                
                {exp.location && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 font-mono">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{exp.location}</span>
                  </div>
                )}
                
                <ul className="space-y-2 mb-4">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 shadow-glow-sm" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                
                {exp.skills && (
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="skill-tag text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
