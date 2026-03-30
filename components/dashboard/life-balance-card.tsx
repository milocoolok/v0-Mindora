'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { mockLifeAreas } from '@/lib/mock-data'
import { ArrowRight, Heart, Briefcase, Users, BookOpen, Brain, Wallet } from 'lucide-react'

const areaIcons = {
  heart: Heart,
  briefcase: Briefcase,
  users: Users,
  book: BookOpen,
  brain: Brain,
  wallet: Wallet,
}

export function LifeBalanceCard() {
  const averageScore = Math.round(
    mockLifeAreas.reduce((acc, area) => acc + area.score, 0) / mockLifeAreas.length
  )

  return (
    <Card className="border-border/50 h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold">Life Balance</CardTitle>
        <Button variant="ghost" size="sm" className="text-muted-foreground" asChild>
          <Link href="/life-balance">
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        {/* Overall Score */}
        <div className="flex items-center justify-center mb-6">
          <div className="relative w-28 h-28">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="56"
                cy="56"
                r="48"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-muted"
              />
              <circle
                cx="56"
                cy="56"
                r="48"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${averageScore * 3.02} 302`}
                strokeLinecap="round"
                className="text-primary transition-all duration-500"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-foreground">{averageScore}%</span>
              <span className="text-xs text-muted-foreground">Overall</span>
            </div>
          </div>
        </div>

        {/* Areas List */}
        <div className="space-y-3">
          {mockLifeAreas.map((area) => {
            const Icon = areaIcons[area.icon as keyof typeof areaIcons] || Heart
            return (
              <div key={area.id} className="flex items-center gap-3">
                <Icon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-sm text-foreground flex-1">{area.name}</span>
                <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${area.score}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground w-8 text-right">{area.score}%</span>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
