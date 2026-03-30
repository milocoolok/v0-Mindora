'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from '@/components/ui/sidebar'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { 
  LayoutDashboard, 
  Target, 
  Sparkles, 
  Brain, 
  Compass, 
  BookOpen,
  Languages,
  PieChart,
  LogOut,
  Settings,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navigationItems = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Goals',
    href: '/goals',
    icon: Target,
  },
  {
    title: 'AI Advice',
    href: '/ai-advice',
    icon: Sparkles,
  },
  {
    title: 'Personality',
    href: '/personality',
    icon: Brain,
  },
  {
    title: 'Life Balance',
    href: '/life-balance',
    icon: PieChart,
  },
  {
    title: 'Career',
    href: '/career',
    icon: Compass,
  },
  {
    title: 'Languages',
    href: '/languages',
    icon: Languages,
  },
  {
    title: 'Blog',
    href: '/blog',
    icon: BookOpen,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarHeader className="p-6">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold text-foreground">Mindora</span>
        </Link>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`)
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={cn(
                        'h-11 gap-3 rounded-xl transition-all duration-200',
                        isActive && 'bg-primary/10 text-primary font-medium'
                      )}
                    >
                      <Link href={item.href}>
                        <item.icon className={cn('h-5 w-5', isActive && 'text-primary')} />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3 rounded-xl bg-muted/50 p-3">
          <Avatar className="h-10 w-10 border-2 border-primary/20">
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              SC
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">Sarah Chen</p>
            <p className="text-xs text-muted-foreground truncate">Premium member</p>
          </div>
          <div className="flex gap-1">
            <button className="p-2 rounded-lg hover:bg-background transition-colors">
              <Settings className="h-4 w-4 text-muted-foreground" />
            </button>
            <button className="p-2 rounded-lg hover:bg-background transition-colors">
              <LogOut className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
