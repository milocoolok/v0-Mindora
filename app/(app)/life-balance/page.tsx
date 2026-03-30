'use client'

import { useState } from 'react'
import { TopNavbar } from '@/components/top-navbar'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { mockLifeAreas } from '@/lib/mock-data'
import { 
  Heart, Briefcase, Users, BookOpen, Brain, Wallet,
  TrendingUp, TrendingDown, Minus, Save, RotateCcw
} from 'lucide-react'

const areaIcons = {
  heart: Heart,
  briefcase: Briefcase,
  users: Users,
  book: BookOpen,
  brain: Brain,
  wallet: Wallet,
}

const areaColors = [
  'rgb(139, 92, 246)', // primary purple
  'rgb(244, 114, 182)', // pink
  'rgb(59, 130, 246)', // blue
  'rgb(34, 197, 94)', // green
  'rgb(251, 191, 36)', // yellow
  'rgb(249, 115, 22)', // orange
]

const areaDescriptions: Record<string, string> = {
  Health: 'Physical wellbeing, exercise, nutrition, and sleep quality.',
  Career: 'Professional growth, job satisfaction, and work fulfillment.',
  Relationships: 'Quality connections with family, friends, and loved ones.',
  Learning: 'Personal development, new skills, and continuous education.',
  'Mental Health': 'Emotional wellbeing, stress management, and mindfulness.',
  Finance: 'Financial security, savings, and money management.',
}

