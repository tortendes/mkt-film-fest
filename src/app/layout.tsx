import './globals.css'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import Link from 'next/link'

export const metadata = {
  title: 'The 2023 Makatotohanan Film Awards',
  description: 'Celebrating the best of MKT',
}

const cg = Cormorant_Garamond({ subsets:['latin'], weight: ['600'] })
const mont = Montserrat({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#141414] text-white">
        <div className='flex flex-col justify-center items-center mt-3'>
          <h1 className={`${cg.className} text-2xl uppercase`}>Makatotohanan Film Awards</h1>
          <div className="text-base flex justify-between items-center gap-5">
            <Link href="/about" legacyBehavior>
              <a className={`${mont.className}`}>About</a>
            </Link>
            <hr className='w-5 h-1 bg-amber-500 rounded border-0' />
            <Link href="/films" legacyBehavior>
              <a className={`${mont.className}`}>Films</a>
            </Link>
            <hr className='w-5 h-1 bg-amber-500 rounded border-0' />
            <Link href="/vote" legacyBehavior>
              <a className={`${mont.className}`}>Voting</a>
            </Link>
            <hr className='w-5 h-1 bg-amber-500 rounded border-0' />
            <Link href="/faq" legacyBehavior>
              <a className={`${mont.className}`}>F.A.Q</a>
            </Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
