import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Eye } from "lucide-react"

interface StudentCardProps {
  student: {
    id: number
    name: string
    avatar: string
    progress: number
    lessonsCompleted: number
    lastActive: string
    status: string
  }
}

export function StudentCard({ student }: StudentCardProps) {
  return (
    <Card className="p-6 border-2 hover:shadow-lg transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-2xl">
            {student.avatar}
          </div>
          <div>
            <h4 className="font-bold">{student.name}</h4>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              {student.lastActive}
            </div>
          </div>
        </div>
        <Badge variant={student.status === "نشط" ? "default" : "secondary"} className="text-xs">
          {student.status}
        </Badge>
      </div>

      <div className="space-y-3">
        <div>
          <div className="flex items-center justify-between mb-2 text-sm">
            <span className="text-muted-foreground">التقدم</span>
            <span className="font-bold">{student.progress}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-l from-primary to-secondary rounded-full transition-all duration-500"
              style={{ width: `${student.progress}%` }}
            ></div>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">الدروس المكتملة</span>
          <span className="font-bold">{student.lessonsCompleted}</span>
        </div>

        <Link href={`/teacher/students/${student.id}`}>
          <Button variant="outline" className="w-full mt-2 bg-transparent">
            <Eye className="ml-2 w-4 h-4" />
            عرض التفاصيل
          </Button>
        </Link>
      </div>
    </Card>
  )
}
