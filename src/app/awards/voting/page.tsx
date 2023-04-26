/* eslint-disable @next/next/no-img-element */
"use client";

import  './style.scss'
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import { initFirebase } from '../../../../utils/firebase'
import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import Image from 'next/image'
import { useForm } from 'react-hook-form';

const mt = Montserrat({ subsets: ["latin"] });
const cg = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

initFirebase()
const provider = new FacebookAuthProvider();
const auth = getAuth();

const signIn = async () => {
    try { 
        const result = await signInWithPopup(auth, provider);
        console.log(result.user)
    } catch (error) {
        console.error(error)
    }
}

export default function Voting(): JSX.Element {
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => console.log(data);

    const test = watch("bgm-select-1")

    if (loading) {
        return (
            <main className={`${mt.className} h-screen bg-hero-voting bg-cover bg-no-repeat text-white flex flex-col items-center justify-center`}>
                <h1 className="text-3xl font-bold tracking-widest text-black">LOADING</h1>
                <h3 className="text-xl">Please wait...</h3>
            </main>
        )
    }

    if (!user) {
        return (
        <main className={`${mt.className}`}>
            <div className="hero-section">
                <h1 className="hero-title">Voting</h1>
            </div>
            <div className="px-5 min-h-[55vh] flex flex-col items-center justify-center">
                <p className="mt-5">To continue, please sign in using Facebook.</p>
                <button className="bg-[#EAAC52] border-4 border-[#DE9936] hover:border-[#EAAC52] hover:bg-[#BA863B] text-white px-8 py-3" onClick={signIn}>Sign In with Facebook</button>
            </div>
            </main>
        )
    }

    return (
        <main className={`${mt.className}`}>
            <div className="hero-section">
                <h1 className="hero-title">Voting</h1>
                <h2 className='text-white'>Signed in as {user.displayName}</h2>
            </div>
            <div className="px-5 mt-7">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="film-category">
                    <h1 className="cat-title">
                        Best Picture (Poster)
                    </h1>
                    <h3 className="cat-desc">
                        The Best Poster award celebrates the artistry and creativity that goes into crafting an unforgettable movie poster. The winning poster captures the essence of the movie with striking visuals, bold typography, and innovative design. It entices audiences with a tantalizing glimpse of the film&#39;s world and promises an unforgettable cinematic experience. Whether it&#39;s a minimalist masterpiece, a breathtaking collage, or a bold and daring design, the Best Poster award showcases the very best of movie marketing and design.
                    </h3>
                    {/* <CustomRadioGroup
                        value={null}
                        onChange={(val) => console.log(val)}
                        options={[
                            {
                                title: "Malikmata",
                                image: "/tw-public/posters/malikmata.png",
                                description: "Jarelle Emmanuel Payad Andulan",
                                value: "bp-malikmata"
                            }
                        ]}
                    /> */}
                </div>
                <div className="film-category">
                    <h1 className="cat-title">
                        Besst Background Music
                    </h1>
                    <h3 className="cat-desc">
                        The Best Background Music award acknowledges the important role of music in setting the mood and tone of a short film. This award honors the seamless integration of background music into the storytelling, enhancing the narrative and immersing viewers in the film&quot;s world.
                    </h3>
                    <fieldset className="flex flex-wrap">
                        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                            <div className="bg-custom-gold rounded-sm p-3 shadow-md relative">
                                <input type="radio" id="bgm-select-1" className="absolute h-0 w-0 appearance-none" checked value="Malikmata" { ...register("bgm-select-1") }/>
                                <label htmlFor="bgm-select-1" className='hover:cursor-pointer flex flex-col items-center justify-center'>
                                    <Image src="/tw-public/posters/malikmata.png" alt="Malikmata" className='w-full h-auto object-cover' width={2592} height={3861} />
                                    <h1 className="text-3xl font-semibold text-white">Malikmata</h1>
                                </label>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                            <div className="bg-custom-gold rounded-sm p-3 shadow-md relative">
                                <input type="radio" id="bgm-select-1" className="absolute h-0 w-0 appearance-none" { ...register("bgm-select-1") } value="Lila"/>
                                <label htmlFor="bgm-select-1" className='hover:cursor-pointer flex flex-col items-center justify-center'>
                                    <Image src="/tw-public/posters/lila.jpg" alt="Lila" className='w-full h-auto object-cover' width={2592} height={3861} />
                                    <h1 className="text-3xl font-semibold text-white">Lila</h1>
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    {test}
                </div>
                    <button type='submit' className='fixed bottom-4 left-4 bg-[#222] border-2 border-custom-gold text-white px-5 py-2 w-48'>Submit</button>
                </form>
            </div>
        </main>
    )
}

