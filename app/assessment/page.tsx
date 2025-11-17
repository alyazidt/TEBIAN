import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, ClipboardCheck, Clock, Star, TrendingUp, BookOpen } from "lucide-react"

const assessments = [
  {
    id: 1,
    title: "تقييم اللغة العربية - المستوى الأول",
    subject: "اللغة العربية",
    duration: "20 دقيقة",
    questions: 15,
    difficulty: "سهل",
    completed: true,
    score: 92,
    stars: 3,
    date: "منذ يومين",
    color: "primary",
  },
  {
    id: 2,
    title: "اختبار الرياضيات - الجمع والطرح",
    subject: "الرياضيات",
    duration: "15 دقيقة",
    questions: 12,
    difficulty: "متوسط",
    completed: true,
    score: 85,
    stars: 3,
    date: "منذ 3 أيام",
    color: "secondary",
  },
  {
    id: 3,
    title: "تقييم العلوم - الحيوانات",
    subject: "العلوم",
    duration: "18 دقيقة",
    questions: 10,
    difficulty: "سهل",
    completed: false,
    color: "accent",
  },
  {
    id: 4,
    title: "اختبار الحروف الهجائية",
    subject: "اللغة العربية",
    duration: "12 دقيقة",
    questions: 20,
    difficulty: "سهل",
    completed: false,
    color: "primary",
  },
  {
    id: 5,
    title: "تقييم الأرقام والعد",
    subject: "الرياضيات",
    duration: "15 دقيقة",
    questions: 15,
    difficulty: "متوسط",
    completed: false,
    color: "secondary",
  },
]

export default function AssessmentPage() {
  const completedCount = assessments.filter((a) => a.completed).length
  const averageScore = Math.round(
    assessments.filter((a) => a.completed).reduce((sum, a) => sum + (a.score || 0), 0) / completedCount,
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b-4 border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="ghost" size="icon" className="w-12 h-12">
                <ChevronRight className="w-6 h-6" />
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                <ClipboardCheck className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
                التقييمات
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <Card className="kid-card bg-gradient-to-l from-primary via-secondary to-accent p-8 text-white border-0">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">اختبر معلوماتك! 📝</h2>
                <p className="text-xl leading-relaxed">
                  أكملت {completedCount} تقييمات بمتوسط {averageScore}%
                </p>
              </div>
              <div className="hidden md:block">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="kid-card bg-card border-2 p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <ClipboardCheck className="w-8 h-8 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary mb-1">{completedCount}</p>
              <p className="text-muted-foreground">تقييم مكتمل</p>
            </Card>

            <Card className="kid-card bg-card border-2 p-6 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-8 h-8 text-secondary" />
              </div>
              <p className="text-3xl font-bold text-secondary mb-1">{averageScore}%</p>
              <p className="text-muted-foreground">متوسط الدرجات</p>
            </Card>

            <Card className="kid-card bg-card border-2 p-6 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-8 h-8 text-accent" />
              </div>
              <p className="text-3xl font-bold text-accent mb-1">{assessments.length - completedCount}</p>
              <p className="text-muted-foreground">تقييم متاح</p>
            </Card>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="kid-heading mb-6">التقييمات المكتملة</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {assessments
              .filter((a) => a.completed)
              .map((assessment) => (
                <Card key={assessment.id} className="kid-card bg-card border-2 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary">{assessment.subject}</Badge>
                    <div className="flex gap-1">
                      {[...Array(assessment.stars)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                      ))}
                    </div>
                  </div>

                  <h4 className="text-xl font-bold mb-3 text-balance">{assessment.title}</h4>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{assessment.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ClipboardCheck className="w-4 h-4" />
                      <span>{assessment.questions} سؤال</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t-2">
                    <div>
                      <p className="text-3xl font-bold text-primary">{assessment.score}%</p>
                      <p className="text-sm text-muted-foreground">{assessment.date}</p>
                    </div>
                    <Button variant="outline" className="kid-button bg-transparent">
                      عرض النتائج
                    </Button>
                  </div>
                </Card>
              ))}
          </div>
        </section>

        <section>
          <h3 className="kid-heading mb-6">التقييمات المتاحة</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assessments
              .filter((a) => !a.completed)
              .map((assessment) => (
                <Card key={assessment.id} className="kid-card bg-card border-2 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary">{assessment.subject}</Badge>
                    <Badge
                      variant="outline"
                      className={`${
                        assessment.difficulty === "سهل"
                          ? "bg-success/10 text-success border-success/20"
                          : "bg-accent/10 text-accent border-accent/20"
                      }`}
                    >
                      {assessment.difficulty}
                    </Badge>
                  </div>

                  <h4 className="text-xl font-bold mb-4 text-balance">{assessment.title}</h4>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{assessment.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ClipboardCheck className="w-4 h-4" />
                      <span>{assessment.questions} سؤال</span>
                    </div>
                  </div>

                  <Link href={`/quiz/${assessment.id}`}>
                    <Button className={`w-full kid-button bg-${assessment.color} text-white`}>ابدأ التقييم</Button>
                  </Link>
                </Card>
              ))}
          </div>
        </section>
      </main>
    </div>
  )
}
