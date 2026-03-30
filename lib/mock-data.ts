import type { 
  User, Goal, LifeArea, BlogPost, VocabularyCard, 
  AIAdviceTopic, CareerPath, PersonalityInsight 
} from './types'

export const mockUser: User = {
  id: '1',
  name: 'Lakshan',
  email: 'lakshan@example.com',
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

// Daily English words with IPA, Chinese meaning, explanation and example
export const dailyEnglishWords = [
  {
    id: '1',
    word: 'Resilience',
    ipa: '/rɪˈzɪliəns/',
    chineseMeaning: '韧性，复原力',
    englishExplanation: 'The capacity to recover quickly from difficulties; toughness',
    example: 'Her resilience helped her bounce back from the setback.',
    relatedQuestion: 'Can you recall a time when you showed resilience? How did it shape you?',
  },
  {
    id: '2',
    word: 'Perseverance',
    ipa: '/ˌpɜːsɪˈvɪərəns/',
    chineseMeaning: '坚持不懈，毅力',
    englishExplanation: 'Persistence in doing something despite difficulty or delay in achieving success',
    example: 'Success requires both talent and perseverance.',
    relatedQuestion: 'What goal have you achieved through perseverance?',
  },
  {
    id: '3',
    word: 'Gratitude',
    ipa: '/ˈɡrætɪtjuːd/',
    chineseMeaning: '感激，感恩',
    englishExplanation: 'The quality of being thankful; readiness to show appreciation',
    example: 'Practicing gratitude daily can improve your mental health.',
    relatedQuestion: 'What are three things you feel grateful for today?',
  },
  {
    id: '4',
    word: 'Empathy',
    ipa: '/ˈempəθi/',
    chineseMeaning: '同理心，共情',
    englishExplanation: 'The ability to understand and share the feelings of another',
    example: 'A good leader demonstrates empathy towards their team.',
    relatedQuestion: 'How do you practice empathy in your daily life?',
  },
  {
    id: '5',
    word: 'Integrity',
    ipa: '/ɪnˈteɡrəti/',
    chineseMeaning: '正直，诚信',
    englishExplanation: 'The quality of being honest and having strong moral principles',
    example: 'He is known for his integrity in business dealings.',
    relatedQuestion: 'When was a time you had to stand by your integrity?',
  },
  {
    id: '6',
    word: 'Mindfulness',
    ipa: '/ˈmaɪndfʊlnəs/',
    chineseMeaning: '正念，专注当下',
    englishExplanation: 'A mental state achieved by focusing awareness on the present moment',
    example: 'Mindfulness meditation can reduce stress and anxiety.',
    relatedQuestion: 'How can you bring more mindfulness into your daily routine?',
  },
]

export const mockVocabulary: VocabularyCard[] = [
  // English
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
    id: '5',
    word: 'Perseverance',
    translation: 'Persistence despite difficulties',
    example: 'Perseverance is key to achieving your goals.',
    language: 'english',
    mastered: false,
  },
  // Chinese
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
    id: '6',
    word: '平衡',
    translation: 'Balance / Equilibrium',
    pronunciation: 'píng héng',
    example: '工作与生活的平衡很重要。',
    language: 'chinese',
    mastered: false,
  },
  // Sinhala
  {
    id: '7',
    word: 'ස්තූතියි',
    translation: 'Thank you',
    pronunciation: 'stūtiyi',
    example: 'ඔබට ස්තූතියි (Thank you)',
    language: 'sinhala',
    mastered: false,
  },
  {
    id: '8',
    word: 'ආදරය',
    translation: 'Love',
    pronunciation: 'ādaraya',
    example: 'ආදරය සැමවිටම ජය ගනී (Love always wins)',
    language: 'sinhala',
    mastered: false,
  },
  {
    id: '9',
    word: 'සතුට',
    translation: 'Happiness',
    pronunciation: 'satuṭa',
    example: 'සතුට තුළින් ජීවිතය ලස්සනයි (Life is beautiful with happiness)',
    language: 'sinhala',
    mastered: false,
  },
  // Russian
  {
    id: '10',
    word: 'Успех',
    translation: 'Success',
    pronunciation: 'uspekh',
    example: 'Успех приходит к тем, кто работает. (Success comes to those who work)',
    language: 'russian',
    mastered: false,
  },
  {
    id: '11',
    word: 'Счастье',
    translation: 'Happiness',
    pronunciation: 'schastʹye',
    example: 'Счастье в мелочах. (Happiness is in the little things)',
    language: 'russian',
    mastered: false,
  },
  {
    id: '12',
    word: 'Мечта',
    translation: 'Dream',
    pronunciation: 'mechta',
    example: 'Следуй за своей мечтой. (Follow your dream)',
    language: 'russian',
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

// 16 Personality Questions for MBTI-style assessment
export const personalityQuestions = [
  {
    id: 1,
    question: 'At a social gathering, you typically:',
    options: [
      { text: 'Talk to many people, including strangers', type: 'E' },
      { text: 'Talk mainly to people you already know', type: 'I' },
    ],
  },
  {
    id: 2,
    question: 'You are more drawn to:',
    options: [
      { text: 'Concrete facts and real experiences', type: 'S' },
      { text: 'Abstract theories and possibilities', type: 'N' },
    ],
  },
  {
    id: 3,
    question: 'When making decisions, you tend to:',
    options: [
      { text: 'Analyze pros and cons logically', type: 'T' },
      { text: 'Consider how it affects people emotionally', type: 'F' },
    ],
  },
  {
    id: 4,
    question: 'Your preferred work style is:',
    options: [
      { text: 'Plan ahead and follow schedules', type: 'J' },
      { text: 'Stay flexible and adapt as you go', type: 'P' },
    ],
  },
  {
    id: 5,
    question: 'After a long week, you recharge by:',
    options: [
      { text: 'Going out with friends or to social events', type: 'E' },
      { text: 'Spending quiet time alone or with close friends', type: 'I' },
    ],
  },
  {
    id: 6,
    question: 'When learning something new, you prefer:',
    options: [
      { text: 'Step-by-step practical instructions', type: 'S' },
      { text: 'Understanding the big picture first', type: 'N' },
    ],
  },
  {
    id: 7,
    question: 'In conflicts, you typically:',
    options: [
      { text: 'Focus on being fair and objective', type: 'T' },
      { text: 'Focus on maintaining harmony', type: 'F' },
    ],
  },
  {
    id: 8,
    question: 'You feel most comfortable when:',
    options: [
      { text: 'Things are decided and settled', type: 'J' },
      { text: 'Options are kept open', type: 'P' },
    ],
  },
  {
    id: 9,
    question: 'In group discussions, you usually:',
    options: [
      { text: 'Speak up frequently and share ideas readily', type: 'E' },
      { text: 'Listen more and share when asked', type: 'I' },
    ],
  },
  {
    id: 10,
    question: 'You are more interested in:',
    options: [
      { text: 'What is actual and present', type: 'S' },
      { text: 'What could be possible in the future', type: 'N' },
    ],
  },
  {
    id: 11,
    question: 'When giving feedback, you tend to be:',
    options: [
      { text: 'Direct and honest, even if it might hurt', type: 'T' },
      { text: 'Diplomatic and sensitive to feelings', type: 'F' },
    ],
  },
  {
    id: 12,
    question: 'Your workspace is usually:',
    options: [
      { text: 'Organized and tidy', type: 'J' },
      { text: 'A bit messy but you know where things are', type: 'P' },
    ],
  },
  {
    id: 13,
    question: 'You find small talk:',
    options: [
      { text: 'Enjoyable and energizing', type: 'E' },
      { text: 'Draining and prefer deep conversations', type: 'I' },
    ],
  },
  {
    id: 14,
    question: 'You trust more in:',
    options: [
      { text: 'Your direct experience and observations', type: 'S' },
      { text: 'Your gut feelings and intuition', type: 'N' },
    ],
  },
  {
    id: 15,
    question: 'You value more:',
    options: [
      { text: 'Truth and justice', type: 'T' },
      { text: 'Compassion and mercy', type: 'F' },
    ],
  },
  {
    id: 16,
    question: 'When starting a project, you prefer to:',
    options: [
      { text: 'Make a detailed plan before starting', type: 'J' },
      { text: 'Dive in and figure it out along the way', type: 'P' },
    ],
  },
]
