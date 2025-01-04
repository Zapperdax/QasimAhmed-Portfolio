import './globals.css'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from './components/ThemeProvider'

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Qasim Ahmed - Software Engineer',
  description: 'Portfolio of Qasim Ahmed, a passionate software engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

