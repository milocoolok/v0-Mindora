'use client'

import { useState } from 'react'
import { TopNavbar } from '@/components/top-navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FieldGroup, Field, FieldLabel } from '@/components/ui/field'
import { mockGoals } from '@/lib/mock-data'
import type { Goal, GoalCategory } from '@/lib/types'
import { 
  Plus, Flame, BookOpen, Dumbbell, Languages, Brain, Briefcase, 
  Heart, Check, Pencil, Trash2, TrendingUp, Calendar, Target
} from 'lucide-react'

const categoryIcons: Record<GoalCategory, typeof Brain> = {
  mindfulness: Brain,
  reading: BookOpen,
  fitness: Dumbbell,
  language: Languages,
  career: Briefcase,
  health: Heart,
}

const categoryColors: Record<GoalCategory, string> = {
  mindfulness: 'bg-chart-1/10 text-chart-1 border-chart-1/20',
  reading: 'bg-chart-2/10 text-chart-2 border-chart-2/20',
  fitness: 'bg-chart-3/10 text-chart-3 border-chart-3/20',
  language: 'bg-chart-4/10 text-chart-4 border-chart-4/20',
  career: 'bg-chart-5/10 text-chart-5 border-chart-5/20',
  health: 'bg-primary/10 text-primary border-primary/20',
}

const categoryLabels: Record<GoalCategory, string> = {
  mindfulness: 'Mindfulness',
  reading: 'Reading',
  fitness: 'Fitness',
  language: 'Language',
  career: 'Career',
  health: 'Health',
}

export default function GoalsPage() {
  const [goals, setGoals] = useState<Goal[]>(mockGoals)
  const [selectedCategory, setSelectedCategory] = useState<GoalCategory | 'all'>('all')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const filteredGoals = selectedCategory === 'all' 
    ? goals 
    : goals.filter(g => g.category === selectedCategory)

  const totalProgress = Math.round(
    goals.reduce((acc, goal) => acc + (goal.progress / goal.target) * 100, 0) / goals.length
  )

  const completedToday = goals.filter(g => (g.progress / g.target) >= 1).length

  const incrementGoal = (id: string) => {
    setGoals(prev => prev.map(goal => {
      if (goal.id === id && goal.progress < goal.target) {
        return { ...goal, progress: goal.progress + 1, lastUpdated: new Date() }
      }
      return goal
    }))
  }

  const deleteGoal = (id: string) => {
    setGoals(prev => prev.filter(goal => goal.id !== id))
  }

  return (
    <>
      <TopNavbar title="Goals" subtitle="Track your daily progress" />
      <main className="flex-1 overflow-auto">
        <div className="container max-w-6xl mx-auto p-4 md:p-6 space-y-6">
          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{goals.length}</p>
                    <p className="text-xs text-muted-foreground">Active Goals</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{completedToday}</p>
                    <p className="text-xs text-muted-foreground">Done Today</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <Flame className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">21</p>
                    <p className="text-xs text-muted-foreground">Best Streak</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-chart-3/10 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-chart-3" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{totalProgress}%</p>
                    <p className="text-xs text-muted-foreground">Overall</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters & Actions */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                size="sm"
                className="rounded-xl"
                onClick={() => setSelectedCategory('all')}
              >
                All
              </Button>
              {(Object.keys(categoryLabels) as GoalCategory[]).map((cat) => {
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
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="rounded-xl">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Goal
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Create New Goal</DialogTitle>
                </DialogHeader>
                <form onSubmit={(e) => {
                  e.preventDefault()
                  const formData = new FormData(e.currentTarget)
                  const newGoal: Goal = {
                    id: Date.now().toString(),
                    title: formData.get('title') as string,
                    category: formData.get('category') as GoalCategory,
                    progress: 0,
                    target: parseInt(formData.get('target') as string),
                    unit: formData.get('unit') as string,
                    streak: 0,
                    lastUpdated: new Date(),
                    createdAt: new Date(),
                  }
                  setGoals(prev => [...prev, newGoal])
                  setIsDialogOpen(false)
                }}>
                  <FieldGroup className="space-y-4">
                    <Field>
                      <FieldLabel>Goal Title</FieldLabel>
                      <Input name="title" placeholder="e.g., Morning meditation" required />
                    </Field>
                    <Field>
                      <FieldLabel>Category</FieldLabel>
                      <Select name="category" required defaultValue="mindfulness">
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {(Object.keys(categoryLabels) as GoalCategory[]).map((cat) => (
                            <SelectItem key={cat} value={cat}>
                              {categoryLabels[cat]}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                    <div className="grid grid-cols-2 gap-4">
                      <Field>
                        <FieldLabel>Target</FieldLabel>
                        <Input name="target" type="number" placeholder="30" required min="1" />
                      </Field>
                      <Field>
                        <FieldLabel>Unit</FieldLabel>
                        <Input name="unit" placeholder="minutes" required />
                      </Field>
                    </div>
                  </FieldGroup>
                  <div className="flex justify-end gap-2 mt-6">
                    <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">Create Goal</Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Goals List */}
          <div className="grid gap-4 md:grid-cols-2">
            {filteredGoals.map((goal) => {
              const Icon = categoryIcons[goal.category]
              const colorClass = categoryColors[goal.category]
              const progressPercent = Math.round((goal.progress / goal.target) * 100)
              const isComplete = progressPercent >= 100
              
              return (
                <Card key={goal.id} className={`border-border/50 transition-all hover:shadow-md ${isComplete ? 'bg-green-50/30' : ''}`}>
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl ${colorClass} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <h3 className="font-semibold text-foreground">{goal.title}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="secondary" className="text-xs">
                                {categoryLabels[goal.category]}
                              </Badge>
                              {goal.streak > 0 && (
                                <span className="flex items-center gap-1 text-xs text-orange-500">
                                  <Flame className="h-3 w-3" />
                                  {goal.streak} day streak
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Pencil className="h-4 w-4 text-muted-foreground" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8"
                              onClick={() => deleteGoal(goal.id)}
                            >
                              <Trash2 className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                              {goal.progress} / {goal.target} {goal.unit}
                            </span>
                            <span className="font-medium text-foreground">{progressPercent}%</span>
                          </div>
                          <Progress value={progressPercent} className="h-2" />
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            Updated today
                          </div>
                          <Button
                            size="sm"
                            variant={isComplete ? 'secondary' : 'default'}
                            className="rounded-xl"
                            disabled={isComplete}
                            onClick={() => incrementGoal(goal.id)}
                          >
                            {isComplete ? (
                              <>
                                <Check className="h-4 w-4 mr-1" />
                                Complete
                              </>
                            ) : (
                              <>
                                <Plus className="h-4 w-4 mr-1" />
                                Log Progress
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </main>
    </>
  )
}
