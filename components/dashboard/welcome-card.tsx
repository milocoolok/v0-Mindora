'use client'

import { Sparkles, Sun, Moon, CloudSun } from 'lucide-react'
import { Card } from '@/components/ui/card'

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return { text: 'Good morning', icon: Sun }
  if (hour < 18) return { text: 'Good afternoon', icon: CloudSun }
  return { text: 'Good evening', icon: Moon }
}

export function WelcomeCard() {
  const greeting = getGreeting()
  const GreetingIcon = greeting.icon
  
  return (
    <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary/90 to-primary p-6 md:p-8">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-1/2 w-32 h-32 bg-primary-foreground/5 rounded-full translate-y-1/2" />
      
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-primary-foreground/80 mb-2">
            <GreetingIcon className="h-5 w-5" />
            <span className="text-sm font-medium">{greeting.text}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
            Welcome back, Sarah!
          </h1>
          <p className="text-primary-foreground/80 max-w-md">
            You&apos;re making great progress on your journey. Keep up the amazing work!
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center p-4 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm">
            <div className="flex items-center gap-1 text-primary-foreground mb-1">
              <Sparkles className="h-4 w-4" />
              <span className="text-2xl font-bold">7</span>
            </div>
            <span className="text-xs text-primary-foreground/70">Day Streak</span>
          </div>
          
          <div className="flex flex-col items-center p-4 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm">
            <span className="text-2xl font-bold text-primary-foreground mb-1">85%</span>
            <span className="text-xs text-primary-foreground/70">Goals Met</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
