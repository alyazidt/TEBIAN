import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Clock, BookOpen, Eye, TrendingUp } from "lucide-react"

interface ChildCardProps {
  child: {
    id: number
    name: string
    avatar: string
    age: number
    grade: string
    progress: number
    lessonsThisWeek: number
    hoursThisWeek: number
    stars: number
    status: string
  }
}

export function ChildCard({ child }: ChildCardProps) {
  return (
    <Card className="p-6 border-2 hover:shadow-lg transition-all duration-200">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-3xl">
            {child.avatar}
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-1">{child.name}</h3>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{child.grade}</Badge>
              <span className="text-sm text-muted-foreground">{child.age} سنوات</span>
            </div>
          </div>
        </div>
        <Badge variant={child.status === "نشط" ? "default" : "secondary"}>{child.status}</Badge>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-3 bg-primary/5 rounded-xl">
          <div className="flex items-center justify-center mb-1">
            <BookOpen className="w-5 h-5 text-primary" />
          </div>
          <p className="text-xl font-bold text-primary">{child.lessonsThisWeek}</p>
          <p className="text-xs text-muted-foreground">درس</p>
        </div>

        <div className="text-center p-3 bg-secondary/5 rounded-xl">
          <div className="flex items-center justify-center mb-1">
            <Clock className="w-5 h-5 text-secondary" />
          </div>
          <p className="text-xl font-bold text-secondary">{child.hoursThisWeek}</p>
          <p className="text-xs text-muted-foreground">ساعة</p>
        </div>

        <div className="text-center p-3 bg-accent/5 rounded-xl">
          <div className="flex items-center justify-center mb-1">
            <Star className="w-5 h-5 text-accent" />
          </div>
          <p className="text-xl font-bold text-accent">{child.stars}</p>
          <p className="text-xs text-muted-foreground">نجمة</p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold">التقدم الإجمالي</span>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4 text-success" />
            <span className="text-sm font-bold text-success">{child.progress}%</span>
          </div>
        </div>
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-l from-primary to-secondary rounded-full transition-all duration-500"
            style={{ width: `${child.progress}%` }}
          ></div>
        </div>
      </div>

      <Link href={`/parent/children/${child.id}`}>
        <Button className="w-full bg-primary text-white">
          <Eye className="ml-2 w-5 h-5" />
          عرض التفاصيل الكاملة
        </Button>
      </Link>
    </Card>
  )
}
