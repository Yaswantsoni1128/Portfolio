import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  subsets: ['latin'], 
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Yaswant Portfolio',
  description: 'Full-stack developer and BTech 3rd year student at IIITUNA with internship experience and multiple projects.',
  keywords: ['Full Stack Developer', 'BTech', 'IIITUNA', 'React', 'Next.js', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Yaswant' }],
  openGraph: {
    title: 'Yaswant Portfolio',
    description: 'Full-stack developer and BTech 3rd year student at IIITUNA with internship experience and multiple projects.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | BTech Student at IIITUNA',
    description: 'Full-stack developer and BTech 3rd year student at IIITUNA with internship experience and multiple projects.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <div className="relative min-h-screen animated-bg">
          {children}
        </div>
      </body>
    </html>
  )
}