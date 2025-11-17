import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, Bell, Settings, MessageSquare, Calendar } from "lucide-react"
import { ChildCard } from "@/components/parent/child-card"
import { WeeklyProgress } from "@/components/parent/weekly-progress"
import { LearningInsights } from "@/components/parent/learning-insights"
import { UpcomingLessons } from "@/components/parent/upcoming-lessons"

const children = [
  {
    id: 1,
    name: "أحمد",
    avatar: "👦",
    age: 7,
    grade: "الصف الثاني",
    progress: 85,
    lessonsThisWeek: 5,
    hoursThisWeek: 3.5,
    stars: 120,
    status: "نشط",
  },
  {
    id: 2,
    name: "فاطمة",
    avatar: "👧",
    age: 6,
    grade: "الصف الأول",
    progress: 92,
    lessonsThisWeek: 7,
    hoursThisWeek: 4.2,
    stars: 180,
    status: "نشط",
  },
]

export default function ParentDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b-2 border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">لوحة تحكم ولي الأمر</h1>
                <p className="text-sm text-muted-foreground">مرحباً، أم أحمد</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
              </Button>
              <Button variant="ghost" size="icon">
                <MessageSquare className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-2xl">
                👩
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <Card className="bg-gradient-to-l from-primary via-secondary to-accent p-8 text-white border-0">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">أطفالك يتقدمون بشكل رائع!</h2>
                <p className="text-xl leading-relaxed">تابع تقدمهم وشجعهم على الاستمرار</p>
              </div>
              <div className="hidden md:flex items-center gap-4">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-1">12</div>
                  <div className="text-sm opacity-90">درس هذا الأسبوع</div>
                </div>
                <div className="w-px h-16 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-1">7.7</div>
                  <div className="text-sm opacity-90">ساعة تعلم</div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">أطفالي</h2>
            <Button variant="outline" className="bg-transparent">
              <Calendar className="ml-2 w-5 h-5" />
              عرض الجدول الزمني
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {children.map((child) => (
              <ChildCard key={child.id} child={child} />
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <WeeklyProgress />
          </div>
          <div>
            <UpcomingLessons />
          </div>
        </div>

        <section>
          <LearningInsights />
        </section>
      </main>
    </div>
  )
}
