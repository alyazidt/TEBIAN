"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Dialect = "standard" | "omani"

interface LanguageContextType {
  dialect: Dialect
  setDialect: (dialect: Dialect) => void
  t: (key: string) => string
}

const translations = {
  standard: {
    // Greetings
    hello: "مرحباً",
    welcome: "أهلاً وسهلاً",
    goodMorning: "صباح الخير",
    goodEvening: "مساء الخير",
    howAreYou: "كيف حالك؟",

    // Common phrases
    letsStart: "لنبدأ",
    continue: "استمر",
    next: "التالي",
    back: "رجوع",
    finish: "إنهاء",
    play: "العب",
    learn: "تعلم",
    excellent: "ممتاز",
    great: "رائع",
    goodJob: "أحسنت",
    tryAgain: "حاول مرة أخرى",

    // Navigation
    home: "الرئيسية",
    lessons: "دروسي",
    games: "الألعاب",
    labs: "المختبرات",
    achievements: "إنجازاتي",
    profile: "ملفي الشخصي",

    // Teacher messages
    teacherHappy: "أنا سعيد برؤيتك اليوم!",
    teacherExcited: "لدينا دروس رائعة اليوم!",
    teacherEncouraging: "أنت تقوم بعمل رائع!",
    teacherProud: "أنا فخور بك جداً!",
    ready: "جاهز",
    areYouReady: "هل أنت مستعد؟",
  },
  omani: {
    // Greetings - Omani dialect
    hello: "هلا",
    welcome: "حياك الله",
    goodMorning: "صباح النور",
    goodEvening: "مساك الله بالخير",
    howAreYou: "شخبارك؟",

    // Common phrases - Omani dialect
    letsStart: "يلا نبدأ",
    continue: "واصل",
    next: "اللي بعده",
    back: "ارجع",
    finish: "خلاص",
    play: "العب",
    learn: "تعلم",
    excellent: "زين مرة",
    great: "حلو",
    goodJob: "شاطر",
    tryAgain: "حاول مرة ثانية",

    // Navigation
    home: "البيت",
    lessons: "دروسي",
    games: "الألعاب",
    labs: "المختبرات",
    achievements: "إنجازاتي",
    profile: "ملفي",

    // Teacher messages - Omani dialect
    teacherHappy: "مبسوط إني شايفك اليوم!",
    teacherExcited: "عندنا دروس حلوة اليوم!",
    teacherEncouraging: "ماشاء الله عليك!",
    teacherProud: "فخور فيك مرة!",
    ready: "جاهز",
    areYouReady: "جاهز ولا لا؟",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [dialect, setDialect] = useState<Dialect>("standard")

  useEffect(() => {
    const savedDialect = localStorage.getItem("dialect") as Dialect
    if (savedDialect) {
      setDialect(savedDialect)
    }
  }, [])

  const handleSetDialect = (newDialect: Dialect) => {
    setDialect(newDialect)
    localStorage.setItem("dialect", newDialect)
  }

  const t = (key: string): string => {
    return translations[dialect][key as keyof (typeof translations)["standard"]] || key
  }

  return (
    <LanguageContext.Provider value={{ dialect, setDialect: handleSetDialect, t }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
