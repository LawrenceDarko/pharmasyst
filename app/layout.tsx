import type { Metadata } from 'next'
import { Advent_Pro, Capriola, Inter } from 'next/font/google'
import './globals.css'
import { GeneralContextProvider } from './hooks/GeneralContext'


const inter = Inter({ subsets: ['latin'] })

const inter_two = Inter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inter-two",
});
const adventPro = Advent_Pro({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-advent-pro",
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <GeneralContextProvider>
      <html lang="en">
        <body className={`${inter.className} ${inter_two.variable} ${adventPro.variable}`}>{children}</body>
      </html>
    </GeneralContextProvider>
  )
}
