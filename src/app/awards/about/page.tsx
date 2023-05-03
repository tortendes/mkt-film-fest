import { Montserrat, Cormorant_Garamond } from "next/font/google"


const mt = Montserrat({ subsets: ["latin"] });
const cg = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500"] })

export default function About(): JSX.Element {
    return (
        <main className={`${mt.className}`}>
            <h1>About the Awards</h1>
            <p>The Makatotohanan Film Awards was a momentous and singular event that aimed to honor the perseverance and dedication of individuals who embarked on the challenging journey of creating a short film as part of their MAPEH Group Performance Task. This award ceremony recognized the immense effort and hard work put into bringing a story to life on the big screen, from writing the script to shooting the scenes, editing, and adding finishing touches to create a polished final product. Despite facing various hurdles and obstacles along the way, the participants persevered and created outstanding films that truly showcased their creativity and talent. The Makatotohanan Film Awards celebrated their achievements and the impact of their works, leaving a lasting impression on the participants and the audience alike.</p>
        </main>
    )
}