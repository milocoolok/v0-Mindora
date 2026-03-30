'use client'

import { useState } from 'react'
import { TopNavbar } from '@/components/top-navbar'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { mockBlogPosts } from '@/lib/mock-data'
import type { BlogCategory } from '@/lib/types'
import { 
  Search, Clock, ArrowRight, TrendingUp, Heart, 
  Users, Briefcase, BookOpen, Sparkles
} from 'lucide-react'

const categoryIcons: Record<BlogCategory, typeof Sparkles> = {
  'self-improvement': TrendingUp,
  'self-love': Heart,
  'relationships': Users,
  'career': Briefcase,
}

const categoryColors: Record<BlogCategory, string> = {
  'self-improvement': 'bg-chart-1/10 text-chart-1 border-chart-1/20',
  'self-love': 'bg-chart-2/10 text-chart-2 border-chart-2/20',
  'relationships': 'bg-chart-3/10 text-chart-3 border-chart-3/20',
  'career': 'bg-chart-5/10 text-chart-5 border-chart-5/20',
}

const categoryLabels: Record<BlogCategory, string> = {
  'self-improvement': 'Self Improvement',
  'self-love': 'Self Love',
  'relationships': 'Relationships',
  'career': 'Career',
}

const categoryBackgrounds: Record<BlogCategory, string> = {
  'self-improvement': 'from-chart-1/20 to-chart-1/5',
  'self-love': 'from-chart-2/20 to-chart-2/5',
  'relationships': 'from-chart-3/20 to-chart-3/5',
  'career': 'from-chart-5/20 to-chart-5/5',
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = mockBlogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = mockBlogPosts[0]

  return (
    <>
      <TopNavbar title="Blog" subtitle="Insights for your journey" />
      <main className="flex-1 overflow-auto">
        <div className="container max-w-6xl mx-auto p-4 md:p-6 space-y-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-1">Explore Articles</h1>
              <p className="text-muted-foreground">Curated content to support your growth</p>
            </div>
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 rounded-xl bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              className="rounded-xl"
              onClick={() => setSelectedCategory('all')}
            >
              <BookOpen className="h-4 w-4 mr-1" />
              All Topics
            </Button>
            {(Object.keys(categoryLabels) as BlogCategory[]).map((cat) => {
              const Icon = categoryIcons[cat]
              return (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? 'default' : 'outline'}
                  size="sm"
                  className="rounded-xl"
                  onClick={() => setSelectedCategory(cat)}
                >
                  <Icon className="h-4 w-4 mr-1" />
                  {categoryLabels[cat]}
                </Button>
              )
            })}
          </div>

          {/* Featured Post */}
          {selectedCategory === 'all' && !searchQuery && (
            <Card className={`border-0 bg-gradient-to-br ${categoryBackgrounds[featuredPost.category]} overflow-hidden`}>
              <CardContent className="p-6 md:p-8">
                <Badge className={categoryColors[featuredPost.category]}>
                  Featured
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-4 mb-3">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6">
                  <Button className="rounded-xl">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime} min read
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => {
              const Icon = categoryIcons[post.category]
              return (
                <Card key={post.id} className="group border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  {/* Image placeholder with gradient */}
                  <div className={`h-40 bg-gradient-to-br ${categoryBackgrounds[post.category]} flex items-center justify-center`}>
                    <div className="w-16 h-16 rounded-2xl bg-card/50 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="h-8 w-8 text-foreground/50" />
                    </div>
                  </div>
                  
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className={categoryColors[post.category]}>
                        {categoryLabels[post.category]}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime} min
                      </span>
                    </div>
                    
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <Button variant="ghost" size="sm" className="rounded-xl -ml-2 text-primary">
                      Read more
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-muted flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}

          {/* Newsletter CTA */}
          <Card className="border-0 bg-gradient-to-br from-primary/90 to-primary overflow-hidden">
            <CardContent className="p-6 md:p-8 relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/4" />
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">
                    Get weekly insights
                  </h3>
                  <p className="text-primary-foreground/80">
                    Subscribe to receive curated self-improvement content every week.
                  </p>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-primary-foreground/20 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 rounded-xl"
                  />
                  <Button variant="secondary" className="rounded-xl whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  )
}
