'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { mockGoals } from '@/lib/mock-data'
import { ArrowRight, Flame, BookOpen, Dumbbell, Languages, Brain, Briefcase } from 'lucide-react'

const categoryIcons = {
  mindfulness: Brain,
  reading: BookOpen,
  fitness: Dumbbell,
  language: Languages,
  career: Briefcase,
  health: Flame,
}

const categoryColors = {
  mindfulness: 'text-chart-1 bg-chart-1/10',
  reading: 'text-chart-2 bg-chart-2/10',
  fitness: 'text-chart-3 bg-chart-3/10',
  language: 'text-chart-4 bg-chart-4/10',
  career: 'text-chart-5 bg-chart-5/10',
  health: 'text-primary bg-primary/10',
}

export function GoalsOverview() {
  return (
    <Card className="border-border/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold">Daily Goals Progress</CardTitle>
        <Button variant="ghost" size="sm" className="text-muted-foreground" asChild>
          <Link href="/goals">
            View all
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockGoals.slice(0, 4).map((goal) => {
          const Icon = categoryIcons[goal.category]
          const colorClass = categoryColors[goal.category]
          const progressPercent = Math.round((goal.progress / goal.target) * 100)
          
          return (
            <div key={goal.id} className="group">
              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                <div className={`w-10 h-10 rounded-xl ${colorClass} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="h-5 w-5" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-foreground truncate">{goal.title}</h4>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {goal.streak > 0 && (
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Flame className="h-3 w-3 text-orange-500" />
                          {goal.streak}
                        </span>
                      )}
                      <span className="text-sm font-medium text-foreground">
                        {goal.progress}/{goal.target} {goal.unit}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={progressPercent} className="h-2 flex-1" />
                    <span className="text-xs text-muted-foreground w-12 text-right">
                      {progressPercent}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
