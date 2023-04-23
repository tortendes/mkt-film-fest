import { Rubik } from "next/font/google";
const rb = Rubik({ subsets: ['latin'] });


export default function Home() {
    return (
        <main className={`${rb.className} flex flex-col items-center justify-center`}>
            <p className="text-3xl font-bold text-center">The MKT Film Festival</p>
        </main>
    )
}