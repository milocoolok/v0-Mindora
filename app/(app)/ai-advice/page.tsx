'use client'

import { useState } from 'react'
import { TopNavbar } from '@/components/top-navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { mockAITopics } from '@/lib/mock-data'
import { 
  Sparkles, Send, Zap, Heart, Users, Compass, Wind, Target,
  RefreshCw, ThumbsUp, ThumbsDown, Copy, Check
} from 'lucide-react'

const topicIcons = {
  zap: Zap,
  heart: Heart,
  users: Users,
  compass: Compass,
  wind: Wind,
  target: Target,
}

const mockResponses: Record<string, string> = {
  '1': `Finding motivation starts with understanding your "why." Ask yourself: What matters most to you? What would achieving your goals mean for your life?

Here are some strategies to boost your motivation:

**1. Start Small** - Break big goals into tiny, manageable steps. Each small win builds momentum.

**2. Visualize Success** - Spend 5 minutes each day imagining how you'll feel when you achieve your goal.

**3. Create Accountability** - Share your goals with someone who supports you. Regular check-ins keep you on track.

**4. Celebrate Progress** - Don't wait until the end. Acknowledge and reward yourself for milestones along the way.

Remember, motivation fluctuates—that's normal. What matters is building habits that carry you through the low points.`,

  '2': `Self-love is the foundation of all growth. It's not selfish—it's necessary.

Here's how to cultivate a healthier relationship with yourself:

**Practice Self-Compassion** - Speak to yourself the way you'd speak to a dear friend. Replace criticism with understanding.

**Set Boundaries** - Saying "no" to others sometimes means saying "yes" to yourself. Your needs matter.

**Honor Your Body** - Rest when you're tired. Nourish yourself. Move in ways that feel good.

**Acknowledge Your Worth** - You don't have to earn love or acceptance. You are worthy as you are.

Start each day with one thing you appreciate about yourself. Watch how this small practice transforms your inner dialogue.`,

  default: `Thank you for sharing what's on your mind. Here's some guidance based on what you've described:

**Reflect** - Take time to understand the root of your challenge. Often, the surface problem isn't the real issue.

**Take Action** - Even small steps forward can create momentum. Progress, not perfection, is the goal.

**Seek Support** - You don't have to figure everything out alone. Reach out to trusted friends, family, or professionals.

**Be Patient** - Growth takes time. Trust the process and be kind to yourself along the way.

Remember, every challenge is an opportunity for growth. You have the strength to navigate this.`
}

export default function AIAdvicePage() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const [userInput, setUserInput] = useState('')
  const [response, setResponse] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleTopicClick = (topicId: string) => {
    setSelectedTopic(topicId)
    setUserInput('')
    setResponse(null)
  }

  const handleSubmit = async () => {
    if (!userInput.trim() && !selectedTopic) return
    
    setIsLoading(true)
    // Simulate AI response delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const responseText = selectedTopic 
      ? mockResponses[selectedTopic] || mockResponses.default
      : mockResponses.default
    
    setResponse(responseText)
    setIsLoading(false)
  }

  const handleCopy = async () => {
    if (response) {
      await navigator.clipboard.writeText(response)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleReset = () => {
    setSelectedTopic(null)
    setUserInput('')
    setResponse(null)
  }

  return (
    <>
      <TopNavbar title="AI Advice" subtitle="Get personalized guidance" />
      <main className="flex-1 overflow-auto">
        <div className="container max-w-4xl mx-auto p-4 md:p-6 space-y-6">
          {/* Header Card */}
          <Card className="border-0 bg-gradient-to-br from-primary/90 to-primary overflow-hidden">
            <CardContent className="p-6 md:p-8 relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/4" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mb-4">
                  <Sparkles className="h-7 w-7 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-primary-foreground mb-2">
                  What can I help you with today?
                </h2>
                <p className="text-primary-foreground/80 max-w-lg">
                  Choose a topic below or describe what you&apos;re struggling with. I&apos;ll provide personalized guidance to support your journey.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Topics Grid */}
          {!response && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {mockAITopics.map((topic) => {
                const Icon = topicIcons[topic.icon as keyof typeof topicIcons] || Sparkles
                const isSelected = selectedTopic === topic.id
                
                return (
                  <button
                    key={topic.id}
                    onClick={() => handleTopicClick(topic.id)}
                    className={`group p-5 rounded-2xl border text-left transition-all duration-300 ${
                      isSelected 
                        ? 'bg-primary/10 border-primary shadow-md' 
                        : 'bg-card border-border/50 hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all ${
                      isSelected 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground'
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{topic.title}</h3>
                    <p className="text-sm text-muted-foreground">{topic.description}</p>
                  </button>
                )
              })}
            </div>
          )}

          {/* Input Section */}
          {!response && (
            <Card className="border-border/50">
              <CardContent className="p-5">
                <Textarea
                  placeholder="Describe what you're going through or ask for specific advice..."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  className="min-h-32 resize-none rounded-xl border-0 bg-muted/50 focus-visible:ring-1 focus-visible:ring-primary"
                />
                <div className="flex justify-end mt-4">
                  <Button 
                    onClick={handleSubmit}
                    disabled={!userInput.trim() && !selectedTopic}
                    className="rounded-xl"
                  >
                    {isLoading ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Thinking...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Get Advice
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Response Section */}
          {response && (
            <Card className="border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">AI Guidance</CardTitle>
                  </div>
                  <Button variant="ghost" size="sm" onClick={handleReset} className="rounded-xl">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    New Question
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="prose prose-sm max-w-none text-foreground">
                  {response.split('\n').map((line, i) => {
                    if (line.startsWith('**') && line.endsWith('**')) {
                      return <p key={i} className="font-semibold text-foreground mt-4 mb-1">{line.replace(/\*\*/g, '')}</p>
                    }
                    if (line.startsWith('**')) {
                      return <p key={i} className="font-medium text-foreground mt-3">{line.replace(/\*\*/g, '')}</p>
                    }
                    if (line.trim()) {
                      return <p key={i} className="text-muted-foreground leading-relaxed">{line}</p>
                    }
                    return null
                  })}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="rounded-xl">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      Helpful
                    </Button>
                    <Button variant="ghost" size="sm" className="rounded-xl">
                      <ThumbsDown className="h-4 w-4 mr-1" />
                      Not helpful
                    </Button>
                  </div>
                  <Button variant="outline" size="sm" onClick={handleCopy} className="rounded-xl">
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 mr-1" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-1" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </>
  )
}
