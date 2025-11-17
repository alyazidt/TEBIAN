"use client"

import { use } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ChevronRight, Star, BookOpen, Clock, TrendingUp } from "lucide-react"

export default function StudentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  const student = {
    name: "أحمد محمد",
    avatar: "👦",
    grade: "الصف الثاني",
    joinDate: "سبتمبر 2024",
    totalStars: 250,
    lessonsCompleted: 12,
    hoursLearned: 8.5,
    averageScore: 85,
  }

  const subjects = [
    { name: "اللغة العربية", progress: 85, lessons: 12, stars: 36 },
    { name: "الرياضيات", progress: 78, lessons: 10, stars: 30 },
    { name: "العلوم", progress: 92, lessons: 8, stars: 24 },
  ]

  const recentLessons = [
    { title: "الحروف العربية - الجزء الأول", date: "اليوم", score: 95, stars: 3 },
    { title: "الأرقام من 1 إلى 10", date: "أمس", score: 88, stars: 3 },
    { title: "الألوان والأشكال", date: "منذ يومين", score: 92, stars: 3 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b-2 border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Link href="/teacher">
              <Button variant="ghost" size="icon" className="w-10 h-10">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">تفاصيل الطالب</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="p-8 border-2 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-4xl">
                {student.avatar}
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-1">{student.name}</h2>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{student.grade}</Badge>
                  <span className="text-sm text-muted-foreground">انضم في {student.joinDate}</span>
                </div>
              </div>
            </div>
            <Button className="bg-primary text-white">إرسال رسالة</Button>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-primary/5 rounded-xl">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <p className="text-2xl font-bold text-primary">{student.totalStars}</p>
              <p className="text-sm text-muted-foreground">نجمة</p>
            </div>

            <div className="text-center p-4 bg-secondary/5 rounded-xl">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <BookOpen className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-2xl font-bold text-secondary">{student.lessonsCompleted}</p>
              <p className="text-sm text-muted-foreground">درس مكتمل</p>
            </div>

            <div className="text-center p-4 bg-accent/5 rounded-xl">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <p className="text-2xl font-bold text-accent">{student.hoursLearned}</p>
              <p className="text-sm text-muted-foreground">ساعة تعلم</p>
            </div>

            <div className="text-center p-4 bg-success/5 rounded-xl">
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
              <p className="text-2xl font-bold text-success">{student.averageScore}%</p>
              <p className="text-sm text-muted-foreground">متوسط الدرجات</p>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="p-6 border-2">
            <h3 className="text-xl font-bold mb-6">التقدم في المواد</h3>
            <div className="space-y-6">
              {subjects.map((subject, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold">{subject.name}</h4>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">{subject.lessons} درس</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-accent fill-accent" />
                        <span className="text-sm font-bold">{subject.stars}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={subject.progress} className="flex-1" />
                    <span className="text-sm font-bold">{subject.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 border-2">
            <h3 className="text-xl font-bold mb-6">الدروس الأخيرة</h3>
            <div className="space-y-4">
              {recentLessons.map((lesson, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                  <div className="flex-1">
                    <h4 className="font-bold mb-1">{lesson.title}</h4>
                    <p className="text-sm text-muted-foreground">{lesson.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <p className="text-lg font-bold text-primary">{lesson.score}%</p>
                      <p className="text-xs text-muted-foreground">الدرجة</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(lesson.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
