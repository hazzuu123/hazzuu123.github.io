import type React from "react"
import "@/app/globals.css"
import { Noto_Sans_KR } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export const metadata = {
  title: "프론트엔드 개발자 포트폴리오",
  description: "프론트엔드 개발자로서의 기술과 프로젝트를 보여주는 포트폴리오 웹사이트",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={notoSansKR.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

