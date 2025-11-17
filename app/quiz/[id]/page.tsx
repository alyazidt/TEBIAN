"use client"
import QuizViewer from "@/components/quiz-viewer"

const quizData = {
  1: {
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
}

export default async function QuizPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return <QuizViewer quizId={id} />
}
