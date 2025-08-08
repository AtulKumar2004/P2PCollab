import  PageLayout  from '@/components/PageLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Settings, BarChart3, Shield, Database, UserCheck } from 'lucide-react'

export default function AdminFaculty() {
  const tools = [
    {
      icon: Users,
      title: "User Management",
      description: "Manage student, faculty, and recruiter accounts",
      action: "Manage Users"
    },
    {
      icon: Settings,
      title: "System Configuration",
      description: "Configure platform settings and preferences",
      action: "Configure"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "View platform usage and engagement metrics",
      action: "View Analytics"
    },
    {
      icon: Shield,
      title: "Security Management",
      description: "Monitor security and access controls",
      action: "Security Settings"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Backup, export, and manage platform data",
      action: "Manage Data"
    },
    {
      icon: UserCheck,
      title: "Account Verification",
      description: "Review and approve new account registrations",
      action: "Review Accounts"
    }
  ]

  return (
    <PageLayout 
      title="Admin & Faculty Tools" 
      description="Comprehensive tools for platform administration and faculty management"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <tool.icon className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">{tool.title}</CardTitle>
              </div>
              <CardDescription className="text-gray-400">
                {tool.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                {tool.action}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageLayout>
  )
}
