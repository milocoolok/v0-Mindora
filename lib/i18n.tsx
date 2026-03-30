'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

export type Language = 'en' | 'vi' | 'zh' | 'si' | 'ru'

export const languageNames: Record<Language, string> = {
  en: 'English',
  vi: 'Tiếng Việt',
  zh: '中文',
  si: 'සිංහල',
  ru: 'Русский',
}

export const languageFlags: Record<Language, string> = {
  en: '🇬🇧',
  vi: '🇻🇳',
  zh: '🇨🇳',
  si: '🇱🇰',
  ru: '🇷🇺',
}

type Translations = {
  // Navigation
  dashboard: string
  goals: string
  doraAdvice: string
  personality: string
  lifeBalance: string
  career: string
  languages: string
  blog: string
  // Common
  welcome: string
  welcomeBack: string
  goodMorning: string
  goodAfternoon: string
  goodEvening: string
  dayStreak: string
  goalsMet: string
  search: string
  settings: string
  logout: string
  premiumMember: string
  // Dashboard
  quickActions: string
  yourProgress: string
  // Goals
  addGoal: string
  editGoal: string
  deleteGoal: string
  allGoals: string
  fitness: string
  reading: string
  language: string
  mindfulness: string
  careerGoal: string
  // Dora Advice
  whatCanIHelp: string
  whatStrugglingWith: string
  getAdvice: string
  newQuestion: string
  motivation: string
  selfLove: string
  relationships: string
  careerDirection: string
  stressManagement: string
  goalSetting: string
  // Personality
  personalityTest: string
  zodiac: string
  vietnameseAstrology: string
  strengths: string
  weaknesses: string
  // Blog
  dailyEnglish: string
  readMore: string
  exploreArticles: string
}

