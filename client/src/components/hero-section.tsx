import { Github, Code, Mail, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@assets/My_Image_1756154326303.jpg";

export default function HeroSection() {
  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const offsetTop = contactSection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadCV = () => {
    // This would typically link to a PDF file
    window.open('#', '_blank');
  };

  return (
    <section 
      id="home" 
      className="pt-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-black dark:to-gray-800 min-h-screen flex items-center"
      data-testid="hero-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary dark:text-white leading-tight mb-6">
              Hi, I'm <span className="text-gradient">Amit Yadav</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted dark:text-gray-300 mb-6">
              Full Stack Developer & Problem Solver
            </h2>
            <p className="text-lg text-muted dark:text-gray-300 mb-8 leading-relaxed">
              Passionate about creating innovative web solutions with modern technologies. 
              Currently working at Accenture, building scalable applications and solving complex problems.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                onClick={handleContactClick}
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
                data-testid="button-contact"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={handleDownloadCV}
                className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
                data-testid="button-download-cv"
              >
                Download CV
              </Button>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://github.com/amityadav0912" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                data-testid="link-github"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://leetcode.com/u/amit09yadav12/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                data-testid="link-leetcode"
              >
                <Code className="h-6 w-6" />
              </a>
              <a 
                href="mailto:amit09yadav12@gmail.com"
                className="text-muted hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                data-testid="link-email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/amit-yadav-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in relative">
            <div className="relative">
              <img 
                src={profileImage} 
                alt="Amit Yadav - Full Stack Developer" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover dark:shadow-gray-800 max-w-md mx-auto"
                data-testid="hero-image"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl border dark:border-gray-700 animate-bounce-subtle">
                <div className="text-sm font-semibold text-secondary dark:text-white" data-testid="text-problems-solved">
                  300+ Problems Solved
                </div>
                <div className="text-xs text-muted dark:text-gray-400">on LeetCode</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <ArrowDown className="h-6 w-6 mx-auto text-muted animate-bounce" />
        </div>
      </div>
    </section>
  );
}
