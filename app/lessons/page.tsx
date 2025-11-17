import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Star, ChevronRight, Trophy } from "lucide-react"
import { LessonCard } from "@/components/lesson-card"
import { ActivityCard } from "@/components/activity-card"

const lessons = [
  {
    id: 1,
    title: "الحروف العربية - الجزء الأول",
    description: "تعلم الحروف من أ إلى ذ بطريقة ممتعة",
    icon: "📚",
    duration: "15 دقيقة",
    progress: 75,
    stars: 3,
    difficulty: "سهل",
    category: "اللغة العربية",
    color: "primary",
  },
  {
    id: 2,
    title: "الأرقام من 1 إلى 10",
    description: "اكتشف عالم الأرقام والعد",
    icon: "🔢",
    duration: "10 دقائق",
    progress: 45,
    stars: 2,
    difficulty: "سهل",
    category: "الرياضيات",
    color: "secondary",
  },
  {
    id: 3,
    title: "الألوان والأشكال",
    description: "تعرف على الألوان والأشكال المختلفة",
    icon: "🎨",
    duration: "12 دقيقة",
    progress: 30,
    stars: 1,
    difficulty: "سهل",
    category: "الفنون",
    color: "accent",
  },
  {
    id: 4,
    title: "الحيوانات وأصواتها",
    description: "تعلم أسماء الحيوانات وأصواتها",
    icon: "🦁",
    duration: "20 دقيقة",
    progress: 0,
    stars: 0,
    difficulty: "متوسط",
    category: "العلوم",
    color: "primary",
  },
  {
    id: 5,
    title: "الجمع والطرح البسيط",
    description: "ابدأ رحلتك في عالم الحساب",
    icon: "➕",
    duration: "18 دقيقة",
    progress: 0,
    stars: 0,
    difficulty: "متوسط",
    category: "الرياضيات",
    color: "secondary",
  },
  {
    id: 6,
    title: "الفصول الأربعة",
    description: "اكتشف جمال الفصول المختلفة",
    icon: "🌸",
    duration: "15 دقيقة",
    progress: 0,
    stars: 0,
    difficulty: "سهل",
    category: "العلوم",
    color: "accent",
  },
]

const activities = [
  {
    id: 1,
    title: "لعبة تركيب الحروف",
    description: "ركب الحروف لتكوين كلمات",
    icon: "🧩",
    type: "لعبة",
    color: "primary",
  },
  {
    id: 2,
    title: "تلوين الأرقام",
    description: "لون الأرقام بألوان جميلة",
    icon: "🖍️",
    type: "نشاط",
    color: "secondary",
  },
  {
    id: 3,
    title: "اختبار الحروف",
    description: "اختبر معلوماتك عن الحروف",
    icon: "📝",
    type: "اختبار",
    color: "accent",
  },
  {
    id: 4,
    title: "أغنية الحروف",
    description: "تعلم الحروف مع أغنية ممتعة",
    icon: "🎵",
    type: "فيديو",
    color: "primary",
  },
]

export default function LessonsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b-4 border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/">
                <Button variant="ghost" size="icon" className="w-12 h-12">
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <h1 className="text-3xl font-bold bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
                  دروسي
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-xl">
                <Star className="w-5 h-5 text-accent fill-accent" />
                <span className="text-xl font-bold">250</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <Card className="kid-card bg-gradient-to-l from-primary via-secondary to-accent p-8 text-white border-0">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">استمر في التعلم!</h2>
                <p className="text-xl leading-relaxed">لديك 3 دروس قيد التقدم</p>
              </div>
              <div className="hidden md:block">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                  <Trophy className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="kid-heading">الدروس المتاحة</h3>
            <div className="flex gap-2">
              <Badge variant="outline" className="text-base px-4 py-2 rounded-xl">
                الكل
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2 rounded-xl">
                قيد التقدم
              </Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </section>

        <section>
          <h3 className="kid-heading mb-6">الأنشطة التفاعلية</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