const translations: Record<Language, Translations> = {
  en: {
    dashboard: 'Dashboard',
    goals: 'Goals',
    doraAdvice: 'Dora Advice',
    personality: 'Personality',
    lifeBalance: 'Life Balance',
    career: 'Career',
    languages: 'Languages',
    blog: 'Blog',
    welcome: 'Welcome',
    welcomeBack: 'Welcome back',
    goodMorning: 'Good morning',
    goodAfternoon: 'Good afternoon',
    goodEvening: 'Good evening',
    dayStreak: 'Day Streak',
    goalsMet: 'Goals Met',
    search: 'Search...',
    settings: 'Settings',
    logout: 'Logout',
    premiumMember: 'Premium member',
    quickActions: 'Quick Actions',
    yourProgress: 'Your Progress',
    addGoal: 'Add Goal',
    editGoal: 'Edit Goal',
    deleteGoal: 'Delete Goal',
    allGoals: 'All Goals',
    fitness: 'Fitness',
    reading: 'Reading',
    language: 'Language',
    mindfulness: 'Mindfulness',
    careerGoal: 'Career',
    whatCanIHelp: 'What can I help you with today?',
    whatStrugglingWith: 'What are you struggling with?',
    getAdvice: 'Get Advice',
    newQuestion: 'New Question',
    motivation: 'Motivation',
    selfLove: 'Self-Love',
    relationships: 'Relationships',
    careerDirection: 'Career Direction',
    stressManagement: 'Stress Management',
    goalSetting: 'Goal Setting',
    personalityTest: 'Personality Test',
    zodiac: 'Zodiac',
    vietnameseAstrology: 'Vietnamese Astrology',
    strengths: 'Strengths',
    weaknesses: 'Weaknesses',
    dailyEnglish: 'Daily English',
    readMore: 'Read more',
    exploreArticles: 'Explore Articles',
  },
  vi: {
    dashboard: 'Trang chủ',
    goals: 'Mục tiêu',
    doraAdvice: 'Dora Tư vấn',
    personality: 'Tính cách',
    lifeBalance: 'Cân bằng',
    career: 'Sự nghiệp',
    languages: 'Ngôn ngữ',
    blog: 'Blog',
    welcome: 'Xin chào',
    welcomeBack: 'Chào mừng trở lại',
    goodMorning: 'Chào buổi sáng',
    goodAfternoon: 'Chào buổi chiều',
    goodEvening: 'Chào buổi tối',
    dayStreak: 'Chuỗi ngày',
    goalsMet: 'Hoàn thành',
    search: 'Tìm kiếm...',
    settings: 'Cài đặt',
    logout: 'Đăng xuất',
    premiumMember: 'Thành viên cao cấp',
    quickActions: 'Hành động nhanh',
    yourProgress: 'Tiến độ của bạn',
    addGoal: 'Thêm mục tiêu',
    editGoal: 'Sửa mục tiêu',
    deleteGoal: 'Xóa mục tiêu',
    allGoals: 'Tất cả mục tiêu',
    fitness: 'Thể dục',
    reading: 'Đọc sách',
    language: 'Ngôn ngữ',
    mindfulness: 'Chánh niệm',
    careerGoal: 'Sự nghiệp',
    whatCanIHelp: 'Hôm nay tôi có thể giúp gì cho bạn?',
    whatStrugglingWith: 'Bạn đang gặp khó khăn gì?',
    getAdvice: 'Nhận tư vấn',
    newQuestion: 'Câu hỏi mới',
    motivation: 'Động lực',
    selfLove: 'Yêu bản thân',
    relationships: 'Mối quan hệ',
    careerDirection: 'Định hướng nghề nghiệp',
    stressManagement: 'Quản lý stress',
    goalSetting: 'Đặt mục tiêu',
    personalityTest: 'Trắc nghiệm tính cách',
    zodiac: 'Cung hoàng đạo',
    vietnameseAstrology: 'Tử vi Việt Nam',
    strengths: 'Điểm mạnh',
    weaknesses: 'Điểm yếu',
    dailyEnglish: 'Tiếng Anh hàng ngày',
    readMore: 'Đọc thêm',
    exploreArticles: 'Khám phá bài viết',
  },
  zh: {
    dashboard: '仪表板',
    goals: '目标',
    doraAdvice: 'Dora 建议',
    personality: '性格',
    lifeBalance: '生活平衡',
    career: '职业',
    languages: '语言',
    blog: '博客',
    welcome: '欢迎',
    welcomeBack: '欢迎回来',
    goodMorning: '早上好',
    goodAfternoon: '下午好',
    goodEvening: '晚上好',
    dayStreak: '连续天数',
    goalsMet: '目标完成',
    search: '搜索...',
    settings: '设置',
    logout: '登出',
    premiumMember: '高级会员',
    quickActions: '快捷操作',
    yourProgress: '你的进度',
    addGoal: '添加目标',
    editGoal: '编辑目标',
    deleteGoal: '删除目标',
    allGoals: '所有目标',
    fitness: '健身',
    reading: '阅读',
    language: '语言',
    mindfulness: '正念',
    careerGoal: '职业',
    whatCanIHelp: '今天我能帮你什么?',
    whatStrugglingWith: '你在为什么而苦恼?',
    getAdvice: '获取建议',
    newQuestion: '新问题',
    motivation: '动力',
    selfLove: '自爱',
    relationships: '人际关系',
    careerDirection: '职业方向',
    stressManagement: '压力管理',
    goalSetting: '目标设定',
    personalityTest: '性格测试',
    zodiac: '星座',
    vietnameseAstrology: '越南占星',
    strengths: '优点',
    weaknesses: '缺点',
    dailyEnglish: '每日英语',
    readMore: '阅读更多',
    exploreArticles: '探索文章',
  },
  si: {
    dashboard: 'පුවරුව',
    goals: 'ඉලක්ක',
    doraAdvice: 'Dora උපදෙස්',
    personality: 'පෞරුෂත්වය',
    lifeBalance: 'ජීවිත සමතුලිතතාවය',
    career: 'වෘත්තිය',
    languages: 'භාෂා',
    blog: 'බ්ලොග්',
    welcome: 'සාදරයෙන් පිළිගනිමු',
    welcomeBack: 'නැවත පැමිණීම සුබයි',
    goodMorning: 'සුභ උදෑසනක්',
    goodAfternoon: 'සුභ දහවලක්',
    goodEvening: 'සුභ සන්ධ්‍යාවක්',
    dayStreak: 'දින පෙළ',
    goalsMet: 'ඉලක්ක සපුරා ඇත',
    search: 'සොයන්න...',
    settings: 'සැකසුම්',
    logout: 'පිටවීම',
    premiumMember: 'ප්‍රිමියම් සාමාජික',
    quickActions: 'ඉක්මන් ක්‍රියා',
    yourProgress: 'ඔබේ ප්‍රගතිය',
    addGoal: 'ඉලක්කයක් එකතු කරන්න',
    editGoal: 'ඉලක්කය සංස්කරණය කරන්න',
    deleteGoal: 'ඉලක්කය මකන්න',
    allGoals: 'සියලුම ඉලක්ක',
    fitness: 'ශාරීරික යෝග්‍යතාව',
    reading: 'කියවීම',
    language: 'භාෂාව',
    mindfulness: 'සිහිය',
    careerGoal: 'වෘත්තිය',
    whatCanIHelp: 'අද මට ඔබට උදව් කළ හැක්කේ කුමක්ද?',
    whatStrugglingWith: 'ඔබ කුමක් සමඟ අරගල කරනවාද?',
    getAdvice: 'උපදෙස් ලබාගන්න',
    newQuestion: 'නව ප්‍රශ්නය',
    motivation: 'අභිප්‍රේරණය',
    selfLove: 'ස්වයං ප්‍රේමය',
    relationships: 'සබඳතා',
    careerDirection: 'වෘත්තීය දිශාව',
    stressManagement: 'ආතතිය කළමනාකරණය',
    goalSetting: 'ඉලක්ක සැකසීම',
    personalityTest: 'පෞරුෂත්ව පරීක්ෂණය',
    zodiac: 'රාශි චක්‍රය',
    vietnameseAstrology: 'වියට්නාම ජ්‍යෝතිෂය',
    strengths: 'ශක්තීන්',
    weaknesses: 'දුර්වලතා',
    dailyEnglish: 'දෛනික ඉංග්‍රීසි',
    readMore: 'තව කියවන්න',
    exploreArticles: 'ලිපි ගවේෂණය කරන්න',
  },
  ru: {
    dashboard: 'Панель',
    goals: 'Цели',
    doraAdvice: 'Советы Доры',
    personality: 'Личность',
    lifeBalance: 'Баланс',
    career: 'Карьера',
    languages: 'Языки',
    blog: 'Блог',
    welcome: 'Добро пожаловать',
    welcomeBack: 'С возвращением',
    goodMorning: 'Доброе утро',
    goodAfternoon: 'Добрый день',
    goodEvening: 'Добрый вечер',
    dayStreak: 'Дней подряд',
    goalsMet: 'Целей достигнуто',
    search: 'Поиск...',
    settings: 'Настройки',
    logout: 'Выйти',
    premiumMember: 'Премиум участник',
    quickActions: 'Быстрые действия',
    yourProgress: 'Ваш прогресс',
    addGoal: 'Добавить цель',
    editGoal: 'Редактировать цель',
    deleteGoal: 'Удалить цель',
    allGoals: 'Все цели',
    fitness: 'Фитнес',
    reading: 'Чтение',
    language: 'Язык',
    mindfulness: 'Осознанность',
    careerGoal: 'Карьера',
    whatCanIHelp: 'Чем я могу помочь сегодня?',
    whatStrugglingWith: 'С чем вы боретесь?',
    getAdvice: 'Получить совет',
    newQuestion: 'Новый вопрос',
    motivation: 'Мотивация',
    selfLove: 'Любовь к себе',
    relationships: 'Отношения',
    careerDirection: 'Карьерное направление',
    stressManagement: 'Управление стрессом',
    goalSetting: 'Постановка целей',
    personalityTest: 'Тест личности',
    zodiac: 'Зодиак',
    vietnameseAstrology: 'Вьетнамская астрология',
    strengths: 'Сильные стороны',
    weaknesses: 'Слабые стороны',
    dailyEnglish: 'Ежедневный английский',
    readMore: 'Читать далее',
    exploreArticles: 'Статьи',
  },
}

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('mindora-lang', lang)
    }
  }, [])

  const t = translations[language]

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
