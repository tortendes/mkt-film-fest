/* eslint-disable @next/next/no-img-element */
"use client";

import  './style.scss'
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import Link from 'next/link';

const mt = Montserrat({ subsets: ["latin"] });
const cg = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

export default function Voting(): JSX.Element {
    return (
        <main className={`${mt.className}`}>
            <div className="hero-section">
                <h1 className="hero-title">Voting</h1>
            </div>
            <div className="flex px-5 items-center justify-center text-center">
                <p>Voting has been cancelled, winners have already been chosen click <Link href="/awards/winners">here</Link></p>
            </div>
        </main>
    )
}

