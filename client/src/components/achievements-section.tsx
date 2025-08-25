import { Code, Star, GraduationCap, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    icon: <Code className="h-5 w-5" />,
    title: "200+ Problems",
    subtitle: "Solved on LeetCode",
    description: "Active in 50+ Contests",
    gradient: "from-purple-50 to-indigo-50 dark:from-purple-900 dark:to-indigo-900",
    border: "border-purple-100 dark:border-purple-800",
    iconBg: "bg-purple-500"
  },
  {
    icon: <Star className="h-5 w-5" />,
    title: "5⭐ Java Badge",
    subtitle: "HackerRank Certified",
    description: "Java Programming",
    gradient: "from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900",
    border: "border-green-100 dark:border-green-800",
    iconBg: "bg-green-500"
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "TFWS Scholarship",
    subtitle: "Bachelor's Degree",
    description: "Academic Excellence",
    gradient: "from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900",
    border: "border-blue-100 dark:border-blue-800",
    iconBg: "bg-blue-500"
  },
  {
    icon: <Trophy className="h-5 w-5" />,
    title: "Runner-up",
    subtitle: "IEEE Hack OverFlow",
    description: "Manipal University",
    gradient: "from-orange-50 to-red-50 dark:from-orange-900 dark:to-red-900",
    border: "border-orange-100 dark:border-orange-800",
    iconBg: "bg-orange-500"
  }
];

const stats = [
  { value: "200+", label: "Problems Solved", description: "Across multiple platforms" },
  { value: "8.75", label: "CGPA", description: "B.Tech Information Technology" },
  { value: "50+", label: "Contests Participated", description: "Competitive Programming" }
];

export default function AchievementsSection() {
  return (
    <section className="py-20 bg-white dark:bg-black" data-testid="achievements-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
            Achievements & Certifications
          </h2>
          <p className="text-lg text-muted dark:text-gray-300 max-w-2xl mx-auto">
            Recognition and certifications that showcase my expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className={`bg-gradient-to-br ${achievement.gradient} ${achievement.border} text-center hover:shadow-lg transition-shadow duration-300`}>
              <CardContent className="p-6">
                <div className={`${achievement.iconBg} text-white p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4`}>
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-bold text-secondary dark:text-white mb-2" data-testid={`achievement-title-${index}`}>
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted dark:text-gray-300 mb-2" data-testid={`achievement-subtitle-${index}`}>
                  {achievement.subtitle}
                </p>
                <p className="text-xs text-primary dark:text-primary" data-testid={`achievement-description-${index}`}>
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Stats */}
        <Card className="mt-16 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 border-indigo-100 dark:border-gray-600">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-primary mb-2" data-testid={`stat-value-${index}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted dark:text-gray-300" data-testid={`stat-label-${index}`}>
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted dark:text-gray-400 mt-1" data-testid={`stat-description-${index}`}>
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
