
import './globals.css'
import {Montserrat} from 'next/font/google'

const inter =  Montserrat({subsets: ['latin']})

export const metadata = {
  title: 'Rodwin Osorio Page',
  description: 'Generated with love by vercel',
}

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
