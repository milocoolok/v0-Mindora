'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Flame, BookOpen, Target, Brain } from 'lucide-react'

const activities = [
  {
    id: '1',
    icon: CheckCircle2,
    title: 'Completed morning meditation',
    time: '2 hours ago',
    color: 'text-green-500 bg-green-500/10',
  },
  {
    id: '2',
    icon: Flame,
    title: 'Reading streak reached 12 days',
    time: '5 hours ago',
    color: 'text-orange-500 bg-orange-500/10',
  },
  {
    id: '3',
    icon: BookOpen,
    title: 'Read "The Power of Habit" chapter 3',
    time: 'Yesterday',
    color: 'text-blue-500 bg-blue-500/10',
  },
  {
    id: '4',
    icon: Target,
    title: 'Set a new fitness goal',
    time: 'Yesterday',
    color: 'text-purple-500 bg-purple-500/10',
  },
  {
    id: '5',
    icon: Brain,
    title: 'Completed personality assessment',
    time: '2 days ago',
    color: 'text-pink-500 bg-pink-500/10',
  },
]

export function RecentActivity() {
  return (
    <Card className="border-border/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/30 transition-colors"
            >
              <div className={`w-9 h-9 rounded-xl ${activity.color} flex items-center justify-center flex-shrink-0`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground truncate">{activity.title}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
              {index === 0 && (
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                  New
                </span>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
