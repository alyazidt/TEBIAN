"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ChevronRight, Star, Trophy, RotateCcw, Zap, Volume2 } from "lucide-react"

const labContent = {
  "1": {
    title: "رحلة إلى الفضاء",
    icon: "🪐",
    type: "planets",
    steps: [
      {
        title: "مرحباً بك في النظام الشمسي!",
        description: "دعنا نستكشف الكواكب معاً",
        planet: "sun",
        emoji: "☀️",
        facts: ["الشمس نجم وليست كوكباً", "تمد الشمس الأرض بالضوء والحرارة", "الشمس أكبر من الأرض بمليون مرة"],
        interactive: "rotate",
      },
      {
        title: "كوكب عطارد",
        description: "أقرب كوكب للشمس",
        planet: "mercury",
        emoji: "🔴",
        facts: ["أصغر كوكب في النظام الشمسي", "يومه أطول من سنته!", "ليس له أقمار"],
        interactive: "zoom",
      },
      {
        title: "كوكب الزهرة",
        description: "الكوكب الأكثر سخونة",
        planet: "venus",
        emoji: "🟡",
        facts: ["ألمع كوكب في السماء", "يدور عكس باقي الكواكب", "مغطى بالغيوم السامة"],
        interactive: "rotate",
      },
      {
        title: "كوكب الأرض",
        description: "كوكبنا الجميل",
        planet: "earth",
        emoji: "🌍",
        facts: ["الكوكب الوحيد الذي به حياة", "70% من سطحه ماء", "له قمر واحد"],
        interactive: "zoom",
      },
      {
        title: "كوكب المريخ",
        description: "الكوكب الأحمر",
        planet: "mars",
        emoji: "🔴",
        facts: ["لونه أحمر بسبب الصدأ", "له قمران صغيران", "يوجد به أكبر جبل في النظام الشمسي"],
        interactive: "rotate",
      },
    ],
  },
  "2": {
    title: "مختبر الكيمياء المرح",
    icon: "🧪",
    type: "chemistry",
    steps: [
      {
        title: "مرحباً بك في المختبر!",
        description: "تعلم عن العناصر الكيميائية",
        element: "intro",
        emoji: "🔬",
        facts: ["كل شيء حولنا مصنوع من عناصر", "هناك 118 عنصر معروف", "العناصر لا يمكن تقسيمها"],
        interactive: "mix",
      },
      {
        title: "الماء - H₂O",
        description: "أهم مركب كيميائي",
        element: "water",
        emoji: "💧",
        facts: ["يتكون من ذرتي هيدروجين وذرة أكسجين", "ضروري للحياة", "يتحول بين ثلاث حالات"],
        interactive: "mix",
      },
      {
        title: "الأكسجين - O",
        description: "غاز الحياة",
        element: "oxygen",
        emoji: "💨",
        facts: ["نتنفسه للبقاء على قيد الحياة", "يساعد على الاحتراق", "موجود في الماء والهواء"],
        interactive: "bubble",
      },
      {
        title: "الكربون - C",
        description: "أساس الحياة",
        element: "carbon",
        emoji: "⚫",
        facts: ["موجود في كل الكائنات الحية", "يشكل الماس والفحم", "أساس الكيمياء العضوية"],
        interactive: "build",
      },
    ],
  },
}

