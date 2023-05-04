import { Rubik } from "next/font/google";
import Image from "next/image";
import MKTFilmFest from '../../public/MKT blac.svg'
import Link from "next/link";
const rb = Rubik({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'] });


export default function Home() {
    return (
        <main className={`${rb.className} flex flex-col items-center justify-center min-h-screen`}>
            <Image src={MKTFilmFest} alt="MKT Film Fest" className="logo-holder w-auto h-auto mb-3" width={500} height={200}></Image>
            <p className="text-3xl font-bold text-center">The MKT Film Festival</p>
            <p className="mt-2 text-center max-w-[50vw]">
                A Film Festival created for the 2nd Quarter Performance Task in Arts where three groups were assigned to create a short film on the genres presented, had a 1 month (with extensions) deadline. Must be 30 minutes or shorter.
            </p>
            <div className="mt-5">
                <h3 className="text-2xl font-light text-center">Explore</h3>
                <div className="flex items-center justify-center gap-8 mt-2">
                    <Link href="/films" className="text-white px-5 py-3 text-center min-w-[10em] bg-[#AF1C10] border-2 hover:border-[#F2583E] duration-300">Films</Link>
                    <Link href="/awards" className="text-white px-5 py-3 text-center min-w-[10em] bg-[#AF1C10] border-2 hover:border-[#F2583E] duration-300">Awards</Link>
                </div>
            </div>
        </main>
    )
}