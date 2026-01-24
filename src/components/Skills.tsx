import { Code2, Database, Wrench, Cloud } from "lucide-react";

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  highlight: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "LINGUAGENS &",
    highlight: "FRAMEWORKS",
    skills: [
      "Kotlin",
      "Java",
      "Jetpack Compose",
      "Android SDK",
      "MVVM",
      "Python",
      "C#",
      "ASP.NET Core",
      "Django",
      "Flask",
      "FastAPI",
      "Laravel",
    ],
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "BANCO DE",
    highlight: "DADOS",
    skills: [
      "MySQL",
      "PostgreSQL",
      "SQL Server",
      "SQLite",
      "Firestore",
    ],
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "FERRAMENTAS &",
    highlight: "PRÁTICAS",
    skills: [
      "Android Studio",
      "Google Play",
      "Git",
      "GitFlow",
      "Gradle",
      "RESTful APIs",
      "Retrofit",
      "Injeção de Dependência",
      "Clean Architecture",
      "Clean Code",
      "Design Patterns",
      "Testes Unitários",
      "Mockk",
      "Turbine",
      "LeakCanary"
    ],
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "DEVOPS &",
    highlight: "CLOUD",
    skills: [
      "CI/CD",
      "Azure DevOps",
      "Azure Pipelines",
      "GitHub Actions",
      "Fastlane",
      "Google Cloud Platform",
      "Scrum",
      "Shape Up",
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30" id="skills">
      <div className="container max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="p-3 rounded gradient-hero shadow-glow">
            <Code2 className="w-6 h-6 text-primary-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black">
            O QUE EU <span className="text-primary text-glow">FAÇO</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="p-6 rounded border border-border bg-card/50 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="font-black text-lg">
                  {category.title} <span className="text-primary">{category.highlight}</span>
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="skill-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