export function LabViewer({ labId }: { labId: string }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isInteracting, setIsInteracting] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [scale, setScale] = useState(1)
  const [earnedStars, setEarnedStars] = useState(0)
  const [showCelebration, setShowCelebration] = useState(false)

  const lab = labContent[labId as keyof typeof labContent] || labContent["1"]
  const step = lab.steps[currentStep]
  const progress = ((currentStep + 1) / lab.steps.length) * 100

  useEffect(() => {
    if (isInteracting) {
      const interval = setInterval(() => {
        setRotation((prev) => (prev + 2) % 360)
      }, 50)
      return () => clearInterval(interval)
    }
  }, [isInteracting])

  const handleInteract = () => {
    setIsInteracting(true)
    setTimeout(() => setIsInteracting(false), 3000)

    if (step.interactive === "zoom") {
      setScale(1.5)
      setTimeout(() => setScale(1), 2000)
    }
  }

  const handleNext = () => {
    if (currentStep < lab.steps.length - 1) {
      setCurrentStep(currentStep + 1)
      setEarnedStars(earnedStars + 1)
      setRotation(0)
      setScale(1)
    } else {
      setShowCelebration(true)
    }
  }

  const handleSpeak = (text: string) => {
    console.log("[v0] Speaking:", text)
  }

  if (showCelebration) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-accent/20 via-primary/20 to-secondary/20 flex items-center justify-center">
        <Card className="kid-card bg-card border-4 border-accent p-12 text-center max-w-2xl mx-4">
          <div className="text-8xl mb-6 animate-bounce">🎉</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">عالم صغير!</h2>
          <p className="text-2xl mb-8 leading-relaxed">لقد أكملت التجربة بنجاح!</p>

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
              <p className="text-xl font-bold">+100 نقطة</p>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Link href="/labs">
              <Button size="lg" className="kid-button bg-primary text-white">
                العودة للمختبرات
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="kid-button bg-transparent"
              onClick={() => {
                setCurrentStep(0)
                setEarnedStars(0)
                setShowCelebration(false)
              }}
            >
              <RotateCcw className="ml-2 w-6 h-6" />
              إعادة التجربة
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
              <Link href="/labs">
                <Button variant="ghost" size="icon" className="w-12 h-12">
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </Link>
              <h1 className="text-xl md:text-2xl font-bold">{lab.title}</h1>
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
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary">{step.title}</h2>
                <p className="text-xl text-muted-foreground">{step.description}</p>
              </div>

              {/* Interactive 3D-like element */}
              <div className="relative py-12">
                <div
                  className="text-9xl md:text-[12rem] transition-all duration-500 cursor-pointer"
                  style={{
                    transform: `rotate(${rotation}deg) scale(${scale})`,
                  }}
                  onClick={handleInteract}
                >
                  {step.emoji}
                </div>

                {isInteracting && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-64 h-64 border-4 border-accent rounded-full animate-ping opacity-50"></div>
                  </div>
                )}

                <div className="mt-6">
                  <Button
                    size="lg"
                    onClick={handleInteract}
                    disabled={isInteracting}
                    className="kid-button bg-accent text-white hover:bg-accent/90"
                  >
                    <Zap className="ml-2 w-6 h-6" />
                    {step.interactive === "rotate" && "أدر الكوكب"}
                    {step.interactive === "zoom" && "قرّب للمشاهدة"}
                    {step.interactive === "mix" && "امزج العناصر"}
                    {step.interactive === "bubble" && "شاهد الفقاعات"}
                    {step.interactive === "build" && "ابنِ الجزيء"}
                  </Button>
                </div>
              </div>

              {/* Facts section */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-secondary">حقائق مثيرة:</h3>
                <div className="grid gap-3">
                  {step.facts.map((fact, index) => (
                    <Card key={index} className="bg-secondary/10 border-2 border-secondary/20 p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>
                        <div className="flex-1 flex items-center justify-between gap-3">
                          <p className="text-lg leading-relaxed text-right">{fact}</p>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => handleSpeak(fact)}
                            className="flex-shrink-0"
                          >
                            <Volume2 className="w-5 h-5 text-secondary" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <Button
                  size="lg"
                  onClick={handleNext}
                  className="kid-button bg-primary text-white hover:bg-primary/90 text-2xl px-12"
                >
                  {currentStep < lab.steps.length - 1 ? "التالي" : "إنهاء التجربة"}
                  <ChevronRight className="mr-2 w-8 h-8 rotate-180" />
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 pt-4">
                {lab.steps.map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full transition-all ${
                      i === currentStep ? "bg-primary w-8" : "bg-muted"
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
