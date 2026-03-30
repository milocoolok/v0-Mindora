import type { 
  User, Goal, LifeArea, BlogPost, VocabularyCard, 
  AIAdviceTopic, CareerPath, PersonalityInsight 
} from './types'

export const mockUser: User = {
  id: '1',
  name: 'Sarah Chen',
  email: 'sarah@example.com',
  avatar: '/avatar.jpg',
  zodiacSign: 'libra',
  mbtiType: 'INFJ',
  joinedAt: new Date('2024-01-15'),
}

export const mockGoals: Goal[] = [
  {
    id: '1',
    title: 'Morning meditation',
    category: 'mindfulness',
    progress: 15,
    target: 20,
    unit: 'minutes',
    streak: 7,
    lastUpdated: new Date(),
    createdAt: new Date('2024-01-01'),
  },
  {
    id: '2',
    title: 'Read daily',
    category: 'reading',
    progress: 25,
    target: 30,
    unit: 'pages',
    streak: 12,
    lastUpdated: new Date(),
    createdAt: new Date('2024-01-05'),
  },
  {
    id: '3',
    title: 'Exercise',
    category: 'fitness',
    progress: 45,
    target: 60,
    unit: 'minutes',
    streak: 5,
    lastUpdated: new Date(),
    createdAt: new Date('2024-01-10'),
  },
  {
    id: '4',
    title: 'Learn Chinese',
    category: 'language',
    progress: 10,
    target: 15,
    unit: 'words',
    streak: 21,
    lastUpdated: new Date(),
    createdAt: new Date('2024-01-01'),
  },
  {
    id: '5',
    title: 'Career development',
    category: 'career',
    progress: 3,
    target: 5,
    unit: 'hours',
    streak: 3,
    lastUpdated: new Date(),
    createdAt: new Date('2024-02-01'),
  },
]

export const mockLifeAreas: LifeArea[] = [
  { id: '1', name: 'Health', score: 75, icon: 'heart' },
  { id: '2', name: 'Career', score: 60, icon: 'briefcase' },
  { id: '3', name: 'Relationships', score: 85, icon: 'users' },
  { id: '4', name: 'Learning', score: 70, icon: 'book' },
  { id: '5', name: 'Mental Health', score: 65, icon: 'brain' },
  { id: '6', name: 'Finance', score: 55, icon: 'wallet' },
]

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Power of Morning Routines',
    excerpt: 'Discover how a consistent morning routine can transform your productivity and mental clarity throughout the day.',
    category: 'self-improvement',
    readTime: 5,
    publishedAt: new Date('2024-03-15'),
  },
  {
    id: '2',
    title: 'Learning to Love Yourself First',
    excerpt: 'Self-love is not selfish. Learn practical ways to cultivate a healthier relationship with yourself.',
    category: 'self-love',
    readTime: 7,
    publishedAt: new Date('2024-03-10'),
  },
  {
    id: '3',
    title: 'Building Meaningful Connections',
    excerpt: 'Quality over quantity: how to nurture relationships that truly matter and support your growth.',
    category: 'relationships',
    readTime: 6,
    publishedAt: new Date('2024-03-05'),
  },
  {
    id: '4',
    title: 'Navigating Career Transitions',
    excerpt: 'Feeling stuck? Here are proven strategies for making successful career changes at any age.',
    category: 'career',
    readTime: 8,
    publishedAt: new Date('2024-03-01'),
  },
  {
    id: '5',
    title: 'The Art of Letting Go',
    excerpt: 'How releasing what no longer serves you can open doors to new opportunities and inner peace.',
    category: 'self-improvement',
    readTime: 6,
    publishedAt: new Date('2024-02-28'),
  },
  {
    id: '6',
    title: 'Setting Boundaries with Love',
    excerpt: 'Learn how to establish healthy boundaries while maintaining meaningful relationships.',
    category: 'relationships',
    readTime: 5,
    publishedAt: new Date('2024-02-25'),
  },
]

export const mockVocabulary: VocabularyCard[] = [
  {
    id: '1',
    word: 'Resilience',
    translation: 'The ability to recover from difficulties',
    example: 'Her resilience helped her overcome many challenges.',
    language: 'english',
    mastered: true,
  },
  {
    id: '2',
    word: 'Mindfulness',
    translation: 'The quality of being present and aware',
    example: 'Practicing mindfulness can reduce stress.',
    language: 'english',
    mastered: false,
  },
  {
    id: '3',
    word: '成长',
    translation: 'Growth / To grow up',
    pronunciation: 'chéng zhǎng',
    example: '个人成长是一个持续的过程。',
    language: 'chinese',
    mastered: false,
  },
  {
    id: '4',
    word: '努力',
    translation: 'Effort / To work hard',
    pronunciation: 'nǔ lì',
    example: '只要努力，就会成功。',
    language: 'chinese',
    mastered: true,
  },
  {
    id: '5',
    word: 'Perseverance',
    translation: 'Persistence despite difficulties',
    example: 'Perseverance is key to achieving your goals.',
    language: 'english',
    mastered: false,
  },
  {
    id: '6',
    word: '平衡',
    translation: 'Balance / Equilibrium',
    pronunciation: 'píng héng',
    example: '工作与生活的平衡很重要。',
    language: 'chinese',
    mastered: false,
  },
]

