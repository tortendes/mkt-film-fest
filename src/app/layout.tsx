import './globals.scss'
import { Cormorant_Garamond, Montserrat, Rubik } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

import MKTFilmFest from '../../public/MKT.svg'

export const metadata = {
  title: 'Makatotohanan Film Festival',
  description: 'Celebrating the best of MKT',
}

const cg = Cormorant_Garamond({ subsets:['latin'], weight: ['600'] })
const mont = Montserrat({ subsets: ["latin"] });
const rb = Rubik({ subsets: ['latin'] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className='film-navbar'>
          <div className="logo-holder">
            <Image src={MKTFilmFest} alt="MKT Film Fest" className="logo-holder w-auto h-auto" width={500} height={200}></Image>
          </div>
          <div className='links-md'>
            <Link href="/" legacyBehavior>
              <a className={`${rb.className}`}>Home</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className={`${rb.className}`}>About</a>
            </Link>
            <Link href="/films" legacyBehavior>
              <a className={`${rb.className}`}>Films</a>
            </Link>
            <Link href='/awards/' passHref legacyBehavior>
              <div className='px-5 py-2.5 pl-32 flex items-center justify-center bg-film-awards-promo bg-cover bg-no-repeat hover:cursor-pointer text-white'>
                <div>
                  <h1 className={`${cg.className} text-3xl`}>MKT Film Awards</h1>
                  <h3 className={`${rb.className} text-sm`}>Vote NOW! Ends at Apr 27 12NN</h3>
                </div>
                <div className='fill-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" style={{ color: 'currentcolor' }}><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                </div>
              </div>
            </Link>
          </div>
        </nav>
          <div className="links-sm">
            <Link href="/" legacyBehavior>
              <a className={`${mont.className}`}>Home</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className={`${mont.className}`}>About</a>
            </Link>
            <Link href="/films" legacyBehavior>
              <a className={`${mont.className}`}>Films</a>
            </Link>
            <Link href="/awards" legacyBehavior>
              <a className={`${mont.className}`}>Awards</a>
            </Link>
          </div>
        {children}
      </body>
    </html>
  )
}
