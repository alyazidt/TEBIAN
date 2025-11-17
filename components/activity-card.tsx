import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"

interface ActivityCardProps {
  activity: {
    id: number
    title: string
    description: string
    icon: string
    type: string
    color: string
  }
}

export function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <Link href={`/activities/${activity.id}`}>
      <Card className="kid-card bg-card border-2 p-6 cursor-pointer group relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5">
          <div className={`absolute top-0 right-0 w-32 h-32 bg-${activity.color} rounded-full blur-3xl`}></div>
        </div>

        <div className="relative z-10">
          <div className="text-center mb-4">
            <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{activity.icon}</div>
            <Badge variant="secondary" className="mb-2">
              {activity.type}
            </Badge>
            <h4 className="text-lg font-bold mb-2 leading-relaxed">{activity.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{activity.description}</p>
          </div>

          <div className="flex items-center justify-center">
            <div
              className={`w-12 h-12 bg-${activity.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}
            >
              <Play className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}
