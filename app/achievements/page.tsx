import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Trophy, Star, Lock, Sparkles } from "lucide-react"

const achievements = [
  {
    id: 1,
    title: "قارئ نشط",
    description: "أكمل 10 دروس في اللغة العربية",
    icon: "📚",
    unlocked: true,
    date: "منذ يومين",
    stars: 50,
    rarity: "ذهبي",
  },
  {
    id: 2,
    title: "عالم صغير",
    description: "حصل على 3 نجوم في جميع دروس العلوم",
    icon: "🔬",
    unlocked: true,
    date: "منذ 3 أيام",
    stars: 75,
    rarity: "ذهبي",
  },
  {
    id: 3,
    title: "رياضي ماهر",
    description: "أتقن الجمع والطرح",
    icon: "🧮",
    unlocked: true,
    date: "منذ أسبوع",
    stars: 50,
    rarity: "فضي",
  },
  {
    id: 4,
    title: "فنان مبدع",
    description: "أكمل 5 أنشطة فنية",
    icon: "🎨",
    unlocked: true,
    date: "منذ أسبوعين",
    stars: 30,
    rarity: "برونزي",
  },
  {
    id: 5,
    title: "نجم متألق",
    description: "اجمع 100 نجمة",
    icon: "⭐",
    unlocked: true,
    date: "منذ 3 أسابيع",
    stars: 100,
    rarity: "ذهبي",
  },
  {
    id: 6,
    title: "متعلم مثابر",
    description: "تعلم لمدة 5 أيام متتالية",
    icon: "🔥",
    unlocked: false,
    progress: 3,
    total: 5,
    stars: 75,
    rarity: "ذهبي",
  },
  {
    id: 7,
    title: "بطل الألعاب",
    description: "اربح 20 لعبة تعليمية",
    icon: "🎮",
    unlocked: false,
    progress: 12,
    total: 20,
    stars: 50,
    rarity: "فضي",
  },
  {
    id: 8,
    title: "خبير الحروف",
    description: "أتقن جميع الحروف العربية",
    icon: "✍️",
    unlocked: false,
    progress: 18,
    total: 28,
    stars: 100,
    rarity: "ذهبي",
  },
]

const rarityColors = {
  ذهبي: "from-accent via-accent/80 to-accent/60",
  فضي: "from-muted-foreground via-muted-foreground/80 to-muted-foreground/60",
  برونزي: "from-accent/60 via-accent/40 to-accent/30",
}

export default function AchievementsPage() {
  const unlockedCount = achievements.filter((a) => a.unlocked).length
  const totalStars = achievements.filter((a) => a.unlocked).reduce((sum, a) => sum + a.stars, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10">
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b-4 border-accent/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/">
                <Button variant="ghost" size="icon" className="w-12 h-12">
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center">
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <h1 className="text-3xl font-bold bg-gradient-to-l from-accent to-primary bg-clip-text text-transparent">
                  إنجازاتي
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-xl">
                <Star className="w-5 h-5 text-accent fill-accent" />
                <span className="text-xl font-bold">{totalStars}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <Card className="kid-card bg-gradient-to-l from-accent via-primary to-secondary p-8 text-white border-0">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">أنت بطل حقيقي! 🏆</h2>
                <p className="text-xl leading-relaxed">
                  لقد فتحت {unlockedCount} من {achievements.length} إنجاز
                </p>
              </div>
              <div className="hidden md:block">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="kid-card bg-card border-2 p-6 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-8 h-8 text-accent" />
              </div>
              <p className="text-3xl font-bold text-accent mb-1">{unlockedCount}</p>
              <p className="text-muted-foreground">إنجاز مفتوح</p>
            </Card>

            <Card className="kid-card bg-card border-2 p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary mb-1">{totalStars}</p>
              <p className="text-muted-foreground">نجمة من الإنجازات</p>
            </Card>

            <Card className="kid-card bg-card border-2 p-6 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-8 h-8 text-secondary" />
              </div>
              <p className="text-3xl font-bold text-secondary mb-1">{achievements.length - unlockedCount}</p>
              <p className="text-muted-foreground">إنجاز متبقي</p>
            </Card>
          </div>
        </section>

        <section>
          <h3 className="kid-heading mb-6">جميع الإنجازات</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <Card
                key={achievement.id}
                className={`kid-card border-2 p-6 ${achievement.unlocked ? "bg-card" : "bg-muted/50 opacity-75"}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`text-6xl ${achievement.unlocked ? "" : "grayscale opacity-50"}`}>
                    {achievement.icon}
                  </div>
                  {achievement.unlocked ? (
                    <Badge
                      className={`bg-gradient-to-r ${
                        rarityColors[achievement.rarity as keyof typeof rarityColors]
                      } text-white border-0`}
                    >
                      {achievement.rarity}
                    </Badge>
                  ) : (
                    <Lock className="w-6 h-6 text-muted-foreground" />
                  )}
                </div>

                <h4 className="text-xl font-bold mb-2 text-balance">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{achievement.description}</p>

                {achievement.unlocked ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{achievement.date}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-accent fill-accent" />
                        <span className="text-sm font-bold">+{achievement.stars}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">التقدم</span>
                      <span className="font-bold">
                        {achievement.progress}/{achievement.total}
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full transition-all duration-500"
                        style={{
                          width: `${((achievement.progress || 0) / (achievement.total || 1)) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
