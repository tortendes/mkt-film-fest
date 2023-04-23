/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import './CardStyle.scss'

export default function Card({ image, children, link }: { image: string, link: string, children: React.ReactNode }) {
    return (
        <Link href={link} passHref className='flex items-center justify-center'>
            <div className="card">
                <div className="image">
                    <Image src={image} alt="Image Card" width={1920} height={1080} />
                </div>
                <div className="text-group">
                    {children}
                </div>
            </div>
        </Link>
    )
}