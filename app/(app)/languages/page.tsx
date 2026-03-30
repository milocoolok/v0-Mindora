'use client'

import { useState } from 'react'
import { TopNavbar } from '@/components/top-navbar'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { mockVocabulary } from '@/lib/mock-data'
import type { VocabularyCard } from '@/lib/types'
import { 
  Languages, Flame, CheckCircle2, Volume2, RotateCcw,
  ChevronLeft, ChevronRight, Star, Target, BookOpen
} from 'lucide-react'

export default function LanguagesPage() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [showTranslation, setShowTranslation] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState<'english' | 'chinese'>('english')
  const [masteredCards, setMasteredCards] = useState<Set<string>>(
    new Set(mockVocabulary.filter(c => c.mastered).map(c => c.id))
  )

  const filteredCards = mockVocabulary.filter(c => c.language === selectedLanguage)
  const currentCard = filteredCards[currentCardIndex]

  const nextCard = () => {
    setShowTranslation(false)
    setCurrentCardIndex((prev) => (prev + 1) % filteredCards.length)
  }

  const prevCard = () => {
    setShowTranslation(false)
    setCurrentCardIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length)
  }

  const toggleMastered = (id: string) => {
    setMasteredCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const masteredCount = filteredCards.filter(c => masteredCards.has(c.id)).length
  const progressPercent = Math.round((masteredCount / filteredCards.length) * 100)

  return (
    <>
      <TopNavbar title="Languages" subtitle="Build your vocabulary daily" />
      <main className="flex-1 overflow-auto">
        <div className="container max-w-4xl mx-auto p-4 md:p-6 space-y-6">
          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{filteredCards.length}</p>
                    <p className="text-xs text-muted-foreground">Total Words</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{masteredCount}</p>
                    <p className="text-xs text-muted-foreground">Mastered</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <Flame className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">21</p>
                    <p className="text-xs text-muted-foreground">Day Streak</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-chart-5/10 flex items-center justify-center">
                    <Star className="h-5 w-5 text-chart-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{progressPercent}%</p>
                    <p className="text-xs text-muted-foreground">Progress</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Language Selector */}
          <Tabs 
            defaultValue="english" 
            className="space-y-6"
            onValueChange={(v) => {
              setSelectedLanguage(v as 'english' | 'chinese')
              setCurrentCardIndex(0)
              setShowTranslation(false)
            }}
          >
            <TabsList className="grid w-full max-w-sm grid-cols-2 mx-auto">
              <TabsTrigger value="english" className="gap-2">
                <span className="text-lg">🇬🇧</span>
                English
              </TabsTrigger>
              <TabsTrigger value="chinese" className="gap-2">
                <span className="text-lg">🇨🇳</span>
                Chinese
              </TabsTrigger>
            </TabsList>

            <TabsContent value={selectedLanguage} className="space-y-6">
              {/* Progress Bar */}
              <Card className="border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">Learning Progress</span>
                    <span className="text-sm text-muted-foreground">{masteredCount}/{filteredCards.length} mastered</span>
                  </div>
                  <Progress value={progressPercent} className="h-3" />
                </CardContent>
              </Card>

              {/* Flashcard */}
              {currentCard && (
                <Card className="border-border/50 overflow-hidden">
                  <CardContent className="p-0">
                    <div 
                      className="min-h-80 flex flex-col items-center justify-center p-8 cursor-pointer transition-all"
                      onClick={() => setShowTranslation(!showTranslation)}
                    >
                      <div className="text-center">
                        <Badge 
                          variant="outline" 
                          className={masteredCards.has(currentCard.id) ? 'bg-green-500/10 text-green-500 border-green-500/20' : ''}
                        >
                          {masteredCards.has(currentCard.id) ? 'Mastered' : 'Learning'}
                        </Badge>
                        
                        <h2 className={`mt-6 font-bold text-foreground ${selectedLanguage === 'chinese' ? 'text-5xl' : 'text-4xl'}`}>
                          {currentCard.word}
                        </h2>
                        
                        {currentCard.pronunciation && (
                          <p className="mt-2 text-muted-foreground">{currentCard.pronunciation}</p>
                        )}
                        
                        <div className={`mt-6 transition-all duration-300 ${showTranslation ? 'opacity-100' : 'opacity-0'}`}>
                          <p className="text-xl text-primary font-medium">{currentCard.translation}</p>
                          <p className="mt-4 text-muted-foreground italic max-w-md mx-auto">
                            &quot;{currentCard.example}&quot;
                          </p>
                        </div>
                        
                        {!showTranslation && (
                          <p className="mt-8 text-sm text-muted-foreground">Tap to reveal translation</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="border-t border-border p-4 flex items-center justify-between bg-muted/30">
                      <Button variant="ghost" size="icon" onClick={prevCard} className="rounded-xl">
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                      
                      <div className="flex items-center gap-3">
                        <Button variant="ghost" size="icon" className="rounded-xl">
                          <Volume2 className="h-5 w-5" />
                        </Button>
                        <Button 
                          variant={masteredCards.has(currentCard.id) ? 'default' : 'outline'}
                          size="sm"
                          className="rounded-xl"
                          onClick={() => toggleMastered(currentCard.id)}
                        >
                          {masteredCards.has(currentCard.id) ? (
                            <>
                              <CheckCircle2 className="h-4 w-4 mr-1" />
                              Mastered
                            </>
                          ) : (
                            <>
                              <Star className="h-4 w-4 mr-1" />
                              Mark as Mastered
                            </>
                          )}
                        </Button>
                        <Button variant="ghost" size="icon" className="rounded-xl">
                          <RotateCcw className="h-5 w-5" />
                        </Button>
                      </div>
                      
                      <Button variant="ghost" size="icon" onClick={nextCard} className="rounded-xl">
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* All Words List */}
              <Card className="border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Word List</CardTitle>
                      <CardDescription>All vocabulary words</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {filteredCards.map((card, index) => (
                      <button
                        key={card.id}
                        onClick={() => {
                          setCurrentCardIndex(index)
                          setShowTranslation(false)
                        }}
                        className={`w-full flex items-center gap-4 p-3 rounded-xl text-left transition-colors ${
                          currentCardIndex === index 
                            ? 'bg-primary/10 border border-primary/20' 
                            : 'hover:bg-muted/50'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium ${
                          masteredCards.has(card.id) 
                            ? 'bg-green-500/10 text-green-500' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {masteredCards.has(card.id) ? <CheckCircle2 className="h-4 w-4" /> : index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground">{card.word}</p>
                          <p className="text-sm text-muted-foreground truncate">{card.translation}</p>
                        </div>
                        {card.pronunciation && (
                          <span className="text-xs text-muted-foreground">{card.pronunciation}</span>
                        )}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </>
  )
}
