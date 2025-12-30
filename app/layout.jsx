import './globals.css'

export const metadata = {
  title: 'Farhan Khan | AI/ML Engineer & Full-Stack Developer',
  description: 'Computer Science & AI student at University of Alberta. Experienced in AI/ML, cloud infrastructure, and full-stack development with React, .NET, Azure, and AWS.',
  keywords: 'Farhan Khan, AI Engineer, Machine Learning, Full Stack Developer, React, .NET, Azure, AWS, University of Alberta',
  authors: [{ name: 'Farhan Khan' }],
  openGraph: {
    title: 'Farhan Khan | AI/ML Engineer',
    description: 'Building intelligent systems with AI/ML, cloud infrastructure, and full-stack development',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Epilogue:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
