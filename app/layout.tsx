import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Tajawal } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const tajawal = Tajawal({
  weight: ["400", "500", "700", "800"],
  subsets: ["arabic"],
  variable: "--font-arabic",
})

export const metadata: Metadata = {
  title: "تِبيان - منصة التعلم الذكية للأطفال",
  description: "منصة تعليمية تفاعلية مدعومة بالذكاء الاصطناعي للأطفال",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.className} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
