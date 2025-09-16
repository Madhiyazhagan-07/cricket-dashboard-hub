import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, TrendingUp, Users, Calendar, Play, Eye } from "lucide-react"
import heroImage from "@/assets/cricket-hero.jpg"

const Index = () => {
  const stats = [
    { title: "Live Matches", value: "12", icon: Play, color: "text-success" },
    { title: "Total Teams", value: "248", icon: Users, color: "text-info" },
    { title: "Tournaments", value: "15", icon: Trophy, color: "text-warning" },
    { title: "Match Views", value: "2.4M", icon: Eye, color: "text-primary" },
  ]

  const recentMatches = [
    { teams: "India vs Australia", status: "Live", score: "245/4", overs: "45.2" },
    { teams: "England vs Pakistan", status: "Finished", score: "298/7", overs: "50.0" },
    { teams: "South Africa vs NZ", status: "Upcoming", score: "vs", overs: "16:00" },
  ]

  const blogPosts = [
    { title: "World Cup 2024 Analysis", date: "2 days ago", views: "12.5k" },
    { title: "Top Batsmen Performance", date: "1 week ago", views: "8.2k" },
    { title: "Cricket Technology Trends", date: "2 weeks ago", views: "15.3k" },
  ]

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative h-96 rounded-lg overflow-hidden">
        <img 
          src={heroImage} 
          alt="Cricket Stadium" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
          <div className="container px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Welcome to CricketHub
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Your ultimate cricket dashboard for live scores, stats, and insights
            </p>
            <Button size="lg" variant="secondary">
              <Play className="mr-2 h-5 w-5" />
              Watch Live Matches
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="mr-1 h-3 w-3" />
                +12% from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Matches */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              Recent Matches
            </CardTitle>
            <CardDescription>Live and recent cricket matches</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentMatches.map((match, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-semibold">{match.teams}</h4>
                  <p className="text-sm text-muted-foreground">
                    {match.score} • {match.overs}
                  </p>
                </div>
                <Badge 
                  variant={match.status === 'Live' ? 'default' : 
                          match.status === 'Finished' ? 'secondary' : 'outline'}
                >
                  {match.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Latest Blog Posts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Latest Blog Posts
            </CardTitle>
            <CardDescription>Recent articles and analysis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {blogPosts.map((post, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent cursor-pointer transition-colors">
                <div>
                  <h4 className="font-semibold">{post.title}</h4>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </div>
                <div className="text-sm text-muted-foreground flex items-center">
                  <Eye className="mr-1 h-3 w-3" />
                  {post.views}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Index