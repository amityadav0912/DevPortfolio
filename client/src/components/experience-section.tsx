import { Briefcase, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Packaged App Development Associate",
    company: "Accenture Solutions Pvt. Ltd.",
    location: "Bengaluru, Karnataka",
    period: "July 2023 - Present",
    icon: <Briefcase className="h-4 w-4" />,
    gradient: "from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-700",
    borderColor: "border-indigo-100 dark:border-gray-600",
    iconBg: "bg-indigo-600",
    achievements: [
      "Developed SPA using Angular for event management with complex form flows and extensive validations",
      "Redesigned multi-section forms, reducing completion time by 60%",
      "Engineered RESTful APIs with Node.js, driving 30% increase in backend efficiency",
      "Developed TypeScript framework for high-throughput data processing, accelerating testing 15x"
    ],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    title: "Full Stack Java Developer",
    company: "Code Planet Pvt. Ltd.",
    location: "Jaipur, Rajasthan", 
    period: "October 2021 - April 2022",
    icon: <Code className="h-4 w-4" />,
    gradient: "from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700",
    borderColor: "border-green-100 dark:border-gray-600",
    iconBg: "bg-green-600",
    achievements: [
      "Constructed dynamic websites with Java, SpringBoot, JDBC, and MySQL",
      "Implemented secure authorization systems for web applications",
      "Designed RESTful APIs for seamless front-end and back-end communication",
      "Managed database schemas and performed data migrations"
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-black" data-testid="experience-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and key contributions
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-primary"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start space-x-8 md:space-x-0">
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white dark:border-black shadow-lg flex items-center justify-center">
                  {exp.icon}
                </div>
                
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:pl-8 md:ml-auto'}`}>
                  <Card className={`bg-gradient-to-r ${exp.gradient} shadow-lg ${exp.borderColor}`}>
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`${exp.iconBg} text-white p-2 rounded-lg`}>
                          <Briefcase className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-secondary dark:text-white" data-testid={`experience-title-${index}`}>
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium" data-testid={`experience-company-${index}`}>
                            {exp.company}
                          </p>
                          <p className="text-sm text-muted dark:text-gray-400" data-testid={`experience-details-${index}`}>
                            {exp.period} • {exp.location}
                          </p>
                        </div>
                      </div>
                      <ul className="space-y-3 text-muted dark:text-gray-300">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2">
                            <span className="text-accent mt-1">✓</span>
                            <span data-testid={`experience-achievement-${index}-${achIndex}`}>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                {index % 2 === 0 ? (
                  <div className="hidden md:block w-1/2 pl-8">
                    <img 
                      src={exp.image} 
                      alt={`${exp.company} work environment`} 
                      className="rounded-xl shadow-lg w-full h-64 object-cover dark:shadow-gray-800"
                      data-testid={`experience-image-${index}`}
                    />
                  </div>
                ) : (
                  <div className="hidden md:block w-1/2 pr-8 order-first">
                    <img 
                      src={exp.image} 
                      alt={`${exp.company} work environment`} 
                      className="rounded-xl shadow-lg w-full h-64 object-cover dark:shadow-gray-800"
                      data-testid={`experience-image-${index}`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
