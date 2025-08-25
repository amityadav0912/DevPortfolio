import { Github, Code, Mail } from "lucide-react";

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" }
];

const socialLinks = [
  {
    href: "https://github.com/amityadav0912",
    icon: <Github className="h-5 w-5" />,
    label: "GitHub"
  },
  {
    href: "https://leetcode.com/u/amit09yadav12/",
    icon: <Code className="h-5 w-5" />,
    label: "LeetCode"
  },
  {
    href: "mailto:amit09yadav12@gmail.com",
    icon: <Mail className="h-5 w-5" />,
    label: "Email"
  }
];

export default function Footer() {
  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-secondary dark:bg-black text-white py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" data-testid="footer-name">Amit Yadav</h3>
            <p className="text-gray-300 dark:text-gray-400 mb-4">
              Full Stack Developer passionate about creating innovative solutions 
              with modern web technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-200"
                  data-testid={`footer-social-${social.label.toLowerCase()}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(link.href)}
                  className="block text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-200"
                  data-testid={`footer-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300 dark:text-gray-400">
              <p data-testid="footer-email">
                <Mail className="inline h-4 w-4 mr-2" />
                amit09yadav12@gmail.com
              </p>
              <p data-testid="footer-phone">
                <span className="inline-block w-4 mr-2 text-center">📞</span>
                +91 8306334469
              </p>
              <p data-testid="footer-location">
                <span className="inline-block w-4 mr-2 text-center">📍</span>
                Bengaluru, Karnataka
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 dark:text-gray-400" data-testid="footer-copyright">
            &copy; 2024 Amit Yadav. All rights reserved. Built with ❤️ and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