export const mockAITopics: AIAdviceTopic[] = [
  {
    id: '1',
    title: 'Motivation',
    description: 'Get inspired and stay driven',
    icon: 'zap',
  },
  {
    id: '2',
    title: 'Self-Love',
    description: 'Build a healthy relationship with yourself',
    icon: 'heart',
  },
  {
    id: '3',
    title: 'Relationships',
    description: 'Navigate connections with others',
    icon: 'users',
  },
  {
    id: '4',
    title: 'Career Direction',
    description: 'Find your professional path',
    icon: 'compass',
  },
  {
    id: '5',
    title: 'Stress Management',
    description: 'Learn to handle pressure better',
    icon: 'wind',
  },
  {
    id: '6',
    title: 'Goal Setting',
    description: 'Create and achieve meaningful goals',
    icon: 'target',
  },
]

export const mockCareerPaths: CareerPath[] = [
  {
    id: '1',
    title: 'UX Designer',
    description: 'Create user-centered digital experiences that delight and engage.',
    skills: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Figma'],
    resources: [
      { id: '1', title: 'Google UX Design Certificate', type: 'course', url: '#' },
      { id: '2', title: 'Don\'t Make Me Think', type: 'book', url: '#' },
      { id: '3', title: 'Laws of UX', type: 'article', url: '#' },
    ],
  },
  {
    id: '2',
    title: 'Product Manager',
    description: 'Lead product development from ideation to launch.',
    skills: ['Strategic Thinking', 'Data Analysis', 'Communication', 'Agile', 'Roadmapping'],
    resources: [
      { id: '1', title: 'Product Management Fundamentals', type: 'course', url: '#' },
      { id: '2', title: 'Inspired by Marty Cagan', type: 'book', url: '#' },
      { id: '3', title: 'Product Strategy Overview', type: 'video', url: '#' },
    ],
  },
  {
    id: '3',
    title: 'Data Scientist',
    description: 'Extract insights from data to drive business decisions.',
    skills: ['Python', 'Machine Learning', 'Statistics', 'SQL', 'Data Visualization'],
    resources: [
      { id: '1', title: 'Data Science Specialization', type: 'course', url: '#' },
      { id: '2', title: 'Hands-On Machine Learning', type: 'book', url: '#' },
      { id: '3', title: 'Kaggle Competitions', type: 'article', url: '#' },
    ],
  },
]

export const mockPersonalityInsights: Record<string, PersonalityInsight> = {
  INFJ: {
    strengths: [
      'Deep empathy and understanding of others',
      'Strong intuition and foresight',
      'Creative and insightful problem-solving',
      'Committed to personal values and growth',
      'Excellent at connecting with people on a deeper level',
    ],
    weaknesses: [
      'May be overly idealistic at times',
      'Can be sensitive to criticism',
      'Tendency to overthink decisions',
      'May struggle with setting boundaries',
      'Can burn out from caring too much',
    ],
    relationshipAdvice: 'You thrive in deep, meaningful connections. Look for partners who appreciate your depth and share your values. Remember to communicate your needs clearly and maintain healthy boundaries.',
    careerAdvice: 'You excel in roles that allow you to help others while expressing your creativity. Consider careers in counseling, writing, design, or social impact organizations.',
  },
  ENFP: {
    strengths: [
      'Enthusiastic and inspiring to others',
      'Creative with endless ideas',
      'Excellent communicator',
      'Adaptable and open-minded',
      'Champions of new possibilities',
    ],
    weaknesses: [
      'May struggle with follow-through',
      'Can be easily distracted',
      'Sometimes overlooks practical details',
      'May avoid conflict',
      'Can spread yourself too thin',
    ],
    relationshipAdvice: 'Your warmth and enthusiasm draw people to you. Seek partners who share your love for exploration but can also help ground you. Balance excitement with stability.',
    careerAdvice: 'You thrive in dynamic environments that value creativity and human connection. Consider careers in marketing, entrepreneurship, coaching, or creative arts.',
  },
}

export const zodiacInsights = {
  libra: {
    element: 'Air',
    ruling: 'Venus',
    traits: ['Diplomatic', 'Harmonious', 'Fair-minded', 'Social', 'Idealistic'],
    strengths: 'You have a natural ability to see multiple perspectives and create harmony in any situation.',
    challenges: 'Decision-making can be difficult as you weigh all options carefully.',
    compatibility: ['Gemini', 'Aquarius', 'Leo', 'Sagittarius'],
    dailyTip: 'Trust your instincts today. Your balanced perspective will guide you to the right choice.',
  },
  aries: {
    element: 'Fire',
    ruling: 'Mars',
    traits: ['Courageous', 'Confident', 'Enthusiastic', 'Competitive', 'Direct'],
    strengths: 'Your natural leadership and pioneering spirit inspire others to follow.',
    challenges: 'Patience and diplomacy can be areas for growth.',
    compatibility: ['Leo', 'Sagittarius', 'Gemini', 'Aquarius'],
    dailyTip: 'Channel your energy into a meaningful project. Your passion is contagious.',
  },
}
