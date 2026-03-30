import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { I18nProvider } from '@/lib/i18n'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <I18nProvider>
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <SidebarInset className="flex flex-col flex-1">
            {children}
          </SidebarInset>
        </div>
      </SidebarProvider>
    </I18nProvider>
  )
}
