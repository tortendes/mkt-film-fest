import Image from 'next/image'
import { Montserrat, Cormorant_Garamond } from 'next/font/google'

interface VoteCardInt {
    image: string,
    title: string,
    description: string,
    checked: boolean;
}

const mt = Montserrat({ subsets: ["latin"] });
const cg = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

export default function VotingCard({ image, title, description, checked }: VoteCardInt): JSX.Element {
    return (
        <div className="w-[100vw] md:w-[50vw] lg:w-[33vw] px-2 mb-4 h-full">
            <div className="bg-custom-gold rounded-md relative">
                <Image
                    src={image}
                    alt="Malikmata"
                    width={1296}
                    height={1930.5}
                    style={{ width: '100%', height: 'auto' }}
                />
                <div className="px-5 py-3 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-semibold">{title}</h1>
                        <h3 className={`${cg.className}`}>{description}</h3>
                    </div>
                    <div className={`flex items-center justify-center duration-500 ${checked ? "opacity-100" : "opacity-0 appearance-none"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}