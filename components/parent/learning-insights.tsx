import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react"

export function LearningInsights() {
  const insights = [
    {
      type: "success",
      icon: CheckCircle2,
      title: "أداء ممتاز في الرياضيات",
      description: "أحمد يتفوق في دروس الرياضيات بمعدل 95%",
      action: "شجعه على الاستمرار",
      color: "success",
    },
    {
      type: "tip",
      icon: Lightbulb,
      title: "وقت مثالي للتعلم",
      description: "فاطمة أكثر نشاطاً في الصباح الباكر",
      action: "جدولة الدروس صباحاً",
      color: "primary",
    },
    {
      type: "warning",
      icon: AlertCircle,
      title: "يحتاج إلى مزيد من التمرين",
      description: "أحمد يواجه صعوبة في دروس الإملاء",
      action: "تخصيص وقت إضافي",
      color: "accent",
    },
    {
      type: "achievement",
      icon: TrendingUp,
      title: "تحسن ملحوظ",
      description: "فاطمة حسنت أداءها بنسبة 20% هذا الشهر",
      action: "كافئها على تقدمها",
      color: "secondary",
    },
  ]

  return (
    <Card className="p-6 border-2">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
          <Lightbulb className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-xl font-bold">رؤى وتوصيات تعليمية</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {insights.map((insight, index) => {
          const Icon = insight.icon
          return (
            <Card key={index} className="p-5 border-2 bg-card">
              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 bg-${insight.color}/10 rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  <Icon className={`w-5 h-5 text-${insight.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold mb-1">{insight.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{insight.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {insight.action}
                  </Badge>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </Card>
  )
}
