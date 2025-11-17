import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

export function UpcomingLessons() {
  const lessons = [
    {
      child: "أحمد",
      avatar: "👦",
      lesson: "الحروف العربية",
      time: "اليوم، 4:00 م",
      duration: "15 دقيقة",
      color: "primary",
    },
    {
      child: "فاطمة",
      avatar: "👧",
      lesson: "الأرقام والحساب",
      time: "اليوم، 5:30 م",
      duration: "20 دقيقة",
      color: "secondary",
    },
    {
      child: "أحمد",
      avatar: "👦",
      lesson: "العلوم المرحة",
      time: "غداً، 3:00 م",
      duration: "25 دقيقة",
      color: "accent",
    },
    {
      child: "فاطمة",
      avatar: "👧",
      lesson: "الألوان والأشكال",
      time: "غداً، 4:00 م",
      duration: "15 دقيقة",
      color: "primary",
    },
  ]

  return (
    <Card className="p-6 border-2">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
          <Calendar className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-xl font-bold">الدروس القادمة</h3>
      </div>

      <div className="space-y-4">
        {lessons.map((lesson, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-xl flex-shrink-0">
              {lesson.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-bold">{lesson.child}</h4>
                <Badge variant="secondary" className="text-xs">
                  {lesson.lesson}
                </Badge>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {lesson.time}
                </div>
                <span>•</span>
                <span>{lesson.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
