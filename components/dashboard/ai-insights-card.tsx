'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Sparkles, ArrowRight, Lightbulb, Heart, TrendingUp } from 'lucide-react'

const insights = [
  {
    id: '1',
    icon: Lightbulb,
    title: 'Focus on Morning Routines',
    description: 'Your productivity peaks in the morning. Consider scheduling important tasks before noon.',
    color: 'text-chart-4 bg-chart-4/10',
  },
  {
    id: '2',
    icon: Heart,
    title: 'Practice Self-Compassion',
    description: 'You&apos;ve been pushing hard lately. Remember to celebrate small wins too.',
    color: 'text-chart-2 bg-chart-2/10',
  },
  {
    id: '3',
    icon: TrendingUp,
    title: 'Build on Your Streak',
    description: 'Your 7-day meditation streak shows great consistency. Keep it going!',
    color: 'text-chart-1 bg-chart-1/10',
  },
]

export function AIInsightsCard() {
  return (
    <Card className="border-border/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
          <CardTitle className="text-lg font-semibold">AI Insights</CardTitle>
        </div>
        <Button variant="ghost" size="sm" className="text-muted-foreground" asChild>
          <Link href="/ai-advice">
            Get advice
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className="flex gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <div className={`w-10 h-10 rounded-xl ${insight.color} flex items-center justify-center flex-shrink-0`}>
              <insight.icon className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-medium text-foreground text-sm mb-0.5">{insight.title}</h4>
              <p className="text-xs text-muted-foreground">{insight.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
