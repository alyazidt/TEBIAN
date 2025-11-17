"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ChevronRight, Star, Trophy, Volume2 } from "lucide-react"
import { useState } from "react"

const lessonContent = {
  "1": {
    title: "الحروف العربية - الجزء الأول",
    icon: "📚",
    slides: [
      {
        letter: "أ",
        word: "أسد",
        image: "🦁",
        sound: "أ - أسد",
      },
      {
        letter: "ب",
        word: "بطة",
        image: "🦆",
        sound: "ب - بطة",
      },
      {
        letter: "ت",
        word: "تفاحة",
        image: "🍎",
        sound: "ت - تفاحة",
      },
    ],
  },
  "2": {
    title: "الأرقام العربية",
    icon: "🔢",
    slides: [
      {
        letter: "١",
        word: "واحد",
        image: "☝️",
        sound: "واحد",
      },
      {
        letter: "٢",
        word: "اثنان",
        image: "✌️",
        sound: "اثنان",
      },
      {
        letter: "٣",
        word: "ثلاثة",
        image: "🤟",
        sound: "ثلاثة",
      },
    ],
  },
}

export default function LessonViewer({ lessonId }: { lessonId: string }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [earnedStars, setEarnedStars] = useState(0)
  const [showCelebration, setShowCelebration] = useState(false)

  const lesson = lessonContent[lessonId as keyof typeof lessonContent] || lessonContent["1"]
  const slide = lesson.slides[currentSlide]
  const progress = ((currentSlide + 1) / lesson.slides.length) * 100

  const handleNext = () => {
    if (currentSlide < lesson.slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
      setEarnedStars(earnedStars + 1)
    } else {
      setShowCelebration(true)
    }
  }

  const handleSpeak = () => {
    // في التطبيق الحقيقي، سيتم استخدام Web Speech API
    console.log("Speaking:", slide.sound)
  }

  if (showCelebration) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-accent/20 via-primary/20 to-secondary/20 flex items-center justify-center">
        <Card className="kid-card bg-card border-4 border-accent p-12 text-center max-w-2xl mx-4">
          <div className="text-8xl mb-6 animate-bounce">🎉</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">أحسنت!</h2>
          <p className="text-2xl mb-8 leading-relaxed">لقد أكملت الدرس بنجاح!</p>

          <div className="flex items-center justify-center gap-2 mb-8">
            {[...Array(3)].map((_, i) => (
              <Star key={i} className="w-12 h-12 text-accent fill-accent animate-pulse" />
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center mb-2 mx-auto">
                <Trophy className="w-10 h-10 text-accent" />
              </div>
              <p className="text-xl font-bold">+50 نقطة</p>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Link href="/lessons">
              <Button size="lg" className="kid-button bg-primary text-white">
                العودة للدروس
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="kid-button bg-transparent">
                الصفحة الرئيسية
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b-4 border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/lessons">
                <Button variant="ghost" size="icon" className="w-12 h-12">
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </Link>
              <h1 className="text-xl md:text-2xl font-bold">{lesson.title}</h1>
            </div>

            <div className="flex items-center gap-2">
              {[...Array(earnedStars)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-accent fill-accent" />
              ))}
            </div>
          </div>

          <div className="mt-4">
            <Progress value={progress} className="h-3" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="kid-card bg-card border-4 p-8 md:p-12">
            <div className="text-center space-y-8">
              <div className="text-9xl md:text-[12rem] font-bold text-primary animate-pulse">{slide.letter}</div>

              <div className="space-y-4">
                <div className="text-8xl">{slide.image}</div>
                <h3 className="text-4xl md:text-5xl font-bold">{slide.word}</h3>
              </div>

              <Button
                size="lg"
                onClick={handleSpeak}
                className="kid-button bg-secondary text-white hover:bg-secondary/90"
              >
                <Volume2 className="ml-2 w-8 h-8" />
                استمع للنطق
              </Button>

              <div className="pt-8">
                <Button
                  size="lg"
                  onClick={handleNext}
                  className="kid-button bg-primary text-white hover:bg-primary/90 text-2xl px-12"
                >
                  {currentSlide < lesson.slides.length - 1 ? "التالي" : "إنهاء الدرس"}
                  <ChevronRight className="mr-2 w-8 h-8 rotate-180" />
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 pt-4">
                {lesson.slides.map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full transition-all ${
                      i === currentSlide ? "bg-primary w-8" : "bg-muted"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
