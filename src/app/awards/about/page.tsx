import { Montserrat, Cormorant_Garamond } from "next/font/google"
import Link from "next/link";


const mt = Montserrat({ subsets: ["latin"] });
const cg = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500"] })

export default function About(): JSX.Element {
    return (
        <main className={`${mt.className}`}>
            <div className="flex flex-col items-center justify-center bg-hero-winners bg-cover bg-no-repeat bg-bottom md:bg-center h-[45vh]">
                <h1 className="text-white font-light text-3xl">About the Awards</h1>
            </div>
            <div className="px-10 py-7">
                <Link href="/awards/" className={`${mt.className} text-custom-gold hover:underline mb-2 hover:ml-5 duration-200`}>&larr; Go back</Link>
                <p>The Makatotohanan Film Awards was a momentous and singular event that aimed to honor the perseverance and dedication of individuals who embarked on the challenging journey of creating a short film as part of their MAPEH Group Performance Task. This award ceremony recognized the immense effort and hard work put into bringing a story to life on the big screen, from writing the script to shooting the scenes, editing, and adding finishing touches to create a polished final product. Despite facing various hurdles and obstacles along the way, the participants persevered and created outstanding films that truly showcased their creativity and talent. The Makatotohanan Film Awards celebrated their achievements and the impact of their works, leaving a lasting impression on the participants and the audience alike.</p>
            </div>
        </main>
    )
}