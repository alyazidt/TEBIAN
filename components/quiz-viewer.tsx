"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ChevronRight, Star, Trophy, Clock } from "lucide-react"

const quizData = {
  "1": {
    title: "تقييم اللغة العربية - المستوى الأول",
    questions: [
      {
        question: "ما هو الحرف الأول في كلمة 'أسد'؟",
        options: ["أ", "س", "د", "ل"],
        correct: 0,
        image: "🦁",
      },
      {
        question: "أي من هذه الكلمات تبدأ بحرف 'ب'؟",
        options: ["تفاحة", "بطة", "أسد", "قطة"],
        correct: 1,
        image: "🦆",
      },
      {
        question: "كم عدد الحروف في كلمة 'قلم'؟",
        options: ["2", "3", "4", "5"],
        correct: 1,
        image: "✏️",
      },
    ],
  },
  "2": {
    title: "تقييم الرياضيات - المستوى الأول",
    questions: [
      {
        question: "كم يساوي 2 + 2؟",
        options: ["3", "4", "5", "6"],
        correct: 1,
        image: "🔢",
      },
      {
        question: "أي رقم أكبر؟",
        options: ["5", "3", "7", "4"],
        correct: 2,
        image: "📊",
      },
      {
        question: "كم يساوي 10 - 3؟",
        options: ["6", "7", "8", "9"],
        correct: 1,
        image: "➖",
      },
    ],
  },
}

export default function QuizViewer({ quizId }: { quizId: string }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes in seconds

  const quiz = quizData[quizId as keyof typeof quizData] || quizData["1"]
  const question = quiz.questions[currentQuestion]
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index)
  }

  const handleNext = () => {
    if (selectedAnswer === question.correct) {
      setScore(score + 1)
    }

    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      setShowResult(true)
    }
  }

  const finalScore = Math.round((score / quiz.questions.length) * 100)
  const stars = finalScore >= 90 ? 3 : finalScore >= 70 ? 2 : finalScore >= 50 ? 1 : 0

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-accent/20 via-primary/20 to-secondary/20 flex items-center justify-center">
        <Card className="kid-card bg-card border-4 border-accent p-12 text-center max-w-2xl mx-4">
          <div className="text-8xl mb-6 animate-bounce">{finalScore >= 70 ? "🎉" : finalScore >= 50 ? "👍" : "💪"}</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            {finalScore >= 70 ? "ممتاز!" : finalScore >= 50 ? "جيد جداً!" : "استمر في المحاولة!"}
          </h2>
          <p className="text-2xl mb-8 leading-relaxed">
            لقد حصلت على {score} من {quiz.questions.length} إجابة صحيحة
          </p>

          <div className="flex items-center justify-center gap-2 mb-8">
            {[...Array(3)].map((_, i) => (
              <Star
                key={i}
                className={`w-12 h-12 ${i < stars ? "text-accent fill-accent animate-pulse" : "text-muted"}`}
              />
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mb-2 mx-auto">
                <Trophy className="w-10 h-10 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary mb-1">{finalScore}%</p>
              <p className="text-sm text-muted-foreground">الدرجة النهائية</p>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Link href="/assessment">
              <Button size="lg" className="kid-button bg-primary text-white">
                العودة للتقييمات
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="kid-button bg-transparent"
              onClick={() => {
                setCurrentQuestion(0)
                setSelectedAnswer(null)
                setScore(0)
                setShowResult(false)
              }}
            >
              إعادة المحاولة
            </Button>
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
              <Link href="/assessment">
                <Button variant="ghost" size="icon" className="w-12 h-12">
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </Link>
              <h1 className="text-xl md:text-2xl font-bold">{quiz.title}</h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-xl">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-lg font-bold">
                  {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold">
                السؤال {currentQuestion + 1} من {quiz.questions.length}
              </span>
              <span className="text-sm font-bold">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="kid-card bg-card border-4 p-8 md:p-12">
            <div className="text-center space-y-8">
              <div className="text-8xl mb-6">{question.image}</div>

              <h3 className="text-3xl md:text-4xl font-bold leading-relaxed text-balance">{question.question}</h3>

              <div className="grid md:grid-cols-2 gap-4 pt-8">
                {question.options.map((option, index) => (
                  <Button
                    key={index}
                    size="lg"
                    variant={selectedAnswer === index ? "default" : "outline"}
                    className={`kid-button text-2xl py-8 ${
                      selectedAnswer === index
                        ? "bg-primary text-white border-primary"
                        : "bg-transparent hover:bg-primary/10"
                    }`}
                    onClick={() => handleAnswer(index)}
                  >
                    {option}
                  </Button>
                ))}
              </div>

              <div className="pt-8">
                <Button
                  size="lg"
                  onClick={handleNext}
                  disabled={selectedAnswer === null}
                  className="kid-button bg-secondary text-white hover:bg-secondary/90 text-2xl px-12 disabled:opacity-50"
                >
                  {currentQuestion < quiz.questions.length - 1 ? "السؤال التالي" : "إنهاء الاختبار"}
                  <ChevronRight className="mr-2 w-8 h-8 rotate-180" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
