import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '프랙탈처럼 자라는 나의 데이터 여정',
  description: '데이터를 사랑하는 개발자의 프랙탈 성장 스토리 - 어르신을 위한 법률 음성 서비스 개발',
  keywords: ['데이터 분석', '개발자', '프랙탈', '어르신 서비스', '법률 AI'],
  authors: [{ name: '데이터 개발자' }],
  openGraph: {
    title: '프랙탈처럼 자라는 나의 데이터 여정',
    description: '데이터를 사랑하는 개발자의 프랙탈 성장 스토리',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
} 