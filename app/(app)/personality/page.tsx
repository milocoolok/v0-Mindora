'use client'

import { useState } from 'react'
import { TopNavbar } from '@/components/top-navbar'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { mockPersonalityInsights, zodiacInsights } from '@/lib/mock-data'
import { 
  Brain, Star, Sparkles, Heart, Briefcase, Users, CheckCircle2, 
  AlertCircle, ArrowRight, Sun, Moon, Zap, Flame
} from 'lucide-react'

const mbtiQuestions = [
  { id: 1, question: 'At a party, you tend to:', optionA: 'Interact with many people', optionB: 'Interact with a few people you know well' },
  { id: 2, question: 'You prefer to:', optionA: 'Focus on facts and details', optionB: 'Focus on possibilities and ideas' },
  { id: 3, question: 'When making decisions, you:', optionA: 'Consider logic first', optionB: 'Consider how it affects others first' },
  { id: 4, question: 'You prefer to:', optionA: 'Have things decided', optionB: 'Keep options open' },
]

const zodiacSigns = [
  { name: 'Aries', symbol: '♈', element: 'Fire', dates: 'Mar 21 - Apr 19' },
  { name: 'Taurus', symbol: '♉', element: 'Earth', dates: 'Apr 20 - May 20' },
  { name: 'Gemini', symbol: '♊', element: 'Air', dates: 'May 21 - Jun 20' },
  { name: 'Cancer', symbol: '♋', element: 'Water', dates: 'Jun 21 - Jul 22' },
  { name: 'Leo', symbol: '♌', element: 'Fire', dates: 'Jul 23 - Aug 22' },
  { name: 'Virgo', symbol: '♍', element: 'Earth', dates: 'Aug 23 - Sep 22' },
  { name: 'Libra', symbol: '♎', element: 'Air', dates: 'Sep 23 - Oct 22' },
  { name: 'Scorpio', symbol: '♏', element: 'Water', dates: 'Oct 23 - Nov 21' },
  { name: 'Sagittarius', symbol: '♐', element: 'Fire', dates: 'Nov 22 - Dec 21' },
  { name: 'Capricorn', symbol: '♑', element: 'Earth', dates: 'Dec 22 - Jan 19' },
  { name: 'Aquarius', symbol: '♒', element: 'Air', dates: 'Jan 20 - Feb 18' },
  { name: 'Pisces', symbol: '♓', element: 'Water', dates: 'Feb 19 - Mar 20' },
]

const elementColors = {
  Fire: 'text-orange-500 bg-orange-500/10',
  Earth: 'text-green-600 bg-green-500/10',
  Air: 'text-sky-500 bg-sky-500/10',
  Water: 'text-blue-500 bg-blue-500/10',
}

