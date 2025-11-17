"use client"

import { use } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ChevronRight, Star, BookOpen, Clock, TrendingUp, Trophy, Target, MessageSquare } from "lucide-react"

export default function ChildDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  const child = {
    name: "أحمد",
    avatar: "👦",
    age: 7,
    grade: "الصف الثاني",
    totalStars: 120,
    lessonsCompleted: 12,
    hoursLearned: 8.5,
    averageScore: 85,
    currentStreak: 5,
  }

  const subjects = [
    { name: "اللغة العربية", progress: 85, lessons: 12, stars: 36, trend: "+5%" },
    { name: "الرياضيات", progress: 78, lessons: 10, stars: 30, trend: "+8%" },
    { name: "العلوم", progress: 92, lessons: 8, stars: 24, trend: "+3%" },
    { name: "الفنون", progress: 88, lessons: 6, stars: 18, trend: "+12%" },
  ]

  const achievements = [
    { title: "قارئ نشط", description: "أكمل 10 دروس في اللغة العربية", icon: "📚", date: "منذ يومين" },
    { title: "عالم صغير", description: "حصل على 3 نجوم في جميع دروس العلوم", icon: "🔬", date: "منذ 3 أيام" },
    { title: "رياضي ماهر", description: "أتقن الجمع والطرح", icon: "🧮", date: "منذ أسبوع" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b-2 border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Link href="/parent">
              <Button variant="ghost" size="icon" className="w-10 h-10">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">تفاصيل تقدم {child.name}</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="p-8 border-2 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-4xl">
                {child.avatar}
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-1">{child.name}</h2>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{child.grade}</Badge>
                  <span className="text-sm text-muted-foreground">{child.age} سنوات</span>
                </div>
              </div>
            </div>
            <Button className="bg-primary text-white">
              <MessageSquare className="ml-2 w-5 h-5" />
              تواصل مع المعلم
            </Button>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center p-4 bg-primary/5 rounded-xl">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <p className="text-2xl font-bold text-primary">{child.totalStars}</p>
              <p className="text-sm text-muted-foreground">نجمة</p>
            </div>

            <div className="text-center p-4 bg-secondary/5 rounded-xl">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <BookOpen className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-2xl font-bold text-secondary">{child.lessonsCompleted}</p>
              <p className="text-sm text-muted-foreground">درس مكتمل</p>
            </div>

            <div className="text-center p-4 bg-accent/5 rounded-xl">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <p className="text-2xl font-bold text-accent">{child.hoursLearned}</p>
              <p className="text-sm text-muted-foreground">ساعة تعلم</p>
            </div>

            <div className="text-center p-4 bg-success/5 rounded-xl">
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Target className="w-6 h-6 text-success" />
              </div>
              <p className="text-2xl font-bold text-success">{child.averageScore}%</p>
              <p className="text-sm text-muted-foreground">متوسط الدرجات</p>
            </div>

            <div className="text-center p-4 bg-accent/5 rounded-xl">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Trophy className="w-6 h-6 text-accent" />
              </div>
              <p className="text-2xl font-bold text-accent">{child.currentStreak}</p>
              <p className="text-sm text-muted-foreground">أيام متتالية</p>
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
                      <Badge variant="outline" className="text-xs bg-success/10 text-success border-success/20">
                        {subject.trend}
                      </Badge>
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
                  <p className="text-xs text-muted-foreground mt-1">{subject.lessons} درس مكتمل</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 border-2">
            <h3 className="text-xl font-bold mb-6">الإنجازات الأخيرة</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                  <div className="text-4xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-1">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">{achievement.description}</p>
                    <p className="text-xs text-muted-foreground">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-6 border-2">
          <h3 className="text-xl font-bold mb-6">نصائح لدعم تعلم {child.name}</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-primary/5 rounded-xl">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-bold mb-2">استمر في التشجيع</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {child.name} يتقدم بشكل ممتاز. استمر في تشجيعه ومكافأته على إنجازاته.
              </p>
            </div>

            <div className="p-4 bg-secondary/5 rounded-xl">
              <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center mb-3">
                <Clock className="w-5 h-5 text-secondary" />
              </div>
              <h4 className="font-bold mb-2">وقت التعلم المثالي</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                أفضل وقت للتعلم هو في الصباح الباكر بين 9-11 صباحاً.
              </p>
            </div>

            <div className="p-4 bg-accent/5 rounded-xl">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mb-3">
                <Target className="w-5 h-5 text-accent" />
              </div>
              <h4 className="font-bold mb-2">هدف هذا الأسبوع</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                حاول إكمال 3 دروس إضافية في الرياضيات لتحسين الأداء.
              </p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}
