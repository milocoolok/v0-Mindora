import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sparkles, Target, Brain, Heart, ArrowRight, CheckCircle2 } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Goal Tracking',
    description: 'Set meaningful goals and track your progress with streaks and visual insights.',
  },
  {
    icon: Sparkles,
    title: 'AI Guidance',
    description: 'Get personalized advice powered by AI to help you overcome challenges.',
  },
  {
    icon: Brain,
    title: 'Self Discovery',
    description: 'Explore your personality with MBTI tests and astrological insights.',
  },
  {
    icon: Heart,
    title: 'Life Balance',
    description: 'Visualize and improve balance across all areas of your life.',
  },
]

const benefits = [
  'Track daily habits with streak motivation',
  'Get AI-powered personalized advice',
  'Discover your personality type',
  'Balance all areas of your life',
  'Learn new languages daily',
  'Access curated self-improvement content',
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Mindora</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Sign in
            </Link>
            <Button asChild className="rounded-xl">
              <Link href="/dashboard">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/40 rounded-full blur-3xl opacity-50" />
        
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Your personal growth companion
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
            Discover yourself.
            <br />
            <span className="text-primary">Grow every day.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            Set meaningful goals, get AI-powered insights, and unlock your full potential with personalized guidance tailored just for you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-xl text-base px-8 h-12" asChild>
              <Link href="/dashboard">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-xl text-base px-8 h-12" asChild>
              <Link href="/login">
                Sign In
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything you need to grow
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Mindora combines powerful tools to help you understand yourself better and achieve your goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-card border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Built for your <span className="text-primary">growth journey</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Whether you want to build better habits, understand yourself deeply, or find your career path, Mindora is here to guide you.
              </p>
              
              <div className="grid gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-primary/20 flex items-center justify-center animate-float">
                    <Sparkles className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-foreground mb-2">10,000+</p>
                  <p className="text-muted-foreground">Goals achieved by our users</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-3xl bg-gradient-to-br from-primary/90 to-primary p-8 md:p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/4" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to transform your life?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                Join thousands of people who are already on their journey to becoming the best version of themselves.
              </p>
              <Button size="lg" variant="secondary" className="rounded-xl text-base px-8 h-12" asChild>
                <Link href="/dashboard">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">Mindora</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Built with care for your personal growth journey.
          </p>
        </div>
      </footer>
    </div>
  )
}
