import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Microscope, Rocket, Globe, Star } from "lucide-react"

const labs = [
  {
    id: 1,
    title: "رحلة إلى الفضاء",
    description: "اكتشف الكواكب والنجوم في نظامنا الشمسي",
    icon: "🪐",
    subject: "الفلك",
    duration: "25 دقيقة",
    difficulty: "متوسط",
    interactive: true,
    ar: true,
    color: "primary",
    completed: false,
  },
  {
    id: 2,
    title: "مختبر الكيمياء المرح",
    description: "تعلم عن العناصر والتفاعلات الكيميائية",
    icon: "🧪",
    subject: "الكيمياء",
    duration: "20 دقيقة",
    difficulty: "متوسط",
    interactive: true,
    ar: true,
    color: "secondary",
    completed: false,
  },
  {
    id: 3,
    title: "عالم الحيوانات",
    description: "استكشف الحيوانات في بيئاتها الطبيعية",
    icon: "🦁",
    subject: "الأحياء",
    duration: "18 دقيقة",
    difficulty: "سهل",
    interactive: true,
    ar: true,
    color: "accent",
    completed: true,
  },
  {
    id: 4,
    title: "جسم الإنسان",
    description: "اكتشف أعضاء الجسم ووظائفها",
    icon: "🫀",
    subject: "الأحياء",
    duration: "22 دقيقة",
    difficulty: "متوسط",
    interactive: true,
    ar: true,
    color: "primary",
    completed: false,
  },
  {
    id: 5,
    title: "الطقس والمناخ",
    description: "تعلم عن الطقس والظواهر الجوية",
    icon: "⛈️",
    subject: "علوم الأرض",
    duration: "15 دقيقة",
    difficulty: "سهل",
    interactive: true,
    ar: false,
    color: "secondary",
    completed: false,
  },
  {
    id: 6,
    title: "النباتات والضوء",
    description: "اكتشف كيف تنمو النباتات",
    icon: "🌱",
    subject: "الأحياء",
    duration: "16 دقيقة",
    difficulty: "سهل",
    interactive: true,
    ar: false,
    color: "accent",
    completed: false,
  },
]

export default function LabsPage() {
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
                <Microscope className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
                المختبرات التفاعلية
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
                <h2 className="text-3xl md:text-4xl font-bold mb-2">اكتشف العلوم بطريقة تفاعلية!</h2>
                <p className="text-xl leading-relaxed">جرب التجارب العلمية بنفسك في مختبرنا الافتراضي</p>
              </div>
              <div className="hidden md:block">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                  <Rocket className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="kid-heading">المختبرات المتاحة</h3>
            <div className="flex gap-2">
              <Badge variant="outline" className="text-base px-4 py-2 rounded-xl">
                الكل
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2 rounded-xl">
                واقع معزز
              </Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labs.map((lab) => (
              <Link key={lab.id} href={`/labs/${lab.id}`}>
                <Card
                  className={`kid-card bg-card border-2 p-6 cursor-pointer ${lab.completed ? "border-success/50" : ""}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary">{lab.subject}</Badge>
                    {lab.ar && (
                      <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                        <Globe className="w-3 h-3 ml-1" />
                        واقع معزز
                      </Badge>
                    )}
                  </div>

                  <div className="text-center mb-4">
                    <div className="text-7xl mb-4">{lab.icon}</div>
                    <h4 className="text-xl font-bold mb-2 text-balance">{lab.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{lab.description}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{lab.duration}</span>
                      <Badge
                        variant="outline"
                        className={`${
                          lab.difficulty === "سهل"
                            ? "bg-success/10 text-success border-success/20"
                            : "bg-accent/10 text-accent border-accent/20"
                        }`}
                      >
                        {lab.difficulty}
                      </Badge>
                    </div>

                    {lab.completed && (
                      <div className="flex items-center justify-center gap-1 text-success">
                        <Star className="w-4 h-4 fill-success" />
                        <span className="text-sm font-bold">مكتمل</span>
                      </div>
                    )}

                    <Button className={`w-full kid-button bg-${lab.color} text-white`}>
                      {lab.completed ? "إعادة التجربة" : "ابدأ التجربة"}
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
