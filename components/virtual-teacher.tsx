"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Volume2, VolumeX, Heart, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

type Mood = "happy" | "excited" | "encouraging" | "proud" | "thinking"

const moodEmojis = {
  happy: "😊",
  excited: "🤩",
  encouraging: "💪",
  proud: "🌟",
  thinking: "🤔",
}

const greetingsByMood = {
  standard: {
    happy: ["مرحباً! أنا سعيد جداً برؤيتك اليوم! 😊", "يا هلا! كيف حالك اليوم؟ 🌸", "أهلاً وسهلاً! جاهز للتعلم؟ ✨"],
    excited: [
      "واو! لدينا دروس رائعة اليوم! 🎉",
      "يا الله! متحمس جداً لنبدأ! 🚀",
      "هيا بنا! مغامرة جديدة في انتظارنا! ⭐",
    ],
    encouraging: ["أنت تقوم بعمل رائع! استمر! 💪", "ممتاز! أنا فخور بك! 🌟", "رائع! تقدمك يسعدني كثيراً! 👏"],
    proud: ["أحسنت! أنت نجم حقيقي! ⭐", "فخور بك جداً! واصل التميز! 🏆", "عظيم! أنت تتحسن كل يوم! 🌟"],
    thinking: ["دعني أفكر... هل تحتاج مساعدة؟ 🤔", "سؤال جيد! دعنا نفكر معاً 💭", "هممم... لدي فكرة رائعة! 💡"],
  },
  omani: {
    happy: ["هلا! مبسوط إني شايفك اليوم! 😊", "يا هلا! شخبارك اليوم؟ 🌸", "حياك الله! جاهز نتعلم؟ ✨"],
    excited: ["واو! عندنا دروس حلوة اليوم! 🎉", "يا الله! متحمس مرة نبدأ! 🚀", "يلا! مغامرة جديدة تنطرنا! ⭐"],
    encouraging: ["ماشاء الله عليك! واصل! 💪", "زين مرة! فخور فيك! 🌟", "حلو! تقدمك يفرحني مرة! 👏"],
    proud: ["شاطر! أنت نجم حقيقي! ⭐", "فخور فيك مرة! واصل! 🏆", "عظيم! تتحسن كل يوم! 🌟"],
    thinking: ["خليني أفكر... تبي مساعدة؟ 🤔", "سؤال حلو! يلا نفكر سوا 💭", "هممم... عندي فكرة حلوة! 💡"],
  },
}

interface VirtualTeacherProps {
  message?: string
  mood?: Mood
  context?: "home" | "lesson" | "game" | "achievement"
}

