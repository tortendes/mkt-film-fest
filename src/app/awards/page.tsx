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
      <h1 className='w-full text-center font-bold text-2xl mt-4'>Voting starts on Monday, April 24. To learn more about Voting, click <Link href="/awards/voting" className="text-[#BA863B]">here</Link>.</h1>
      <div className="links-grid">
        <Card image="/tw-public/341270665_748780893505174_5367582560127919609_n.jpg" link="/awards/about">
          <h3>About the Awards</h3>
          <hr />
          <p>Learn more about how the ceremony started, the way it works, and others</p>
        </Card>
        <Card image="/tw-public/341171597_684541070024335_6356830580635443408_n.jpg" link="/awards/nominees">
          <h3>Nominees</h3>
          <hr />
          <p>See the nominees for the Makatotohanan Film Awards</p>
        </Card>
        <Card image="/tw-public/341171597_684541070024335_6356830580635443408_n.jpg" link="/awards/vote">
          <h3>Voting</h3>
          <hr />
          <p>Information on voting on the awards</p>
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
 