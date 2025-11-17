import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Gamepad2, Star, Users } from "lucide-react"
import { VirtualTeacher } from "@/components/virtual-teacher"

export default function GamesPage() {
  const games = [
    {
      id: 1,
      title: "مطابقة الحروف",
      description: "اعثر على الحروف المتشابهة!",
      icon: "🎯",
      difficulty: "سهل",
      stars: 50,
      players: 1234,
      multiplayer: true,
      maxPlayers: 4,
      type: "matching",
    },
    {
      id: 2,
      title: "سباق الأرقام",
      description: "احسب بسرعة واربح السباق!",
      icon: "🏁",
      difficulty: "متوسط",
      stars: 75,
      players: 892,
      multiplayer: true,
      maxPlayers: 6,
      type: "racing",
    },
    {
      id: 3,
      title: "مغامرة العلوم",
      description: "اكتشف عالم العلوم المثير!",
      icon: "🚀",
      difficulty: "متقدم",
      stars: 100,
      players: 567,
      multiplayer: false,
      maxPlayers: 1,
      type: "adventure",
    },
    {
      id: 4,
      title: "معركة الكلمات",
      description: "تحدى أصدقاءك في تكوين الكلمات!",
      icon: "📝",
      difficulty: "متوسط",
      stars: 60,
      players: 445,
      multiplayer: true,
      maxPlayers: 4,
      type: "word-battle",
    },
    {
      id: 5,
      title: "كنز المعرفة",
      description: "ابحث عن الكنز مع فريقك!",
      icon: "🗺️",
      difficulty: "متقدم",
      stars: 90,
      players: 328,
      multiplayer: true,
      maxPlayers: 8,
      type: "treasure",
    },
    {
      id: 6,
      title: "بطولة الرياضيات",
      description: "تنافس في حل المسائل الرياضية!",
      icon: "🧮",
      difficulty: "متوسط",
      stars: 70,
      players: 612,
      multiplayer: true,
      maxPlayers: 6,
      type: "math-tournament",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/10 via-accent/10 to-primary/10">
      <header className="bg-card/80 backdrop-blur-lg border-b-4 border-secondary/20 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" size="lg" className="text-lg font-bold">
                <ArrowRight className="ml-2 w-6 h-6" />
                الرئيسية
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-secondary">الألعاب التعليمية</h1>
            <div className="w-12"></div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="bg-gradient-to-l from-secondary via-accent to-primary rounded-3xl p-8 text-white shadow-2xl text-center">
            <h2 className="text-4xl font-bold mb-4">العب وتعلم! 🎮</h2>
            <p className="text-xl leading-relaxed max-w-2xl mx-auto">
              اختر لعبتك المفضلة واستمتع بالتعلم بطريقة ممتعة ومسلية
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="kid-heading">الألعاب الجماعية</h2>
            <Badge
              variant="outline"
              className="text-base px-4 py-2 rounded-xl bg-accent/10 text-accent border-accent/20"
            >
              <Users className="w-4 h-4 ml-1" />
              العب مع الأصدقاء
            </Badge>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {games
              .filter((game) => game.multiplayer)
              .map((game) => (
                <Link key={game.id} href={`/games/${game.id}`}>
                  <Card className="kid-card bg-card border-2 p-6 cursor-pointer hover:border-accent/50 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <Badge
                        variant="outline"
                        className={`${
                          game.difficulty === "سهل"
                            ? "bg-success/10 text-success border-success/20"
                            : game.difficulty === "متوسط"
                              ? "bg-accent/10 text-accent border-accent/20"
                              : "bg-primary/10 text-primary border-primary/20"
                        }`}
                      >
                        {game.difficulty}
                      </Badge>
                      <Badge className="bg-accent text-white">
                        <Users className="w-3 h-3 ml-1" />
                        {game.maxPlayers}
                      </Badge>
                    </div>

                    <div className="text-center mb-4">
                      <div className="text-7xl mb-4">{game.icon}</div>
                      <h3 className="text-2xl font-bold mb-2 text-balance">{game.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{game.description}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="w-4 h-4" />
                          <span>{game.players} لاعب</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-5 h-5 text-accent fill-accent" />
                          <span className="font-bold text-accent">+{game.stars}</span>
                        </div>
                      </div>

                      <Button className="w-full kid-button bg-accent text-white">
                        <Gamepad2 className="ml-2 w-5 h-5" />
                        العب الآن
                      </Button>
                    </div>
                  </Card>
                </Link>
              ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="kid-heading mb-6">ألعاب فردية</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {games
              .filter((game) => !game.multiplayer)
              .map((game) => (
                <Card key={game.id} className="kid-card bg-card border-2 p-6">
                  <div className="text-center mb-4">
                    <div className="text-7xl mb-4">{game.icon}</div>
                    <h3 className="text-2xl font-bold mb-2 text-balance">{game.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{game.description}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-lg font-bold">
                        {game.difficulty}
                      </span>
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-accent fill-accent" />
                        <span className="font-bold text-accent">+{game.stars}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{game.players} لاعب</span>
                    </div>

                    <Button className="w-full kid-button bg-secondary text-white">
                      <Gamepad2 className="ml-2 w-5 h-5" />
                      العب الآن
                    </Button>
                  </div>
                </Card>
              ))}
          </div>
        </section>

        <section className="mb-8">
          <div className="max-w-2xl mx-auto">
            <VirtualTeacher context="game" mood="excited" />
          </div>
        </section>
      </main>
    </div>
  )
}
