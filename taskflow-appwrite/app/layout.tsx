import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Task Flow 1.0',
  description: 'task list making app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#F5F6F8]'>{children}</body>
    </html>
  )
}
