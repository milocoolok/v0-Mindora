export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  zodiacSign?: ZodiacSign
  mbtiType?: MBTIType
  joinedAt: Date
}

export interface Goal {
  id: string
  title: string
  category: GoalCategory
  progress: number
  target: number
  unit: string
  streak: number
  lastUpdated: Date
  createdAt: Date
}

export type GoalCategory = 'fitness' | 'reading' | 'language' | 'mindfulness' | 'career' | 'health'

export interface LifeArea {
  id: string
  name: string
  score: number
  icon: string
}

export type ZodiacSign = 
  | 'aries' | 'taurus' | 'gemini' | 'cancer' 
  | 'leo' | 'virgo' | 'libra' | 'scorpio' 
  | 'sagittarius' | 'capricorn' | 'aquarius' | 'pisces'

export type MBTIType = 
  | 'INTJ' | 'INTP' | 'ENTJ' | 'ENTP'
  | 'INFJ' | 'INFP' | 'ENFJ' | 'ENFP'
  | 'ISTJ' | 'ISFJ' | 'ESTJ' | 'ESFJ'
  | 'ISTP' | 'ISFP' | 'ESTP' | 'ESFP'

export interface PersonalityInsight {
  strengths: string[]
  weaknesses: string[]
  relationshipAdvice: string
  careerAdvice: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: BlogCategory
  readTime: number
  publishedAt: Date
  image?: string
}

export type BlogCategory = 'self-improvement' | 'self-love' | 'relationships' | 'career'

export interface VocabularyCard {
  id: string
  word: string
  translation: string
  pronunciation?: string
  example: string
  language: 'english' | 'chinese'
  mastered: boolean
}

export interface AIAdviceTopic {
  id: string
  title: string
  description: string
  icon: string
}

export interface CareerPath {
  id: string
  title: string
  description: string
  skills: string[]
  resources: CareerResource[]
}

export interface CareerResource {
  id: string
  title: string
  type: 'course' | 'book' | 'article' | 'video'
  url: string
}
