import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useParams, Link } from "react-router-dom"
import { Calendar, Clock, Eye, User, ArrowLeft, Share2, Heart, MessageCircle, Tag } from "lucide-react"

const BlogPost = () => {
  const { slug } = useParams()

  // Sample blog post data - in a real app, this would be fetched based on the slug
  const post = {
    title: "World Cup 2024: Complete Analysis and Predictions",
    author: "John Cricket",
    date: "March 15, 2024",
    readTime: "8 min read",
    views: "12.5k",
    likes: "1.2k",
    comments: "84",
    tags: ["World Cup", "Analysis", "Predictions", "Cricket"],
    content: `
      <h2>Introduction</h2>
      <p>The Cricket World Cup 2024 is approaching fast, and cricket fans around the world are buzzing with excitement. This comprehensive analysis will break down everything you need to know about the upcoming tournament, from team preparations to key players and expert predictions.</p>
      
      <h2>Tournament Format</h2>
      <p>The 2024 Cricket World Cup will feature 10 teams competing in a round-robin format, followed by semi-finals and the final. Each team will play every other team once in the group stage, making for a total of 45 group matches.</p>
      
      <h2>Key Teams to Watch</h2>
      <p>Several teams enter this tournament as strong contenders:</p>
      <ul>
        <li><strong>India:</strong> The defending champions with a strong batting lineup and experienced bowling attack.</li>
        <li><strong>Australia:</strong> Always a threat in World Cups with their aggressive approach and depth in both batting and bowling.</li>
        <li><strong>England:</strong> The 2019 champions looking to reclaim their title with their dynamic playing style.</li>
        <li><strong>Pakistan:</strong> Unpredictable but talented, capable of beating any team on their day.</li>
      </ul>
      
      <h2>Players to Watch</h2>
      <p>Every World Cup has its heroes, and 2024 will be no different. Keep an eye on these standout performers:</p>
      <ul>
        <li><strong>Virat Kohli (India):</strong> The master chaser with an incredible record in ICC tournaments.</li>
        <li><strong>Babar Azam (Pakistan):</strong> Elegant stroke-maker and Pakistan's captain leading from the front.</li>
        <li><strong>Jos Buttler (England):</strong> Dynamic wicket-keeper batsman who can change the game in a few overs.</li>
        <li><strong>Pat Cummins (Australia):</strong> World-class fast bowler and Australia's captain.</li>
      </ul>
      
      <h2>Venue Analysis</h2>
      <p>The tournament will be held across multiple venues, each with its own characteristics that could influence match outcomes. The pitches are expected to offer good balance between bat and ball, with some venues favoring pace bowlers while others might assist spinners.</p>
      
      <h2>Weather Factors</h2>
      <p>Weather will play a crucial role in the tournament. The monsoon season could affect several matches, making the Duckworth-Lewis method a potential game-changer in rain-affected matches.</p>
      
      <h2>Predictions</h2>
      <p>Based on current form, team depth, and historical performance in ICC events, here are our tournament predictions:</p>
      <ul>
        <li><strong>Winner:</strong> India - Strong home advantage and balanced squad</li>
        <li><strong>Runner-up:</strong> Australia - Consistent performers in big tournaments</li>
        <li><strong>Semi-finalists:</strong> England and Pakistan</li>
        <li><strong>Dark Horse:</strong> New Zealand - Always punches above their weight</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The 2024 Cricket World Cup promises to be one of the most competitive tournaments in recent memory. With talented teams, exciting players, and the unpredictable nature of cricket, fans are in for a treat. Stay tuned to CricketHub for live updates, match analysis, and comprehensive coverage throughout the tournament.</p>
    `
  }

  const relatedPosts = [
    { title: "IPL 2024 Season Preview", slug: "ipl-season-preview" },
    { title: "Top 10 Batsmen Performance", slug: "top-batsmen-performance" },
    { title: "Cricket Technology Trends", slug: "cricket-technology-trends" }
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Back Button */}
      <Link to="/blog">
        <Button variant="outline" size="sm">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>
      </Link>

      {/* Article Header */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span>{post.views} views</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="aspect-video bg-muted rounded-lg" />

        {/* Social Actions */}
        <div className="flex items-center justify-between py-4 border-y">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Heart className="mr-2 h-4 w-4" />
              {post.likes}
            </Button>
            <Button variant="outline" size="sm">
              <MessageCircle className="mr-2 h-4 w-4" />
              {post.comments}
            </Button>
          </div>
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      {/* Article Content */}
      <Card>
        <CardContent className="prose prose-lg max-w-none p-8">
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="space-y-6 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4 [&>p]:mb-4 [&>ul]:mb-4 [&>ul]:pl-6 [&>li]:mb-2"
          />
        </CardContent>
      </Card>

      {/* Author Bio */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">About {post.author}</h3>
              <p className="text-muted-foreground mb-4">
                {post.author} is a senior cricket analyst with over 10 years of experience covering 
                international cricket. He specializes in statistical analysis and match predictions, 
                bringing deep insights to cricket fans worldwide.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Follow</Button>
                <Button variant="outline" size="sm">More Articles</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Related Posts */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPosts.map((relatedPost, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted" />
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 line-clamp-2">{relatedPost.title}</h3>
                <Link to={`/blog/${relatedPost.slug}`}>
                  <Button variant="outline" size="sm" className="w-full">
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-8" />

      {/* Newsletter Signup */}
      <Card>
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter for the latest cricket news and analysis
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border rounded-md"
            />
            <Button>Subscribe</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default BlogPost