export default function LifeBalancePage() {
  const [scores, setScores] = useState<Record<string, number>>(
    Object.fromEntries(mockLifeAreas.map(area => [area.id, area.score]))
  )
  const [hasChanges, setHasChanges] = useState(false)

  const updateScore = (id: string, value: number) => {
    setScores(prev => ({ ...prev, [id]: value }))
    setHasChanges(true)
  }

  const resetScores = () => {
    setScores(Object.fromEntries(mockLifeAreas.map(area => [area.id, area.score])))
    setHasChanges(false)
  }

  const averageScore = Math.round(
    Object.values(scores).reduce((a, b) => a + b, 0) / Object.values(scores).length
  )

  const getScoreTrend = (score: number, original: number) => {
    if (score > original) return { icon: TrendingUp, color: 'text-green-500' }
    if (score < original) return { icon: TrendingDown, color: 'text-red-500' }
    return { icon: Minus, color: 'text-muted-foreground' }
  }

  // Calculate wheel coordinates
  const numAreas = mockLifeAreas.length
  const angleStep = (2 * Math.PI) / numAreas
  const centerX = 150
  const centerY = 150
  const maxRadius = 120

  return (
    <>
      <TopNavbar title="Life Balance" subtitle="Visualize your life harmony" />
      <main className="flex-1 overflow-auto">
        <div className="container max-w-6xl mx-auto p-4 md:p-6 space-y-6">
          {/* Overview Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="border-border/50">
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-1">Overall Balance</p>
                <p className="text-3xl font-bold text-foreground">{averageScore}%</p>
              </CardContent>
            </Card>
            <Card className="border-border/50">
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-1">Strongest Area</p>
                <p className="text-lg font-semibold text-foreground">
                  {mockLifeAreas.reduce((max, area) => scores[area.id] > scores[max.id] ? area : max).name}
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50">
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-1">Needs Attention</p>
                <p className="text-lg font-semibold text-foreground">
                  {mockLifeAreas.reduce((min, area) => scores[area.id] < scores[min.id] ? area : min).name}
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50">
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-1">Areas Tracked</p>
                <p className="text-3xl font-bold text-foreground">{numAreas}</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Wheel of Life */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Wheel of Life</CardTitle>
                <CardDescription>A visual representation of your life balance</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <div className="relative">
                  <svg width="300" height="300" className="transform">
                    {/* Background circles */}
                    {[25, 50, 75, 100].map((level) => (
                      <circle
                        key={level}
                        cx={centerX}
                        cy={centerY}
                        r={(level / 100) * maxRadius}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-border"
                        strokeDasharray="4 4"
                      />
                    ))}

                    {/* Radial lines */}
                    {mockLifeAreas.map((_, index) => {
                      const angle = index * angleStep - Math.PI / 2
                      const x = centerX + maxRadius * Math.cos(angle)
                      const y = centerY + maxRadius * Math.sin(angle)
                      return (
                        <line
                          key={index}
                          x1={centerX}
                          y1={centerY}
                          x2={x}
                          y2={y}
                          stroke="currentColor"
                          strokeWidth="1"
                          className="text-border"
                        />
                      )
                    })}

                    {/* Filled area */}
                    <polygon
                      points={mockLifeAreas.map((area, index) => {
                        const angle = index * angleStep - Math.PI / 2
                        const radius = (scores[area.id] / 100) * maxRadius
                        const x = centerX + radius * Math.cos(angle)
                        const y = centerY + radius * Math.sin(angle)
                        return `${x},${y}`
                      }).join(' ')}
                      fill="url(#wheelGradient)"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary"
                      opacity="0.8"
                    />

                    {/* Gradient definition */}
                    <defs>
                      <linearGradient id="wheelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgb(139, 92, 246)" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="rgb(244, 114, 182)" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>

                    {/* Data points */}
                    {mockLifeAreas.map((area, index) => {
                      const angle = index * angleStep - Math.PI / 2
                      const radius = (scores[area.id] / 100) * maxRadius
                      const x = centerX + radius * Math.cos(angle)
                      const y = centerY + radius * Math.sin(angle)
                      return (
                        <circle
                          key={area.id}
                          cx={x}
                          cy={y}
                          r="6"
                          fill={areaColors[index]}
                          stroke="white"
                          strokeWidth="2"
                        />
                      )
                    })}

                    {/* Labels */}
                    {mockLifeAreas.map((area, index) => {
                      const angle = index * angleStep - Math.PI / 2
                      const labelRadius = maxRadius + 20
                      const x = centerX + labelRadius * Math.cos(angle)
                      const y = centerY + labelRadius * Math.sin(angle)
                      return (
                        <text
                          key={area.id}
                          x={x}
                          y={y}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="text-xs fill-muted-foreground font-medium"
                        >
                          {area.name}
                        </text>
                      )
                    })}
                  </svg>
                </div>
              </CardContent>
            </Card>

            {/* Adjustable Scores */}
            <Card className="border-border/50">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Adjust Your Scores</CardTitle>
                  <CardDescription>Rate each area of your life from 0-100</CardDescription>
                </div>
                {hasChanges && (
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={resetScores} className="rounded-xl">
                      <RotateCcw className="h-4 w-4 mr-1" />
                      Reset
                    </Button>
                    <Button size="sm" className="rounded-xl">
                      <Save className="h-4 w-4 mr-1" />
                      Save
                    </Button>
                  </div>
                )}
              </CardHeader>
              <CardContent className="space-y-6">
                {mockLifeAreas.map((area, index) => {
                  const Icon = areaIcons[area.icon as keyof typeof areaIcons] || Heart
                  const trend = getScoreTrend(scores[area.id], area.score)
                  const TrendIcon = trend.icon

                  return (
                    <div key={area.id} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{ backgroundColor: `${areaColors[index]}20`, color: areaColors[index] }}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{area.name}</p>
                            <p className="text-xs text-muted-foreground">{areaDescriptions[area.name]}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendIcon className={`h-4 w-4 ${trend.color}`} />
                          <span className="text-lg font-semibold w-12 text-right">{scores[area.id]}%</span>
                        </div>
                      </div>
                      <Slider
                        value={[scores[area.id]]}
                        onValueChange={([value]) => updateScore(area.id, value)}
                        max={100}
                        step={5}
                        className="w-full"
                      />
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  )
}
