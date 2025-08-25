import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted dark:text-gray-300 max-w-2xl mx-auto">
            Passionate full-stack developer with a strong foundation in modern web technologies
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-secondary dark:text-white mb-6">My Journey</h3>
            <p className="text-muted dark:text-gray-300 mb-6 leading-relaxed">
              I'm a dedicated software engineer with expertise in both front-end and back-end development. 
              Currently working at Accenture as a Packaged App Development Associate, I've successfully 
              developed SPAs, RESTful APIs, and robust frameworks that have significantly improved 
              system performance and user experience.
            </p>
            <p className="text-muted dark:text-gray-300 mb-8 leading-relaxed">
              My passion for problem-solving is evident through my active participation in coding 
              competitions and my achievement of solving 200+ problems on various platforms. 
              I believe in continuous learning and staying updated with the latest technologies.
            </p>
            
            {/* Education Card */}
            <Card className="bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 border-indigo-100 dark:border-gray-600">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-white p-3 rounded-lg">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-secondary dark:text-white" data-testid="education-degree">
                      Bachelor of Technology
                    </h4>
                    <p className="text-primary font-medium">Information Technology</p>
                    <p className="text-sm text-muted dark:text-gray-400" data-testid="education-college">
                      Jaipur Engineering College and Research Center
                    </p>
                    <p className="text-sm text-muted dark:text-gray-400" data-testid="education-duration">
                      Aug 2019 - June 2023 • CGPA: 8.75
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2" data-testid="stat-experience">2+</div>
                  <div className="text-sm text-muted dark:text-gray-400">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2" data-testid="stat-projects">5+</div>
                  <div className="text-sm text-muted dark:text-gray-400">Projects Completed</div>
                </CardContent>
              </Card>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Clean and organized coding setup with multiple monitors" 
              className="rounded-xl shadow-lg w-full h-64 object-cover dark:shadow-gray-800"
              data-testid="about-coding-setup"
            />
            
            {/* Quick Facts */}
            <Card className="bg-gray-50 dark:bg-gray-800">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-secondary dark:text-white mb-4">Quick Facts</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3" data-testid="fact-location">
                    <span className="text-primary">📍</span>
                    <span className="text-muted dark:text-gray-300">Based in Bengaluru, Karnataka</span>
                  </div>
                  <div className="flex items-center space-x-3" data-testid="fact-hackerrank">
                    <span className="text-primary">🏆</span>
                    <span className="text-muted dark:text-gray-300">HackerRank 5⭐ in Java</span>
                  </div>
                  <div className="flex items-center space-x-3" data-testid="fact-hackathon">
                    <span className="text-primary">🥈</span>
                    <span className="text-muted dark:text-gray-300">Runner-up IEEE Hack OverFlow</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