export default function PersonalityPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B'>>({})
  const [showResults, setShowResults] = useState(true) // Show results by default with mock data
  const [selectedZodiac, setSelectedZodiac] = useState('libra')
  
  const insight = mockPersonalityInsights.INFJ
  const zodiac = zodiacInsights[selectedZodiac as keyof typeof zodiacInsights] || zodiacInsights.libra

  const handleAnswer = (answer: 'A' | 'B') => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: answer }))
    if (currentQuestion < mbtiQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      setShowResults(true)
    }
  }

  const resetTest = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

  return (
    <>
      <TopNavbar title="Personality" subtitle="Discover who you are" />
      <main className="flex-1 overflow-auto">
        <div className="container max-w-6xl mx-auto p-4 md:p-6 space-y-6">
          <Tabs defaultValue="mbti" className="space-y-6">
            <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto">
              <TabsTrigger value="mbti" className="gap-2">
                <Brain className="h-4 w-4" />
                MBTI Type
              </TabsTrigger>
              <TabsTrigger value="astrology" className="gap-2">
                <Star className="h-4 w-4" />
                Astrology
              </TabsTrigger>
            </TabsList>

            {/* MBTI Tab */}
            <TabsContent value="mbti" className="space-y-6">
              {!showResults ? (
                <Card className="max-w-2xl mx-auto border-border/50">
                  <CardHeader className="text-center">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <Brain className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle>Personality Assessment</CardTitle>
                    <CardDescription>
                      Question {currentQuestion + 1} of {mbtiQuestions.length}
                    </CardDescription>
                    <Progress 
                      value={(currentQuestion / mbtiQuestions.length) * 100} 
                      className="h-2 mt-4" 
                    />
                  </CardHeader>
                  <CardContent className="space-y-6 pb-8">
                    <h3 className="text-xl font-semibold text-center text-foreground">
                      {mbtiQuestions[currentQuestion].question}
                    </h3>
                    <div className="grid gap-4">
                      <Button
                        variant="outline"
                        className="h-auto p-4 text-left rounded-xl hover:bg-primary/10 hover:border-primary transition-all"
                        onClick={() => handleAnswer('A')}
                      >
                        <span className="font-medium mr-3 text-primary">A.</span>
                        {mbtiQuestions[currentQuestion].optionA}
                      </Button>
                      <Button
                        variant="outline"
                        className="h-auto p-4 text-left rounded-xl hover:bg-primary/10 hover:border-primary transition-all"
                        onClick={() => handleAnswer('B')}
                      >
                        <span className="font-medium mr-3 text-primary">B.</span>
                        {mbtiQuestions[currentQuestion].optionB}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6">
                  {/* Type Result */}
                  <Card className="border-0 bg-gradient-to-br from-primary/90 to-primary overflow-hidden">
                    <CardContent className="p-6 md:p-8 relative">
                      <div className="absolute top-0 right-0 w-48 h-48 bg-primary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/4" />
                      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                        <div className="w-24 h-24 rounded-3xl bg-primary-foreground/20 flex items-center justify-center">
                          <span className="text-4xl font-bold text-primary-foreground">INFJ</span>
                        </div>
                        <div className="text-center md:text-left">
                          <Badge variant="secondary" className="mb-2">The Advocate</Badge>
                          <h2 className="text-2xl font-bold text-primary-foreground mb-2">
                            Your Personality Type
                          </h2>
                          <p className="text-primary-foreground/80 max-w-md">
                            INFJs are creative nurturers with a strong sense of personal integrity and a drive to help others realize their potential.
                          </p>
                          <Button 
                            variant="secondary" 
                            size="sm" 
                            className="mt-4 rounded-xl"
                            onClick={resetTest}
                          >
                            Retake Test
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Insights Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Strengths */}
                    <Card className="border-border/50">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          </div>
                          <CardTitle className="text-lg">Strengths</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {insight.strengths.map((strength, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Sparkles className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{strength}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Weaknesses */}
                    <Card className="border-border/50">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                            <AlertCircle className="h-5 w-5 text-orange-500" />
                          </div>
                          <CardTitle className="text-lg">Growth Areas</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {insight.weaknesses.map((weakness, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Zap className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{weakness}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Relationship Advice */}
                    <Card className="border-border/50">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center">
                            <Heart className="h-5 w-5 text-pink-500" />
                          </div>
                          <CardTitle className="text-lg">Relationships</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {insight.relationshipAdvice}
                        </p>
                      </CardContent>
                    </Card>

                    {/* Career Advice */}
                    <Card className="border-border/50">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                            <Briefcase className="h-5 w-5 text-blue-500" />
                          </div>
                          <CardTitle className="text-lg">Career</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {insight.careerAdvice}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </TabsContent>

            {/* Astrology Tab */}
            <TabsContent value="astrology" className="space-y-6">
              {/* Zodiac Selector */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Select Your Sign</CardTitle>
                  <CardDescription>Choose your zodiac sign to see your insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                    {zodiacSigns.map((sign) => {
                      const isSelected = selectedZodiac === sign.name.toLowerCase()
                      return (
                        <button
                          key={sign.name}
                          onClick={() => setSelectedZodiac(sign.name.toLowerCase())}
                          className={`p-3 rounded-xl border text-center transition-all ${
                            isSelected 
                              ? 'bg-primary/10 border-primary shadow-md' 
                              : 'border-border/50 hover:border-primary/30 hover:bg-muted/30'
                          }`}
                        >
                          <span className="text-2xl block mb-1">{sign.symbol}</span>
                          <span className="text-xs font-medium text-foreground">{sign.name}</span>
                        </button>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Zodiac Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-0 bg-gradient-to-br from-chart-1/20 to-chart-2/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-card flex items-center justify-center text-3xl">
                        {zodiacSigns.find(z => z.name.toLowerCase() === selectedZodiac)?.symbol}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground capitalize">{selectedZodiac}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className={elementColors[zodiac.element as keyof typeof elementColors]}>
                            {zodiac.element}
                          </Badge>
                          <span className="text-sm text-muted-foreground">Ruled by {zodiac.ruling}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                          <Sun className="h-4 w-4 text-chart-5" />
                          Key Traits
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {zodiac.traits.map((trait) => (
                            <Badge key={trait} variant="secondary">{trait}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                          <Flame className="h-4 w-4 text-orange-500" />
                          Strengths
                        </h4>
                        <p className="text-sm text-muted-foreground">{zodiac.strengths}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                          <Moon className="h-4 w-4 text-chart-3" />
                          Challenges
                        </h4>
                        <p className="text-sm text-muted-foreground">{zodiac.challenges}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card className="border-border/50">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center">
                          <Users className="h-5 w-5 text-pink-500" />
                        </div>
                        <CardTitle className="text-lg">Compatible Signs</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {zodiac.compatibility.map((sign) => (
                          <Badge key={sign} variant="outline" className="py-1.5 px-3">
                            {zodiacSigns.find(z => z.name === sign)?.symbol} {sign}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-transparent">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Sparkles className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">Daily Insight</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed italic">
                        &quot;{zodiac.dailyTip}&quot;
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </>
  )
}
