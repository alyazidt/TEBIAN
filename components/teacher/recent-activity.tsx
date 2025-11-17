import { Card } from "@/components/ui/card"
import { CheckCircle2, AlertCircle, Clock } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      student: "أحمد محمد",
      action: "أكمل درس الحروف العربية",
      time: "منذ 10 دقائق",
      type: "success",
      icon: CheckCircle2,
    },
    {
      id: 2,
      student: "فاطمة علي",
      action: "حصلت على 3 نجوم في اختبار الأرقام",
      time: "منذ 25 دقيقة",
      type: "success",
      icon: CheckCircle2,
    },
    {
      id: 3,
      student: "محمد خالد",
      action: "لم يكمل الواجب المنزلي",
      time: "منذ ساعة",
      type: "warning",
      icon: AlertCircle,
    },
    {
      id: 4,
      student: "سارة أحمد",
      action: "بدأت درس الألوان والأشكال",
      time: "منذ ساعتين",
      type: "info",
      icon: Clock,
    },
    {
      id: 5,
      student: "علي حسن",
      action: "أكمل 5 دروس هذا الأسبوع",
      time: "منذ 3 ساعات",
      type: "success",
      icon: CheckCircle2,
    },
  ]

  return (
    <Card className="p-6 border-2">
      <h3 className="text-xl font-bold mb-6">النشاط الأخير</h3>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon
          return (
            <div
              key={activity.id}
              className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  activity.type === "success"
                    ? "bg-success/10"
                    : activity.type === "warning"
                      ? "bg-accent/10"
                      : "bg-primary/10"
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${
                    activity.type === "success"
                      ? "text-success"
                      : activity.type === "warning"
                        ? "text-accent"
                        : "text-primary"
                  }`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm mb-1">{activity.student}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{activity.action}</p>
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
