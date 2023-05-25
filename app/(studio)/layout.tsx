import '../globals.css'

export const metadata = {
  title: 'Personal Website Admin',
  description: 'This is my personal website admin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
