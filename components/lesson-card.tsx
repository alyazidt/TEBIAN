import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Play, CheckCircle2 } from "lucide-react"

interface LessonCardProps {
  lesson: {
    id: number
    title: string
    description: string
    icon: string
    duration: string
    progress: number
    stars: number
    difficulty: string
    category: string
    color: string
  }
}

export function LessonCard({ lesson }: LessonCardProps) {
  const isStarted = lesson.progress > 0
  const isCompleted = lesson.progress === 100

  return (
    <Link href={`/lessons/${lesson.id}`}>
      <Card className="kid-card bg-card border-2 p-6 cursor-pointer group relative overflow-hidden">
        {isCompleted && (
          <div className="absolute top-4 left-4 z-10">
            <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
          </div>
        )}

        <div className="text-center mb-4">
          <div className="text-6xl mb-3 group-hover:scale-110 transition-transform">{lesson.icon}</div>
          <Badge variant="secondary" className="mb-2">
            {lesson.category}
          </Badge>
          <h4 className="text-xl font-bold mb-2 leading-relaxed">{lesson.title}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{lesson.description}</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">{lesson.duration}</span>
            </div>
            <Badge variant="outline" className="text-xs">
              {lesson.difficulty}
            </Badge>
          </div>

          {isStarted && (
            <div>
              <div className="flex items-center justify-between mb-2 text-sm">
                <span className="text-muted-foreground">التقدم</span>
                <span className="font-bold">{lesson.progress}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full bg-${lesson.color} rounded-full transition-all duration-500`}
                  style={{ width: `${lesson.progress}%` }}
                ></div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              {[...Array(3)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < lesson.stars ? "text-accent fill-accent" : "text-muted-foreground"}`}
                />
              ))}
            </div>

            <Button className={`kid-button bg-${lesson.color} text-white hover:bg-${lesson.color}/90 py-2 px-6`}>
              <Play className="ml-2 w-5 h-5" />
              {isStarted ? "استمر" : "ابدأ"}
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  )
}
