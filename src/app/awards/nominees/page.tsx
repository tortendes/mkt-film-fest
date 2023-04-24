import { Montserrat, Cormorant_Garamond } from "next/font/google"

const mt = Montserrat({ subsets: ["latin"] })
const cg = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] })

export default function Nominees(): JSX.Element {
    const nominees = {
        "Film": [
            "Somnium",
            "Malikmata"
        ]
    }

    return (
        <main className={`${mt.className} px-5 py-2`}>
            <h1 className="text-5xl font-light">Makatotohanan Film Festival: Nominees</h1>
            <p>
                Here are the nominees for the Makatotohanan Film Awards, celebrating the best of MKT-made short film during the MKT Film Festival.
            </p>

            <div className="mt-4 md:px-5 flex flex-col gap-5">
                <div>
                    <h1 className="text-4xl text-[#BA863B] uppercase">Best Film</h1>
                    <div className="flex flex-col gap-3 mt-3">
                        <div>
                            <p className={`uppercase font-light text-lg`}>Malikmata</p>
                            <span className={`${cg.className} font-bold text-md`}>Dan Gabriel Galicia, Jayson Martinez, Producers</span>
                        </div>
                        <div>
                            <p className={`uppercase font-light text-lg`}>Lila</p>
                            <span className={`${cg.className} font-bold text-md`}>Juno Isaac Jagape, Producers</span>
                        </div>
                        <div>
                            <p className={`uppercase font-light text-lg`}>Somnium</p>
                            <span className={`${cg.className} font-bold text-md`}>Sharmaine Claire Tomas, Producers</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl text-[#BA863B] uppercase">Best Actor/Actress</h1>
                    <div className="flex flex-col gap-3 mt-3">
                        <div>
                            <p className={`uppercase font-light text-lg`}>Jeddediah Merald De Roxas</p>
                            <span className={`${cg.className} font-bold text-md`}>Malikmata</span>
                        </div>
                        <div>
                            <p className={`uppercase font-light text-lg`}>Bianca Manimtim</p>
                            <span className={`${cg.className} font-bold text-md`}>Lila</span>
                        </div>
                        <div>
                            <p className={`uppercase font-light text-lg`}>Celine Amber Anacay</p>
                            <span className={`${cg.className} font-bold text-md`}>Somnium</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl text-[#BA863B] uppercase">Best Supporting Actor/Actress</h1>
                    <div className="flex flex-col gap-3 mt-3">
                        <div>
                            <p className={`uppercase font-light text-lg`}>Janine Marasigan</p>
                            <span className={`${cg.className} font-bold text-md`}>Malikmata</span>
                        </div>
                        <div>
                            <p className={`uppercase font-light text-lg`}>Heart Vhalen Saviñano</p>
                            <span className={`${cg.className} font-bold text-md`}>Malikmata</span>
                        </div>
                        <div>
                            <p className={`uppercase font-light text-lg`}>Christian Mike Laurel</p>
                            <span className={`${cg.className} font-bold text-md`}>Malikmata</span>
                        </div>
                        <div>
                            <p className={`uppercase font-light text-lg`}>Althea Paglinawan</p>
                            <span className={`${cg.className} font-bold text-md`}>Lila</span>
                        </div>
                        <div>
                            <p className={`uppercase font-light text-lg`}>Lord Jay Doroño</p>
                            <span className={`${cg.className} font-bold text-md`}>Lila</span>
                        </div>
                        <div>
                            <p className={`uppercase font-light text-lg`}>Juno Isaac Jagape</p>
                            <span className={`${cg.className} font-bold text-md`}>Lila</span>
                        </div>
                        <div>
                            <p className={`uppercase font-light text-lg`}>Jolland Agripa</p>
                            <span className={`${cg.className} font-bold text-md`}>Somnium</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl text-[#BA863B] uppercase">Best Director/s</h1>
                    <div className="flex flex-col gap-3 mt-3">
                        <div>
                            <p className={`uppercase font-light text-lg`}>Dan Gabriel Galicia, Jayson Martinez</p>
                            <span className={`${cg.className} font-bold text-md`}>Malikmata</span>
                        </div>
                        <div>
                            <p className={`uppercase font-light text-lg`}>Juno Isaac Jagape</p>
                            <span className={`${cg.className} font-bold text-md`}>Somnium</span>
                        </div>
                        <div>
                            <p className={`uppercase font-light text-lg`}>Sharmaine Claire Tomas</p>
                            <span className={`${cg.className} font-bold text-md`}>Somnium</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl text-[#BA863B] uppercase">Best Cinematography</h1>
                    <div className="flex flex-col gap-3 mt-3">
                        <div>
                            <p className={`uppercase font-light text-lg`}>Malikmata</p>
                            <span className={`${cg.className} font-bold text-md`}>Dan Gabriel Galicia, Jayson Martinez, Producers</span>
                        </div>
                        <div>
                            <p className={`uppercase font-light text-lg`}>Lila</p>
                            <span className={`${cg.className} font-bold text-md`}>Juno Isaac Jagape, Producers</span>
                        </div>
                        <div>
                            <p className={`uppercase font-light text-lg`}>Somnium</p>
                            <span className={`${cg.className} font-bold text-md`}>Sharmaine Claire Tomas, Producers</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl text-[#BA863B] uppercase">Best Editing</h1>
                    <div className="flex flex-col gap-3 mt-3">
                        <div>
                            <p className={`uppercase font-light text-lg`}>Malikmata</p>
                            <span className={`${cg.className} font-bold text-md`}>Dan Gabriel Galicia, Jarelle Emmanuel Andulan</span>
                        </div>
                        <div>
                            <p className={`uppercase font-light text-lg`}>Lila</p>
                            <span className={`${cg.className} font-bold text-md`}>Juno Isaac Jagape</span>
                        </div>
                        <div>
                            <p className={`uppercase font-light text-lg`}>Somnium</p>
                            <span className={`${cg.className} font-bold text-md`}>Sharmaine Claire Tomas</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl text-[#BA863B] uppercase">Best Picture (Poster)</h1>
                    <div className="flex flex-col gap-3 mt-3">
                        <div>
                            <p className={`uppercase font-light text-lg`}>Malikmata</p>
                            <span className={`${cg.className} font-bold text-md`}>Jarelle Emmanuel Andulan</span>
                        </div>
                        <div>
                            <p className={`uppercase font-light text-lg`}>Lila</p>
                            <span className={`${cg.className} font-bold text-md`}>Juno Isaac Jagape</span>
                        </div>
                        <div>
                            <p className={`uppercase font-light text-lg`}>Somnium</p>
                            <span className={`${cg.className} font-bold text-md`}>Sharmaine Claire Tomas</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <p>For any disputes or issue, please reach out to <a href="mailto:me@torten.xyz" className="text-[#BA863B]">me@torten.xyz</a> or through Messenger</p>
            </div>
        </main>
    )
}