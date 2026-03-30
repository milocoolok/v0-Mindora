import { TopNavbar } from '@/components/top-navbar'
import { WelcomeCard } from '@/components/dashboard/welcome-card'
import { GoalsOverview } from '@/components/dashboard/goals-overview'
import { LifeBalanceCard } from '@/components/dashboard/life-balance-card'
import { AIInsightsCard } from '@/components/dashboard/ai-insights-card'
import { QuickActions } from '@/components/dashboard/quick-actions'
import { RecentActivity } from '@/components/dashboard/recent-activity'

export default function DashboardPage() {
  return (
    <>
      <TopNavbar />
      <main className="flex-1 overflow-auto">
        <div className="container max-w-7xl mx-auto p-4 md:p-6 space-y-6">
          {/* Welcome Section */}
          <WelcomeCard />
          
          {/* Quick Actions */}
          <QuickActions />
          
          {/* Main Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Goals Progress */}
            <div className="lg:col-span-2">
              <GoalsOverview />
            </div>
            
            {/* Life Balance */}
            <div className="lg:col-span-1">
              <LifeBalanceCard />
            </div>
          </div>
          
          {/* Bottom Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* AI Insights */}
            <AIInsightsCard />
            
            {/* Recent Activity */}
            <RecentActivity />
          </div>
        </div>
      </main>
    </>
  )
}
