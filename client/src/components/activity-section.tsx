import { Calendar, TrendingUp, GitBranch, Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ActivitySection() {
  return (
    <section id="activity" className="py-20 bg-white dark:bg-black" data-testid="activity-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
            Coding Activity
          </h2>
          <p className="text-lg text-muted dark:text-gray-300 max-w-2xl mx-auto">
            Recent contributions and coding activity across platforms
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* GitHub Activity */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gray-900 dark:bg-gray-700 text-white p-3 rounded-lg">
                  <GitBranch className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary dark:text-white">
                    GitHub Contributions
                  </h3>
                  <p className="text-sm text-muted dark:text-gray-400">
                    Last 3 months activity
                  </p>
                </div>
              </div>
              
              {/* GitHub Contribution Graph */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
                <img 
                  src="https://github-readme-streak-stats.herokuapp.com/?user=amityadav0912&theme=default&hide_border=true" 
                  alt="GitHub Streak Stats for amityadav0912"
                  className="w-full h-auto rounded mb-3"
                  data-testid="github-streak"
                />
                <img 
                  src="https://github-readme-stats.vercel.app/api?username=amityadav0912&show_icons=true&theme=default&hide_border=true&include_all_commits=true&count_private=true" 
                  alt="GitHub Stats for amityadav0912"
                  className="w-full h-auto rounded"
                  data-testid="github-stats"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-1" data-testid="github-repos">
                    <img 
                      src="https://github-readme-stats.vercel.app/api/top-langs/?username=amityadav0912&layout=compact&theme=default&hide_border=true" 
                      alt="Top Languages"
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary mb-2">GitHub Activity</div>
                    <div className="text-sm text-muted dark:text-gray-400">
                      <div className="mb-1">📊 Real-time stats</div>
                      <div className="mb-1">🔥 Active contributor</div>
                      <div>⚡ Open source projects</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <a
                  href="https://github.com/amityadav0912"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-200 text-sm font-medium"
                  data-testid="link-github-profile"
                >
                  <GitBranch className="h-4 w-4 mr-2" />
                  View GitHub Profile
                </a>
              </div>
            </CardContent>
          </Card>
          
          {/* LeetCode Activity */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-orange-500 text-white p-3 rounded-lg">
                  <Code2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary dark:text-white">
                    LeetCode Progress
                  </h3>
                  <p className="text-sm text-muted dark:text-gray-400">
                    Problem solving stats
                  </p>
                </div>
              </div>
              
              {/* LeetCode Stats */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
                <img 
                  src="https://leetcard.jacoblin.cool/amit09yadav12?theme=light&font=Nunito&ext=heatmap" 
                  alt="LeetCode Stats for amit09yadav12"
                  className="w-full h-auto rounded"
                  data-testid="leetcode-card"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center mb-6">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-1" data-testid="leetcode-problems">
                    300+
                  </div>
                  <div className="text-sm text-muted dark:text-gray-400">Problems Solved</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-1" data-testid="leetcode-contests">
                    50+
                  </div>
                  <div className="text-sm text-muted dark:text-gray-400">Contests</div>
                </div>
              </div>
              
              <div>
                <a
                  href="https://leetcode.com/u/amit09yadav12/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-200 text-sm font-medium"
                  data-testid="link-leetcode-profile"
                >
                  <Code2 className="h-4 w-4 mr-2" />
                  View LeetCode Profile
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Recent Activity Timeline */}
        <Card className="mt-12 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 border-indigo-100 dark:border-gray-600">
          <CardContent className="p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-indigo-500 text-white p-3 rounded-lg">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary dark:text-white">
                  Recent Highlights
                </h3>
                <p className="text-sm text-muted dark:text-gray-400">
                  Last 30 days activity
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <img 
                  src="https://github-readme-activity-graph.vercel.app/graph?username=amityadav0912&theme=react-dark&hide_border=true&area=true" 
                  alt="GitHub Activity Graph"
                  className="w-full h-auto rounded mb-4"
                  data-testid="github-activity-graph"
                />
                <div className="text-sm text-muted dark:text-gray-300">GitHub Activity Graph</div>
              </div>
              
              <div className="text-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary mb-1">300+</div>
                    <div className="text-xs text-muted dark:text-gray-400">LeetCode Problems</div>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary mb-1">50+</div>
                    <div className="text-xs text-muted dark:text-gray-400">Contests Joined</div>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary mb-1">5⭐</div>
                    <div className="text-xs text-muted dark:text-gray-400">HackerRank Java</div>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary mb-1">8.75</div>
                    <div className="text-xs text-muted dark:text-gray-400">CGPA</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}