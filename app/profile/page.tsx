"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { ChevronRight, User, Bell, Volume2, Moon, Globe, Shield, HelpCircle, LogOut } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"

export default function ProfilePage() {
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const { dialect, setDialect } = useLanguage()

  const profile = {
    name: "أحمد محمد",
    avatar: "👦",
    age: 7,
    grade: "الصف الثاني",
    joinDate: "سبتمبر 2024",
    totalStars: 250,
    level: 5,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b-4 border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="ghost" size="icon" className="w-12 h-12">
                <ChevronRight className="w-6 h-6" />
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                <User className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
                ملفي الشخصي
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <section className="mb-8">
          <Card className="kid-card bg-card border-2 p-8">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-5xl border-4 border-white shadow-lg">
                {profile.avatar}
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2">{profile.name}</h2>
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="secondary" className="text-base">
                    {profile.grade}
                  </Badge>
                  <Badge variant="outline" className="text-base">
                    المستوى {profile.level}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">عضو منذ {profile.joinDate}</p>
              </div>
              <Button className="kid-button bg-primary text-white">تعديل الملف</Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t-2">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary mb-1">{profile.totalStars}</p>
                <p className="text-sm text-muted-foreground">نجمة</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-secondary mb-1">12</p>
                <p className="text-sm text-muted-foreground">درس مكتمل</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent mb-1">5</p>
                <p className="text-sm text-muted-foreground">إنجاز</p>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-8">
          <h3 className="kid-heading mb-6">الإعدادات</h3>

          <Card className="kid-card bg-card border-2 p-6">
            <div className="space-y-6">
              <div className="py-4 border-b-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold">اللهجة</h4>
                    <p className="text-sm text-muted-foreground">اختر اللهجة المفضلة</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mr-16">
                  <Button
                    variant={dialect === "standard" ? "default" : "outline"}
                    className={`kid-button ${dialect === "standard" ? "bg-primary text-white" : "bg-transparent"}`}
                    onClick={() => setDialect("standard")}
                  >
                    العربية الفصحى
                  </Button>
                  <Button
                    variant={dialect === "omani" ? "default" : "outline"}
                    className={`kid-button ${dialect === "omani" ? "bg-accent text-white" : "bg-transparent"}`}
                    onClick={() => setDialect("omani")}
                  >
                    اللهجة العمانية 🇴🇲
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between py-4 border-b-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Volume2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">الأصوات</h4>
                    <p className="text-sm text-muted-foreground">تشغيل الأصوات والموسيقى</p>
                  </div>
                </div>
                <Switch checked={soundEnabled} onCheckedChange={setSoundEnabled} />
              </div>

              <div className="flex items-center justify-between py-4 border-b-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Bell className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">الإشعارات</h4>
                    <p className="text-sm text-muted-foreground">تلقي تنبيهات الدروس والإنجازات</p>
                  </div>
                </div>
                <Switch checked={notificationsEnabled} onCheckedChange={setNotificationsEnabled} />
              </div>

              <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Moon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">الوضع الليلي</h4>
                    <p className="text-sm text-muted-foreground">تفعيل الوضع المظلم</p>
                  </div>
                </div>
                <Switch checked={darkMode} onCheckedChange={setDarkMode} />
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-8">
          <h3 className="kid-heading mb-6">الدعم والمساعدة</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="kid-card bg-card border-2 p-6 cursor-pointer hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">الخصوصية والأمان</h4>
                  <p className="text-sm text-muted-foreground">إدارة بياناتك</p>
                </div>
              </div>
            </Card>

            <Card className="kid-card bg-card border-2 p-6 cursor-pointer hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">المساعدة والدعم</h4>
                  <p className="text-sm text-muted-foreground">احصل على المساعدة</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section>
          <Button
            variant="outline"
            className="w-full kid-button bg-transparent text-destructive border-destructive hover:bg-destructive/10"
          >
            <LogOut className="ml-2 w-5 h-5" />
            تسجيل الخروج
          </Button>
        </section>
      </main>
    </div>
  )
}
