"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"

export function WeeklyProgress() {
  const days = [
    { day: "السبت", lessons: 2, hours: 1.5 },
    { day: "الأحد", lessons: 3, hours: 2.0 },
    { day: "الاثنين", lessons: 2, hours: 1.2 },
    { day: "الثلاثاء", lessons: 1, hours: 0.8 },
    { day: "الأربعاء", lessons: 3, hours: 1.8 },
    { day: "الخميس", lessons: 1, hours: 0.4 },
    { day: "الجمعة", lessons: 0, hours: 0 },
  ]

  const maxLessons = Math.max(...days.map((d) => d.lessons))

  return (
    <Card className="p-6 border-2">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-xl font-bold">التقدم الأسبوعي</h3>
        </div>
        <Badge variant="outline">هذا الأسبوع</Badge>
      </div>

      <div className="flex items-end justify-between gap-4 h-64 mb-6">
        {days.map((day, index) => (
          <div key={index} className="flex-1 flex flex-col items-center gap-2">
            <div className="flex-1 w-full flex items-end">
              <div
                className="w-full bg-gradient-to-t from-primary to-secondary rounded-t-xl transition-all duration-500 hover:opacity-80 cursor-pointer relative group"
                style={{ height: `${(day.lessons / maxLessons) * 100}%`, minHeight: day.lessons > 0 ? "20%" : "0" }}
              >
                {day.lessons > 0 && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap">
                      {day.lessons} دروس
                      <br />
                      {day.hours} ساعة
                    </div>
                  </div>
                )}
              </div>
            </div>
            <span className="text-sm font-bold text-muted-foreground">{day.day}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 pt-6 border-t-2 border-border">
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">12</p>
          <p className="text-sm text-muted-foreground">دروس مكتملة</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-secondary">7.7</p>
          <p className="text-sm text-muted-foreground">ساعات تعلم</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-accent">+15%</p>
          <p className="text-sm text-muted-foreground">مقارنة بالأسبوع الماضي</p>
        </div>
      </div>
    </Card>
  )
}
