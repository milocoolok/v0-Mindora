'use client'

import { useState } from 'react'
import { TopNavbar } from '@/components/top-navbar'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { mockCareerPaths } from '@/lib/mock-data'
import { 
  Compass, ArrowRight, BookOpen, Video, FileText, GraduationCap,
  CheckCircle2, Star, Target, TrendingUp, Sparkles
} from 'lucide-react'

const resourceIcons = {
  course: GraduationCap,
  book: BookOpen,
  article: FileText,
  video: Video,
}

const skillProgress: Record<string, number> = {
  'User Research': 75,
  'Wireframing': 60,
  'Prototyping': 45,
  'Visual Design': 80,
  'Figma': 70,
  'Strategic Thinking': 55,
  'Data Analysis': 40,
  'Communication': 85,
  'Agile': 65,
  'Roadmapping': 50,
  'Python': 30,
  'Machine Learning': 20,
  'Statistics': 45,
  'SQL': 60,
  'Data Visualization': 55,
}

export default function CareerPage() {
  const [selectedPath, setSelectedPath] = useState(mockCareerPaths[0])

  return (
    <>
      <TopNavbar title="Career" subtitle="Find your professional path" />
      <main className="flex-1 overflow-auto">
        <div className="container max-w-6xl mx-auto p-4 md:p-6 space-y-6">
          {/* Header Card */}
          <Card className="border-0 bg-gradient-to-br from-primary/90 to-primary overflow-hidden">
            <CardContent className="p-6 md:p-8 relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/4" />
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
                  <Compass className="h-10 w-10 text-primary-foreground" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold text-primary-foreground mb-2">
                    Discover Your Career Path
                  </h2>
                  <p className="text-primary-foreground/80 max-w-lg">
                    Explore career options that align with your personality, skills, and interests. Build a roadmap to your dream job.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Career Paths */}
          <div className="grid md:grid-cols-3 gap-4">
            {mockCareerPaths.map((path) => {
              const isSelected = selectedPath.id === path.id
              return (
                <button
                  key={path.id}
                  onClick={() => setSelectedPath(path)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                    isSelected 
                      ? 'bg-primary/10 border-primary shadow-lg' 
                      : 'bg-card border-border/50 hover:border-primary/30 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-foreground">{path.title}</h3>
                    {isSelected && <CheckCircle2 className="h-5 w-5 text-primary" />}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{path.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {path.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {path.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{path.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Selected Path Details */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Skills Roadmap */}
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Skills Roadmap</CardTitle>
                    <CardDescription>Your progress towards {selectedPath.title}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedPath.skills.map((skill) => {
                  const progress = skillProgress[skill] || Math.floor(Math.random() * 80) + 10
                  return (
                    <div key={skill} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">{skill}</span>
                        <div className="flex items-center gap-2">
                          {progress >= 70 && <Star className="h-3 w-3 text-chart-5 fill-chart-5" />}
                          <span className="text-sm text-muted-foreground">{progress}%</span>
                        </div>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                  )
                })}
                
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-foreground">Overall Readiness</span>
                    <span className="text-lg font-bold text-primary">
                      {Math.round(
                        selectedPath.skills.reduce((acc, skill) => 
                          acc + (skillProgress[skill] || 50), 0
                        ) / selectedPath.skills.length
                      )}%
                    </span>
                  </div>
                  <Progress 
                    value={Math.round(
                      selectedPath.skills.reduce((acc, skill) => 
                        acc + (skillProgress[skill] || 50), 0
                      ) / selectedPath.skills.length
                    )} 
                    className="h-3" 
                  />
                </div>
              </CardContent>
            </Card>

            {/* Recommended Resources */}
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-chart-3/10 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-chart-3" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Recommended Resources</CardTitle>
                    <CardDescription>Curated learning materials for you</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedPath.resources.map((resource) => {
                  const Icon = resourceIcons[resource.type]
                  return (
                    <div
                      key={resource.id}
                      className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-card flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground mb-1">{resource.title}</h4>
                        <Badge variant="secondary" className="text-xs capitalize">
                          {resource.type}
                        </Badge>
                      </div>
                      <Button variant="ghost" size="sm" className="rounded-xl flex-shrink-0">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </div>

          {/* AI Career Suggestion */}
          <Card className="border-border/50 bg-gradient-to-br from-chart-1/5 to-chart-2/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    AI Career Insight
                    <Badge variant="secondary" className="text-xs">Personalized</Badge>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Based on your INFJ personality type and current skill set, <strong>{selectedPath.title}</strong> is a great match for you. Your natural empathy and creative problem-solving abilities are highly valued in this field. Focus on building your technical skills while leveraging your strength in understanding user needs.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      High growth field
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 text-chart-5" />
                      92% personality match
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  )
}
