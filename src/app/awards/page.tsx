/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import './style.scss'
import Link from 'next/link'

import Main_Image from '../../../public/Mkt Film Awards Logo.svg'
import Card from '../../../components/Card'

const montserrate = Montserrat({ subsets: ['latin'], style:["italic", "normal"] })

export default function Home() {
  return (
    <main className={`${montserrate.className} min-h-screen`}>
      <div className="hero-section relative">
        <div className="max-h-32 absolute bottom-5 left-5">
          <Image src={Main_Image} alt="Makatotohanan Film Awards" height={100}/>
          <span className={`${montserrate.className} text-center text-white text-italic max-w-fit`}>&quot;Celebrating the best of MKT-made Short Film&quot;</span>
        </div>
      </div>
      <h1 className='w-full text-center font-bold text-2xl mt-4'>Thank you all for participating, to see the winners of the awards, click <Link href="/awards/winners" className='text-custom-gold'>here</Link>.</h1>
      <div className="links-grid">
        <Card image="/tw-public/IMG_20230428_160058.jpg" link="/awards/about">
          <h3>About the Awards</h3>
          <hr />
          <p>Learn more about how the ceremony started, the way it works, and others</p>
        </Card>
        <Card image="/tw-public/IMG_20230428_165124.jpg" link="/awards/winners">
          <h3>Nominees and Winners</h3>
          <hr />
          <p>See the nominees and who won the Makatotohanan Film Awards</p>
        </Card>
        <Card image="/tw-public/339780075_771841130930425_2814568229658875102_n.jpg" link="/awards/watch">
          <h3>How to watch</h3>
          <hr />
          <p>How to watch the ceremony wherever you are.</p>
        </Card>
        <Card image="/tw-public/341171597_684541070024335_6356830580635443408_n.jpg" link="/awards/partners">
          <h3>Partners & Sponsors</h3>
          <hr />
          <p>The partners and sponsors associated with this award ceremony.</p>
        </Card>
      </div>
    </main>
  )
}
 