export function VirtualTeacher({ message, mood = "happy", context = "home" }: VirtualTeacherProps) {
  const [currentMood, setCurrentMood] = useState<Mood>(mood)
  const [currentGreeting, setCurrentGreeting] = useState(0)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showHeart, setShowHeart] = useState(false)
  const { dialect } = useLanguage()

  useEffect(() => {
    const moodInterval = setInterval(() => {
      const moods: Mood[] = ["happy", "excited", "encouraging", "proud", "thinking"]
      const randomMood = moods[Math.floor(Math.random() * moods.length)]
      setCurrentMood(randomMood)
    }, 15000)

    return () => clearInterval(moodInterval)
  }, [])

  useEffect(() => {
    const greetingInterval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetingsByMood[dialect][currentMood].length)
    }, 6000)

    return () => clearInterval(greetingInterval)
  }, [currentMood, dialect])

  const getContextualGreeting = () => {
    if (message) return message

    const contextMessages = {
      standard: {
        lesson: "هيا نتعلم شيئاً جديداً اليوم! 📚",
        game: "وقت المرح والتعلم! هل أنت جاهز؟ 🎮",
        achievement: "واو! أنت بطل حقيقي! 🏆",
        home: greetingsByMood[dialect][currentMood][currentGreeting],
      },
      omani: {
        lesson: "يلا نتعلم شي جديد اليوم! 📚",
        game: "وقت اللعب والتعلم! جاهز ولا لا؟ 🎮",
        achievement: "واو! أنت بطل حقيقي! 🏆",
        home: greetingsByMood[dialect][currentMood][currentGreeting],
      },
    }

    return contextMessages[dialect][context]
  }

  const handleSpeak = () => {
    if (!soundEnabled) return

    setIsSpeaking(true)
    setIsAnimating(true)

    setTimeout(() => {
      setIsSpeaking(false)
      setIsAnimating(false)
    }, 3000)
  }

  const handleInteract = () => {
    setShowHeart(true)
    setCurrentMood("proud")

    setTimeout(() => {
      setShowHeart(false)
    }, 2000)
  }

  const getMoodText = () => {
    const moodTexts = {
      standard: {
        happy: "المعلم سعيد اليوم!",
        excited: "المعلم متحمس جداً!",
        encouraging: "المعلم يشجعك!",
        proud: "المعلم فخور بك!",
        thinking: "المعلم يفكر...",
      },
      omani: {
        happy: "المعلم مبسوط اليوم!",
        excited: "المعلم متحمس مرة!",
        encouraging: "المعلم يشجعك!",
        proud: "المعلم فخور فيك!",
        thinking: "المعلم يفكر...",
      },
    }

    return moodTexts[dialect][currentMood]
  }

  return (
    <div className="relative">
      <div className="relative w-full max-w-sm mx-auto">
        <div
          className={`relative transition-all duration-500 ${isSpeaking ? "scale-105" : "scale-100"} ${isAnimating ? "animate-bounce-slow" : ""}`}
        >
          <div className="w-64 h-64 mx-auto bg-white rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden border-8 border-white/50 cursor-pointer hover:scale-105 transition-transform">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20"></div>

            <div className="relative text-9xl transition-transform duration-300" onClick={handleInteract}>
              👨‍🏫
            </div>

            <div className="absolute bottom-4 right-4 text-4xl animate-bounce">{moodEmojis[currentMood]}</div>

            {showHeart && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Heart className="w-16 h-16 text-red-500 fill-red-500 animate-ping" />
              </div>
            )}

            {isSpeaking && (
              <>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full border-4 border-accent rounded-full animate-ping opacity-75"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex gap-2">
                    <div
                      className="w-3 h-3 bg-accent rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-3 h-3 bg-accent rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-3 h-3 bg-accent rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </>
            )}
          </div>

          <Card className="absolute -top-4 -right-8 bg-white p-4 rounded-2xl shadow-xl border-4 border-primary/20 max-w-xs animate-bounce-slow">
            <div className="flex items-start gap-2">
              <Sparkles className="w-5 h-5 text-accent flex-shrink-0 mt-1 animate-pulse" />
              <p className="text-lg font-bold text-foreground leading-relaxed">{getContextualGreeting()}</p>
            </div>
            <div className="absolute bottom-0 right-12 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white translate-y-full"></div>
          </Card>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <Button
            size="lg"
            onClick={handleSpeak}
            disabled={isSpeaking}
            className="kid-button bg-white text-primary hover:bg-white/90 disabled:opacity-50"
          >
            <Volume2 className="ml-2 w-6 h-6" />
            تحدث معي
          </Button>

          <Button
            size="icon"
            variant="outline"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="w-12 h-12 rounded-xl bg-white hover:bg-white/90"
          >
            {soundEnabled ? (
              <Volume2 className="w-6 h-6 text-primary" />
            ) : (
              <VolumeX className="w-6 h-6 text-muted-foreground" />
            )}
          </Button>

          <Button
            size="icon"
            variant="outline"
            onClick={handleInteract}
            className="w-12 h-12 rounded-xl bg-white hover:bg-white/90"
          >
            <Heart className="w-6 h-6 text-red-500" />
          </Button>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-muted-foreground">{getMoodText()}</p>
        </div>
      </div>
    </div>
  )
}
