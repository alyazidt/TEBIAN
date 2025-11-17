"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ChevronRight, Users, Trophy, Zap, Timer, Crown } from "lucide-react"

const gameData = {
  "1": {
    title: "مطابقة الحروف",
    icon: "🎯",
    type: "matching",
    multiplayer: true,
    maxPlayers: 4,
  },
  "2": {
    title: "سباق الأرقام",
    icon: "🏁",
    type: "racing",
    multiplayer: true,
    maxPlayers: 6,
  },
  "4": {
    title: "معركة الكلمات",
    icon: "📝",
    type: "word-battle",
    multiplayer: true,
    maxPlayers: 4,
  },
  "5": {
    title: "كنز المعرفة",
    icon: "🗺️",
    type: "treasure",
    multiplayer: true,
    maxPlayers: 8,
  },
  "6": {
    title: "بطولة الرياضيات",
    icon: "🧮",
    type: "math-tournament",
    multiplayer: true,
    maxPlayers: 6,
  },
}

const playerColors = ["bg-primary", "bg-secondary", "bg-accent", "bg-success"]
const playerEmojis = ["👦", "👧", "🧒", "👶", "🧑", "👨"]

export function GameViewer({ gameId }: { gameId: string }) {
  const [gameState, setGameState] = useState<"lobby" | "playing" | "finished">("lobby")
  const [players, setPlayers] = useState([{ id: 1, name: "أنت", emoji: "👦", score: 0, ready: true }])
  const [currentRound, setCurrentRound] = useState(1)
  const [timeLeft, setTimeLeft] = useState(30)
  const [myScore, setMyScore] = useState(0)

  const game = gameData[gameId as keyof typeof gameData] || gameData["1"]

  useEffect(() => {
    if (gameState === "playing" && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && gameState === "playing") {
      setGameState("finished")
    }
  }, [timeLeft, gameState])

  const addBot = () => {
    if (players.length < game.maxPlayers) {
      const botNames = ["أحمد", "فاطمة", "محمد", "نور", "علي", "سارة", "خالد"]
      const randomName = botNames[Math.floor(Math.random() * botNames.length)]
      const randomEmoji = playerEmojis[Math.floor(Math.random() * playerEmojis.length)]

      setPlayers([
        ...players,
        {
          id: players.length + 1,
          name: randomName,
          emoji: randomEmoji,
          score: 0,
          ready: true,
        },
      ])
    }
  }

  const startGame = () => {
    setGameState("playing")
    setTimeLeft(30)
  }

  const handleAnswer = (correct: boolean) => {
    if (correct) {
      setMyScore(myScore + 10)
      // Simulate other players scoring
      setPlayers(
        players.map((p) =>
          p.id === 1 ? { ...p, score: myScore + 10 } : { ...p, score: p.score + Math.floor(Math.random() * 8) },
        ),
      )
    }
  }

  // Lobby view
  if (gameState === "lobby") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10">
        <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b-4 border-accent/20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-3">
              <Link href="/games">
                <Button variant="ghost" size="icon" className="w-12 h-12">
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </Link>
              <h1 className="text-xl md:text-2xl font-bold">{game.title}</h1>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Card className="kid-card bg-card border-4 p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="text-8xl mb-6">{game.icon}</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">غرفة الانتظار</h2>
                <p className="text-xl text-muted-foreground">
                  {players.length} / {game.maxPlayers} لاعبين
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {players.map((player, index) => (
                  <Card
                    key={player.id}
                    className={`p-6 border-2 ${playerColors[index % playerColors.length]}/20 border-${playerColors[index % playerColors.length]}/30`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-5xl">{player.emoji}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold">{player.name}</h3>
                        {player.ready && (
                          <Badge className="bg-success text-white mt-2">
                            <Zap className="w-3 h-3 ml-1" />
                            جاهز
                          </Badge>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}

                {players.length < game.maxPlayers &&
                  [...Array(game.maxPlayers - players.length)].map((_, i) => (
                    <Card key={`empty-${i}`} className="p-6 border-2 border-dashed border-muted">
                      <div className="flex items-center justify-center h-full">
                        <p className="text-muted-foreground">في انتظار لاعب...</p>
                      </div>
                    </Card>
                  ))}
              </div>

              <div className="flex gap-4 justify-center">
                {players.length < game.maxPlayers && (
                  <Button size="lg" variant="outline" onClick={addBot} className="kid-button bg-transparent">
                    <Users className="ml-2 w-6 h-6" />
                    إضافة لاعب
                  </Button>
                )}

                <Button
                  size="lg"
                  onClick={startGame}
                  disabled={players.length < 2}
                  className="kid-button bg-accent text-white disabled:opacity-50"
                >
                  <Zap className="ml-2 w-6 h-6" />
                  ابدأ اللعبة
                </Button>
              </div>
            </Card>
          </div>
        </main>
      </div>
    )
  }

  // Playing view
  if (gameState === "playing") {
    const questions = [
      { question: "ما هو الحرف الأول في كلمة 'أسد'؟", options: ["أ", "س", "د", "ل"], correct: 0 },
      { question: "كم يساوي 2 + 3؟", options: ["4", "5", "6", "7"], correct: 1 },
      { question: "ما لون السماء؟", options: ["أحمر", "أخضر", "أزرق", "أصفر"], correct: 2 },
    ]

    const currentQuestion = questions[currentRound - 1] || questions[0]
    const sortedPlayers = [...players].sort((a, b) => b.score - a.score)

    return (
      <div className="min-h-screen bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10">
        <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b-4 border-accent/20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl md:text-2xl font-bold">{game.title}</h1>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-xl">
                  <Timer className="w-5 h-5 text-accent" />
                  <span className="text-xl font-bold">{timeLeft}s</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold">الجولة {currentRound} من 3</span>
              </div>
              <Progress value={(currentRound / 3) * 100} className="h-3" />
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Leaderboard */}
            <div className="lg:col-span-1">
              <Card className="kid-card bg-card border-2 p-4 sticky top-24">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-accent" />
                  الترتيب
                </h3>
                <div className="space-y-3">
                  {sortedPlayers.map((player, index) => (
                    <div key={player.id} className="flex items-center gap-3">
                      {index === 0 && <Crown className="w-5 h-5 text-accent" />}
                      {index > 0 && (
                        <span className="w-5 text-center font-bold text-muted-foreground">{index + 1}</span>
                      )}
                      <div className="text-2xl">{player.emoji}</div>
                      <div className="flex-1">
                        <p className="font-bold text-sm">{player.name}</p>
                        <p className="text-xs text-muted-foreground">{player.score} نقطة</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Question */}
            <div className="lg:col-span-3">
              <Card className="kid-card bg-card border-4 p-8 md:p-12">
                <div className="text-center space-y-8">
                  <h3 className="text-3xl md:text-4xl font-bold leading-relaxed text-balance">
                    {currentQuestion.question}
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4 pt-8">
                    {currentQuestion.options.map((option, index) => (
                      <Button
                        key={index}
                        size="lg"
                        variant="outline"
                        className="kid-button text-2xl py-8 bg-transparent hover:bg-accent/10"
                        onClick={() => {
                          handleAnswer(index === currentQuestion.correct)
                          if (currentRound < 3) {
                            setTimeout(() => setCurrentRound(currentRound + 1), 1000)
                          } else {
                            setTimeout(() => setGameState("finished"), 1000)
                          }
                        }}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    )
  }

  // Finished view
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score)
  const myRank = sortedPlayers.findIndex((p) => p.id === 1) + 1

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/20 via-primary/20 to-secondary/20 flex items-center justify-center">
      <Card className="kid-card bg-card border-4 border-accent p-12 text-center max-w-2xl mx-4">
        <div className="text-8xl mb-6 animate-bounce">
          {myRank === 1 ? "🏆" : myRank === 2 ? "🥈" : myRank === 3 ? "🥉" : "🎉"}
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">{myRank === 1 ? "أنت البطل!" : "أحسنت!"}</h2>
        <p className="text-2xl mb-8 leading-relaxed">حصلت على المركز {myRank}</p>

        <div className="space-y-4 mb-8">
          {sortedPlayers.map((player, index) => (
            <Card key={player.id} className={`p-4 ${index === 0 ? "border-2 border-accent" : ""}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {index === 0 && <Crown className="w-6 h-6 text-accent" />}
                  {index > 0 && <span className="w-6 text-center font-bold text-muted-foreground">{index + 1}</span>}
                  <div className="text-4xl">{player.emoji}</div>
                  <div className="text-right">
                    <p className="font-bold text-lg">{player.name}</p>
                    {player.id === 1 && <Badge className="bg-primary text-white">أنت</Badge>}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-accent">{player.score}</p>
                  <p className="text-sm text-muted-foreground">نقطة</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex gap-4 justify-center">
          <Link href="/games">
            <Button size="lg" className="kid-button bg-primary text-white">
              العودة للألعاب
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="kid-button bg-transparent"
            onClick={() => {
              setGameState("lobby")
              setCurrentRound(1)
              setMyScore(0)
              setPlayers([{ id: 1, name: "أنت", emoji: "👦", score: 0, ready: true }])
            }}
          >
            العب مرة أخرى
          </Button>
        </div>
      </Card>
    </div>
  )
}
