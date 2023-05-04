import { Bubblegum_Sans } from "next/font/google"
const bs = Bubblegum_Sans({ subsets: ["latin"], weight: ["400"] })

import OtherCard from '../../../components/OtherCard'

export default function Films() {
    return (
        <main className="mx-5 flex flex-col items-center gap-5">
            <h1 className={`${bs.className} text-4xl font-bold uppercase mt-5`}>Films</h1>
            <div className="flex items-center justify-center gap-5 overflow-x-scroll md:overflow-auto">
                <OtherCard
                    title="Malikmata"
                    description={
                        <>
                            <p>Written by Heart Saviñano</p>
                            <p>Directed by Dan Gabriel Galicia, Jayson Martinez</p>
                            <br />
                            <a href="https://www.facebook.com/100072344034201/videos/pcb.245196897901776/559092642979859" target="_blank" className="hover:underline text-lg">&#9654; Watch</a>
                        </>
                    }
                    image="/tw-public/posters/malikmata.png" />
                <OtherCard
                    title="Lila"
                    description={
                        <>
                            <p>Writte and Directed by Juno Isaac Jagape</p>
                            <br />
                            <a href="https://www.facebook.com/100072344034201/videos/pcb.248275947593871/1865188417171695" target="_blank" className="hover:underline text-lg">&#9654; Watch</a>
                        </>
                    }
                    image="/tw-public/posters/lila.png" />
                <OtherCard
                    title="Somnium"
                    description={
                        <>
                            <p>Writte and Directed by Sharmaine Claire Tomas</p>
                            <br />
                            <span className="text-gray-600">Video Unavailable</span>
                        </>
                    }
                    image="/tw-public/posters/somnium.png" />
            </div>
        </main>
    )
}