"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3 } from "lucide-react"

export function ClassStats() {
  const subjects = [
    { name: "اللغة العربية", progress: 85, students: 20, color: "primary" },
    { name: "الرياضيات", progress: 78, students: 18, color: "secondary" },
    { name: "العلوم", progress: 92, students: 22, color: "accent" },
    { name: "الفنون", progress: 88, students: 15, color: "success" },
  ]

  return (
    <Card className="p-6 border-2">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-xl font-bold">إحصائيات المواد الدراسية</h3>
        </div>
        <Badge variant="outline">هذا الأسبوع</Badge>
      </div>

      <div className="space-y-6">
        {subjects.map((subject, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <h4 className="font-bold">{subject.name}</h4>
                <span className="text-sm text-muted-foreground">{subject.students} طالب</span>
              </div>
              <span className="font-bold text-lg">{subject.progress}%</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full bg-${subject.color} rounded-full transition-all duration-500`}
                style={{ width: `${subject.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t-2 border-border">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-primary">86%</p>
            <p className="text-sm text-muted-foreground">متوسط الإنجاز</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-secondary">142</p>
            <p className="text-sm text-muted-foreground">دروس مكتملة</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-accent">18</p>
            <p className="text-sm text-muted-foreground">ساعة تعلم</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
