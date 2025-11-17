import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, BookOpen, TrendingUp, Calendar, Bell, Settings, Plus, Search, BarChart3 } from "lucide-react"
import { StudentCard } from "@/components/teacher/student-card"
import { ClassStats } from "@/components/teacher/class-stats"
import { RecentActivity } from "@/components/teacher/recent-activity"

const students = [
  {
    id: 1,
    name: "أحمد محمد",
    avatar: "👦",
    progress: 85,
    lessonsCompleted: 12,
    lastActive: "منذ ساعة",
    status: "نشط",
  },
  {
    id: 2,
    name: "فاطمة علي",
    avatar: "👧",
    progress: 92,
    lessonsCompleted: 15,
    lastActive: "منذ 30 دقيقة",
    status: "نشط",
  },
  {
    id: 3,
    name: "محمد خالد",
    avatar: "👦",
    progress: 68,
    lessonsCompleted: 8,
    lastActive: "منذ يومين",
    status: "غير نشط",
  },
  {
    id: 4,
    name: "سارة أحمد",
    avatar: "👧",
    progress: 78,
    lessonsCompleted: 10,
    lastActive: "منذ 3 ساعات",
    status: "نشط",
  },
]

export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b-2 border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">لوحة تحكم المعلم</h1>
                <p className="text-sm text-muted-foreground">مرحباً، أستاذ محمد</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-2xl">
                👨‍🏫
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 border-2">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <h3 className="text-3xl font-bold mb-1">24</h3>
            <p className="text-sm text-muted-foreground">إجمالي الطلاب</p>
          </Card>

          <Card className="p-6 border-2">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-secondary" />
              </div>
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <h3 className="text-3xl font-bold mb-1">18</h3>
            <p className="text-sm text-muted-foreground">الدروس النشطة</p>
          </Card>

          <Card className="p-6 border-2">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-accent" />
              </div>
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <h3 className="text-3xl font-bold mb-1">82%</h3>
            <p className="text-sm text-muted-foreground">متوسط الإنجاز</p>
          </Card>

          <Card className="p-6 border-2">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-success" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-1">5</h3>
            <p className="text-sm text-muted-foreground">الواجبات المعلقة</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <ClassStats />
          </div>
          <div>
            <RecentActivity />
          </div>
        </div>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">طلابي</h2>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="ابحث عن طالب..."
                  className="pr-10 pl-4 py-2 border-2 border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button className="bg-primary text-white">
                <Plus className="ml-2 w-5 h-5" />
                إضافة طالب
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {students.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
