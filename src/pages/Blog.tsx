import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"
import { Calendar, Clock, Eye, Search, Tag } from "lucide-react"

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      slug: "world-cup-2024-analysis",
      title: "World Cup 2024: Complete Analysis and Predictions",
      excerpt: "A comprehensive look at the upcoming Cricket World Cup 2024, team analysis, key players to watch, and expert predictions for the tournament.",
      author: "John Cricket",
      date: "March 15, 2024",
      readTime: "8 min read",
      views: "12.5k",
      image: "/api/placeholder/400/250",
      tags: ["World Cup", "Analysis", "Predictions"],
      featured: true
    },
    {
      id: 2,
      slug: "top-batsmen-performance",
      title: "Top 10 Batsmen Performance in 2024",
      excerpt: "Analyzing the best batting performances of 2024, including runs scored, averages, and impact on team victories across all formats.",
      author: "Sarah Stats",
      date: "March 12, 2024",
      readTime: "6 min read",
      views: "8.2k",
      image: "/api/placeholder/400/250",
      tags: ["Statistics", "Batsmen", "Performance"],
      featured: false
    },
    {
      id: 3,
      slug: "cricket-technology-trends",
      title: "How Technology is Revolutionizing Cricket",
      excerpt: "From DRS to AI analytics, explore how modern technology is changing the way cricket is played, viewed, and analyzed.",
      author: "Tech Cricket",
      date: "March 10, 2024",
      readTime: "5 min read",
      views: "15.3k",
      image: "/api/placeholder/400/250",
      tags: ["Technology", "Innovation", "Analytics"],
      featured: false
    },
    {
      id: 4,
      slug: "ipl-season-preview",
      title: "IPL 2024 Season Preview: Teams and Predictions",
      excerpt: "Complete preview of IPL 2024 season with team analysis, new signings, and predictions for the most exciting T20 league.",
      author: "IPL Expert",
      date: "March 8, 2024",
      readTime: "10 min read",
      views: "22.1k",
      image: "/api/placeholder/400/250",
      tags: ["IPL", "T20", "Preview"],
      featured: true
    },
    {
      id: 5,
      slug: "bowling-techniques-masterclass",
      title: "Modern Bowling Techniques: A Masterclass",
      excerpt: "Learn about the latest bowling techniques being used by professional cricketers, including variations and strategic applications.",
      author: "Coach Mike",
      date: "March 5, 2024",
      readTime: "7 min read",
      views: "6.8k",
      image: "/api/placeholder/400/250",
      tags: ["Bowling", "Techniques", "Coaching"],
      featured: false
    },
    {
      id: 6,
      slug: "cricket-fitness-training",
      title: "Cricket Fitness: Training Like a Professional",
      excerpt: "Discover the fitness routines and training methods used by professional cricketers to maintain peak performance throughout the season.",
      author: "Fitness Pro",
      date: "March 3, 2024",
      readTime: "9 min read",
      views: "11.2k",
      image: "/api/placeholder/400/250",
      tags: ["Fitness", "Training", "Professional"],
      featured: false
    }
  ]

  const categories = [
    "All Posts", "Analysis", "Statistics", "Technology", "IPL", 
    "World Cup", "Training", "News", "Reviews"
  ]

  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-foreground">Cricket Blog</h1>
          <p className="text-muted-foreground">
            Latest insights, analysis, and news from the world of cricket
          </p>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search articles..." className="pl-10 w-full md:w-80" />
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <Badge 
            key={index}
            variant={category === "All Posts" ? "default" : "secondary"}
            className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Featured Posts */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Featured Articles</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted relative">
                <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {post.views}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link to={`/blog/${post.slug}`}>
                  <Button variant="outline" className="w-full">Read More</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Recent Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted" />
              <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>{post.author}</span>
                  <span className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    {post.views}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link to={`/blog/${post.slug}`}>
                  <Button variant="outline" size="sm" className="w-full">Read Article</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog