"use client"
import LessonViewer from "@/components/lesson-viewer"

const lessonContent = {
  1: {
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
}

export default async function LessonDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return <LessonViewer lessonId={id} />
}
