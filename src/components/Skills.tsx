import { Code2, Database, Wrench, Cloud } from "lucide-react";

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Linguagens & Frameworks",
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
    icon: <Database className="w-5 h-5" />,
    title: "Banco de Dados",
    skills: [
      "MySQL",
      "PostgreSQL",
      "SQL Server",
      "SQLite",
      "Room",
    ],
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    title: "Ferramentas & Práticas",
    skills: [
      "Android Studio",
      "Git",
      "GitFlow",
      "Gradle",
      "Postman",
      "REST APIs",
      "Injeção de Dependência",
      "Clean Architecture",
      "Design Patterns",
    ],
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    title: "DevOps & Cloud",
    skills: [
      "CI/CD",
      "Azure DevOps",
      "Azure Pipelines",
      "GitHub Actions",
      "Fastlane",
      "Google Cloud Platform",
      "Linux",
      "Scrum",
      "Shape Up",
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="container max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 rounded-lg gradient-hero">
            <Code2 className="w-6 h-6 text-primary-foreground" />
          </div>
          <h2 className="text-3xl font-bold">Competências</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
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
