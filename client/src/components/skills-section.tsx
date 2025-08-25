import { useEffect, useRef } from "react";
import { Code, Server, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface SkillData {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  gradient: string;
  skills: SkillData[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: <Code className="h-5 w-5" />,
    gradient: "from-blue-500 to-indigo-600",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React/NextJS", level: 80 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Backend Development", 
    icon: <Server className="h-5 w-5" />,
    gradient: "from-green-500 to-emerald-600",
    skills: [
      { name: "Java", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "SpringBoot", level: 75 },
    ],
  },
  {
    title: "Database & Tools",
    icon: <Database className="h-5 w-5" />,
    gradient: "from-purple-500 to-pink-600",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "SQL/MySQL", level: 80 },
      { name: "Git/GitHub", level: 90 },
      { name: "VS Code", level: 95 },
    ],
  },
];

const technologies = [
  { name: "JavaScript", icon: "🟨" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Java", icon: "☕" },
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "Git", icon: "🔧" },
  { name: "Database", icon: "🗃️" },
];

function SkillBar({ skill, category }: { skill: SkillData; category: SkillCategory }) {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && progressRef.current) {
            progressRef.current.style.width = `${skill.level}%`;
          }
        });
      },
      { threshold: 0.5 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, [skill.level]);

  return (
    <div className="skill-item">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-secondary dark:text-white">{skill.name}</span>
        <span className="text-sm text-muted dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          ref={progressRef}
          className={`bg-gradient-to-r ${category.gradient} h-2 rounded-full transition-all duration-1000 ease-out w-0`}
          data-testid={`skill-progress-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900" data-testid="skills-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted dark:text-gray-300 max-w-2xl mx-auto">
            Proficient in modern web technologies and frameworks
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className={`bg-gradient-to-br ${category.gradient} text-white p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-secondary dark:text-white mt-4">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skillIndex} skill={skill} category={category} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Technology Icons */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-secondary dark:text-white mb-8">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Card key={index} className="p-4 hover:shadow-lg transition-shadow duration-200 hover:scale-105 transform">
                <CardContent className="p-0 text-center">
                  <div className="text-3xl mb-2" data-testid={`tech-icon-${tech.name.toLowerCase()}`}>
                    {tech.icon}
                  </div>
                  <div className="text-xs text-muted dark:text-gray-400">{tech.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
