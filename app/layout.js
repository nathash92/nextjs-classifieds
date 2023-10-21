import { Nunito_Sans } from 'next/font/google'
import './globals.css'

const font = Nunito_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Ads',  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={font.className + ' bg-gray-50'}>{children}</body>
    </html>
  )
}
