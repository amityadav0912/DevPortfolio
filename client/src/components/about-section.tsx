import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Setup from "../assets/Setup.jpg";
import codingVideo from "../assets/CodingRec.mp4";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              competitions and my achievement of solving 300+ problems on various platforms. 
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
                  <div className="text-2xl font-bold text-primary mb-2" data-testid="stat-projects">15+</div>
                  <div className="text-sm text-muted dark:text-gray-400">Projects Completed</div>
                </CardContent>
              </Card>
            </div>

        <video
        className="rounded-xl shadow-lg w-full h-64 object-cover dark:shadow-gray-800"
        src={codingVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold">
          
        </h1>
      </div>
          </div>
        </div>
      </div>
    </section>
  );
}
