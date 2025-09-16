import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Target, Award } from "lucide-react"

const About = () => {
  const features = [
    {
      icon: Trophy,
      title: "Live Match Coverage",
      description: "Real-time scores and commentary for cricket matches worldwide"
    },
    {
      icon: Users,
      title: "Team Analytics",
      description: "Comprehensive statistics and performance analysis for all teams"
    },
    {
      icon: Target,
      title: "Player Insights",
      description: "Detailed player profiles with career statistics and performance metrics"
    },
    {
      icon: Award,
      title: "Tournament Hub",
      description: "Complete coverage of all major cricket tournaments and leagues"
    }
  ]

  const achievements = [
    { number: "2M+", label: "Active Users" },
    { number: "500+", label: "Matches Covered" },
    { number: "15+", label: "Countries" },
    { number: "99.9%", label: "Uptime" }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">About CricketHub</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          The premier destination for cricket enthusiasts worldwide. We provide comprehensive 
          coverage, real-time updates, and in-depth analysis of the game we all love.
        </p>
      </div>

      {/* Mission Statement */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Our Mission</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg text-muted-foreground">
            To connect cricket fans around the world with the latest news, live scores, 
            comprehensive statistics, and expert analysis. We strive to be the most reliable 
            and comprehensive cricket platform for fans, players, and professionals alike.
          </p>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <feature.icon className="h-6 w-6 text-primary" />
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Our Achievements</CardTitle>
          <CardDescription className="text-center">
            Proud milestones in our journey to serve the cricket community
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Team Values */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Our Values</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Accuracy</Badge>
            <Badge variant="secondary">Real-time Updates</Badge>
            <Badge variant="secondary">User Experience</Badge>
            <Badge variant="secondary">Global Coverage</Badge>
            <Badge variant="secondary">Community</Badge>
            <Badge variant="secondary">Innovation</Badge>
          </div>
          <p className="text-muted-foreground">
            These values guide everything we do at CricketHub. From ensuring accurate 
            live scores to fostering a vibrant cricket community, we're committed to 
            excellence in every aspect of our platform.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default About