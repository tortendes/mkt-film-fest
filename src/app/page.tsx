import Image from 'next/image'
import { Montserrat } from 'next/font/google'

import Main_Image from '../../public/Mkt Film Awards Logo.svg'

const montserrate = Montserrat({ subsets: ['latin'], style:["italic", "normal"] })

export default function Home() {
  return (
    <main className={`${montserrate.className} min-h-screen`}>
      <div className="flex flex-col items-center">
        <div className="max-w-[75vw] mb-5">
          <Image src={Main_Image} alt="Makatotohanan Film Awards"></Image>
        </div>
        <h1 className={`${montserrate.className} text-3xl text-white italic font-bold text-center`}>Celebrating the Best of Makatruth-made Short Films</h1>
        <p className="mt-3 md:max-w-[75vw] text-center">The Makatotohan Film Festival is the ceremony that celebrates the the best of the short films produced by MKT. Aiming to recognize the creativity and talent for each of the groups, bringing students, teachers, and parents together to witness history!</p>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </div>

      <div className="md:px-40">
        <p className='text-2xl font-thin'>Hosted by [insert name here], the 2023 Makatotohanan Film Awards will take place on Friday 28 April to celebrate the best of MKT&apos;s creativity and talent for film. Broadcasting LIVE on Facebook, make sure not to miss it!</p>
      </div>
    </main>
  )
}
