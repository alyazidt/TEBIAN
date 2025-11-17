import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles, BookOpen, Gamepad2, Trophy, Star, Microscope } from "lucide-react"
import { VirtualTeacher } from "@/components/virtual-teacher"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b-4 border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
                تِبيان
              </h1>
            </div>

            <nav className="hidden md:flex items-center gap-4">
              <Button variant="ghost" size="lg" className="text-lg font-bold">
                الرئيسية
              </Button>
              <Button variant="ghost" size="lg" className="text-lg font-bold">
                دروسي
              </Button>
              <Button variant="ghost" size="lg" className="text-lg font-bold">
                الألعاب
              </Button>
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-xl">
                <Star className="w-5 h-5 text-accent fill-accent" />
                <span className="text-xl font-bold">250</span>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full border-4 border-white shadow-lg">
                <img src="/---------------.jpg" alt="صورة الطفل" className="w-full h-full rounded-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="bg-gradient-to-l from-primary via-secondary to-accent rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">مرحباً يا بطل! 🌟</h2>
                <p className="text-xl md:text-2xl mb-6 leading-relaxed text-balance">
                  هل أنت مستعد لمغامرة تعليمية جديدة اليوم؟
                </p>
                <Button size="lg" className="kid-button bg-white text-primary hover:bg-white/90 text-xl">
                  <Sparkles className="ml-2 w-6 h-6" />
                  لنبدأ التعلم!
                </Button>
              </div>

              <div className="hidden md:block">
                <VirtualTeacher />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="kid-heading mb-6 text-center">ماذا تريد أن تفعل اليوم؟</h3>

          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/lessons">
              <Card className="kid-card bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 p-6 cursor-pointer group">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary">دروسي</h4>
                  <p className="text-lg text-muted-foreground leading-relaxed">تعلم أشياء جديدة ومثيرة!</p>
                </div>
              </Card>
            </Link>

            <Link href="/labs">
              <Card className="kid-card bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/30 p-6 cursor-pointer group">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Microscope className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-secondary">المختبرات</h4>
                  <p className="text-lg text-muted-foreground leading-relaxed">جرب التجارب العلمية!</p>
                </div>
              </Card>
            </Link>

            <Link href="/games">
              <Card className="kid-card bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30 p-6 cursor-pointer group">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Gamepad2 className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-accent">الألعاب</h4>
                  <p className="text-lg text-muted-foreground leading-relaxed">العب وتعلم في نفس الوقت!</p>
                </div>
              </Card>
            </Link>

            <Link href="/achievements">
              <Card className="kid-card bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 p-6 cursor-pointer group">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Trophy className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary">إنجازاتي</h4>
                  <p className="text-lg text-muted-foreground leading-relaxed">شاهد كل نجوماتك وجوائزك!</p>
                </div>
              </Card>
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <Card className="kid-card bg-card border-2 p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl md:text-3xl font-bold">تقدمك اليوم</h3>
              <div className="flex items-center gap-2 bg-success/20 px-4 py-2 rounded-xl">
                <Trophy className="w-6 h-6 text-success" />
                <span className="text-xl font-bold text-success">3/5</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold">الدروس المكتملة</span>
                    <span className="text-lg font-bold text-primary">60%</span>
                  </div>
                  <div className="h-4 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-l from-primary to-secondary rounded-full w-[60%] transition-all duration-500"></div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-2">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-primary">12</p>
                  <p className="text-sm text-muted-foreground">درس</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-2xl flex items-center justify-center mb-2">
                    <Gamepad2 className="w-8 h-8 text-secondary" />
                  </div>
                  <p className="text-2xl font-bold text-secondary">8</p>
                  <p className="text-sm text-muted-foreground">لعبة</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center mb-2">
                    <Star className="w-8 h-8 text-accent" />
                  </div>
                  <p className="text-2xl font-bold text-accent">250</p>
                  <p className="text-sm text-muted-foreground">نجمة</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <h3 className="kid-heading mb-6">دروس مقترحة لك</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "الحروف العربية", icon: "📚", color: "primary", progress: 75 },
              { title: "الأرقام والحساب", icon: "🔢", color: "secondary", progress: 45 },
              { title: "العلوم المرحة", icon: "🔬", color: "accent", progress: 30 },
            ].map((lesson, index) => (
              <Card key={index} className="kid-card bg-card border-2 p-6 cursor-pointer">
                <div className="text-center mb-4">
                  <div className="text-6xl mb-3">{lesson.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{lesson.title}</h4>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">التقدم</span>
                    <span className="font-bold">{lesson.progress}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-${lesson.color} rounded-full transition-all duration-500`}
                      style={{ width: `${lesson.progress}%` }}
                    ></div>
                  </div>

                  <Button className="w-full kid-button bg-primary text-white">ابدأ الدرس</Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
