'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useI18n, languageNames, languageFlags, type Language } from '@/lib/i18n'
import { Globe } from 'lucide-react'

const languages: Language[] = ['en', 'vi', 'zh', 'si', 'ru']

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18n()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 rounded-xl">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{languageFlags[language]}</span>
          <span className="hidden md:inline">{languageNames[language]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`cursor-pointer ${language === lang ? 'bg-primary/10' : ''}`}
          >
            <span className="mr-2">{languageFlags[lang]}</span>
            {languageNames[lang]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
