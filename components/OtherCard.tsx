
import Image from 'next/image'
import { Montserrat, Cormorant_Garamond } from 'next/font/google'

interface VoteCardInt {
    image: string,
    title: string,
    description: string | JSX.Element,
}

const mt = Montserrat({ subsets: ["latin"] });
const cg = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

export default function OtherCard({ image, title, description }: VoteCardInt): JSX.Element {
    return (
        <div className="w-[100vw] md:w-[30vw] lg:w-[25vw] px-2 mb-4 h-full">
            <div className="bg-custom-gold rounded-md relative">
                <Image
                    src={image}
                    alt="Option"
                    width={1296}
                    height={1930.5}
                    style={{ width: '100%', height: 'auto' }}
                />
                <div className="px-5 py-3">
                    <h1 className="text-3xl font-semibold">{title}</h1>
                    <div className={`${cg.className} mt-2`}>{description}</div>
                </div>
            </div>
        </div>
    )
}