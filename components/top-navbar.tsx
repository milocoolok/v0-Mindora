'use client'

import { Bell, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { LanguageSwitcher } from '@/components/language-switcher'
import { useI18n } from '@/lib/i18n'

interface TopNavbarProps {
  title?: string
  subtitle?: string
}

export function TopNavbar({ title, subtitle }: TopNavbarProps) {
  const { t } = useI18n()
  
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6">
      <SidebarTrigger className="md:hidden" />
      
      <div className="flex-1">
        {title && (
          <div>
            <h1 className="text-lg font-semibold text-foreground">{title}</h1>
            {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder={t.search}
            className="w-64 pl-9 rounded-xl bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
          />
        </div>
        
        <LanguageSwitcher />
        
        <Button variant="ghost" size="icon" className="relative rounded-xl">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-primary" />
        </Button>
      </div>
    </header>
  )
}
