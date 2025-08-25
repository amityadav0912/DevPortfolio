import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Dopamine - Fitness Center Booking",
    description: "Innovative gym booking application enabling seamless workout scheduling with Google OAuth, Maps integration, and secure payment processing.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    technologies: ["Next.JS", "MongoDB", "Express.JS", "Node.JS"],
    category: "Full Stack",
    date: "Jan 2023",
    demoUrl: "https://dopamine-pi.vercel.app/",
    githubUrl: "https://github.com/amityadav0912"
  },
  {
    title: "HappyPaws - Pet Adoption Platform", 
    description: "Comprehensive platform for pet adoption, donations, and volunteering with PayPal integration and responsive design for optimal user experience.",
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    technologies: ["React", "Node.js", "MongoDB", "PayPal API"],
    category: "MERN Stack",
    date: "May 2023",
    demoUrl: "https://happypaws-iota.vercel.app/",
    githubUrl: "https://github.com/amityadav0912"
  },
  {
    title: "Bankist - Complete Banking App",
    description: "Comprehensive banking platform with secure account access, transaction history, fund transfers, and loan management using advanced JavaScript ES6 features.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    technologies: ["JavaScript", "HTML5", "CSS3", "DOM API"],
    category: "Vanilla JS",
    date: "Oct 2022",
    demoUrl: "https://bankiest.vercel.app/",
    githubUrl: "https://github.com/amityadav0912"
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Full Stack":
      return "bg-gradient-to-r from-purple-500 to-pink-500";
    case "MERN Stack":
      return "bg-gradient-to-r from-green-500 to-teal-500";
    case "Vanilla JS":
      return "bg-gradient-to-r from-blue-500 to-indigo-500";
    default:
      return "bg-gradient-to-r from-gray-500 to-gray-600";
  }
};

const getTechColor = (tech: string) => {
  const colors: { [key: string]: string } = {
    "Next.JS": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    "MongoDB": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "Express.JS": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    "Node.JS": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    "React": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    "Node.js": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "PayPal API": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    "JavaScript": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    "HTML5": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    "CSS3": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    "DOM API": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  };
  return colors[tech] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900" data-testid="projects-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing my best work and technical expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={`${project.title} interface preview`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  data-testid={`project-image-${index}`}
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center space-x-2 mb-3">
                  <div className={`${getCategoryColor(project.category)} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                    {project.category}
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full text-xs font-medium">
                    {project.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary dark:text-white mb-3" data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-muted dark:text-gray-300 mb-4 text-sm" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className={`${getTechColor(tech)} px-2 py-1 rounded text-xs`}
                      data-testid={`project-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark transition-colors duration-200 text-sm font-medium flex items-center"
                    data-testid={`project-demo-${index}`}
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-muted hover:text-secondary dark:text-gray-400 dark:hover:text-white transition-colors duration-200 text-sm font-medium flex items-center"
                    data-testid={`project-github-${index}`}
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
