'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Target, Sparkles, Brain, PieChart } from 'lucide-react'

const actions = [
  {
    title: 'Track Goal',
    description: 'Log your daily progress',
    icon: Target,
    href: '/goals',
    color: 'bg-chart-1/10 text-chart-1',
  },
  {
    title: 'Get AI Advice',
    description: 'Ask for guidance',
    icon: Sparkles,
    href: '/ai-advice',
    color: 'bg-chart-2/10 text-chart-2',
  },
  {
    title: 'Personality',
    description: 'Explore your type',
    icon: Brain,
    href: '/personality',
    color: 'bg-chart-3/10 text-chart-3',
  },
  {
    title: 'Life Balance',
    description: 'Check your wheel',
    icon: PieChart,
    href: '/life-balance',
    color: 'bg-chart-4/10 text-chart-4',
  },
]

export function QuickActions() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {actions.map((action) => (
        <Link key={action.title} href={action.href}>
          <Card className="group p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border/50">
            <div className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
              <action.icon className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{action.title}</h3>
            <p className="text-sm text-muted-foreground">{action.description}</p>
          </Card>
        </Link>
      ))}
    </div>
  )
}
