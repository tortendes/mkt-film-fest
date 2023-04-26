/* eslint-disable @next/next/no-img-element */
"use client";

import  './style.scss'
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import { initFirebase } from '../../../../utils/firebase'
import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import Image from 'next/image'
import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';
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
    const [user, loading, error] = useAuthState(auth)
    const { control, handleSubmit, watch, formState: { errors } } = useForm();
    const done = (data: any) => console.log(data);

    const [bp, setbp] = useState('')
    const [bbg, setbbg] = useState('')

    if (loading) {
        return (
            <main className={`${mt.className} h-screen bg-hero-voting bg-cover bg-no-repeat text-white flex flex-col items-center justify-center`}>
                <h1 className="text-3xl font-bold tracking-widest">LOADING</h1>
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
                <form onSubmit={handleSubmit(done)}>
                    <div className="film-category">
                        <h1 className="cat-title">
                            Best Picture (Poster)
                        </h1>
                        <h3 className="cat-desc">
                            The Best Poster award celebrates the artistry and creativity that goes into crafting an unforgettable movie poster. The winning poster captures the essence of the movie with striking visuals, bold typography, and innovative design. It entices audiences with a tantalizing glimpse of the film&#39;s world and promises an unforgettable cinematic experience. Whether it&#39;s a minimalist masterpiece, a breathtaking collage, or a bold and daring design, the Best Poster award showcases the very best of movie marketing and design.
                        </h3>
                    </div>
                        <RadioGroup value={bp} onChange={setbp} className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 gap-3 mt-3">
                            <RadioGroup.Option value="Malikmata">
                                {({ checked }) => (
                                    <div className='bg-custom-gold flex items-center justify-evenly gap-3 w-full h-[10em]'>
                                        <img src="/tw-public/posters/malikmata.png" alt="Hello po!" height="" className='h-full w-auto'  />
                                        <div className="px-3 py-2 text-white grow">
                                            <h1 className='uppercase text-center text-2xl'>Malikmata</h1>
                                            <hr className="bg-gray-200 border-0 text-lg" />
                                            <h3 className={`${cg.className} text-black text-center`}>Jarelle Emmanuel Payad Andulan</h3>
                                        </div>
                                        { checked &&
                                            <div className="px-8">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                            </div>
                                        }
                                    </div>
                                )}
                            </RadioGroup.Option>
                            <RadioGroup.Option value="Lila">
                                {({ checked }) => (
                                    <div className='bg-custom-gold flex items-center justify-evenly gap-3 w-full h-[10em]'>
                                        <img src="/tw-public/posters/lila.jpg" alt="Hello po!" className='h-full w-auto'  />
                                        <div className="px-3 py-2 text-white grow">
                                            <h1 className='uppercase text-center text-2xl'>Lila</h1>
                                            <hr className="bg-gray-200 border-0 text-lg" />
                                            <h3 className={`${cg.className} text-black text-center`}>Juno Isaac Jagape, Althea Paglinawan</h3>
                                        </div>
                                        { checked &&
                                            <div className="px-8">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                            </div>
                                        }
                                    </div>
                                )}
                            </RadioGroup.Option>
                            <RadioGroup.Option value="Somnium">
                                {({ checked }) => (
                                    <div className='bg-custom-gold flex items-center justify-evenly gap-3 w-full h-[10em]'>
                                        <img src="/tw-public/posters/somnium.jpg" alt="Hello po!" className='h-full w-auto'  />
                                        <div className="px-3 py-2 text-white grow">
                                            <h1 className='uppercase text-center text-2xl'>Somnium</h1>
                                            <hr className="bg-gray-200 border-0 text-lg" />
                                            <h3 className={`${cg.className} text-black text-center`}>Juno Isaac Jagape, Althea Paglinawan</h3>
                                        </div>
                                        { checked &&
                                            <div className="px-8">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                            </div>
                                        }
                                    </div>
                                )}
                            </RadioGroup.Option>
                        </RadioGroup>


                        <div className="film-category">
                            <h1 className="cat-title">
                                Best Background Music
                            </h1>
                            <h3 className="cat-desc">
                                The Best Background Music award acknowledges the important role of music in setting the mood and tone of a short film. This award honors the seamless integration of background music into the storytelling, enhancing the narrative and immersing viewers in the film&quot;s world.
                            </h3>
                        </div>
                            <RadioGroup value={bbg} onChange={setbbg} className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 gap-3 mt-3">
                                <RadioGroup.Option value="Malikmata">
                                    {({ checked }) => (
                                        <div className='bg-custom-gold flex items-center justify-evenly gap-3 w-full h-[10em]'>
                                            <img src="/tw-public/posters/malikmata.png" alt="Hello po!" height="" className='h-full w-auto'  />
                                            <div className="px-3 py-2 text-white grow">
                                                <h1 className='uppercase text-center text-2xl'>Malikmata</h1>
                                                <hr className="bg-gray-200 border-0 text-lg" />
                                                <h3 className={`${cg.className} text-black text-center`}>Jarelle Emmanuel Payad Andulan</h3>
                                            </div>
                                            { checked &&
                                                <div className="px-8">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                                </div>
                                            }
                                        </div>
                                    )}
                                </RadioGroup.Option>
                                <RadioGroup.Option value="Lila">
                                    {({ checked }) => (
                                        <div className='bg-custom-gold flex items-center justify-evenly gap-3 w-full h-[10em]'>
                                            <img src="/tw-public/posters/lila.jpg" alt="Hello po!" className='h-full w-auto'  />
                                            <div className="px-3 py-2 text-white grow">
                                                <h1 className='uppercase text-center text-2xl'>Lila</h1>
                                                <hr className="bg-gray-200 border-0 text-lg" />
                                                <h3 className={`${cg.className} text-black text-center`}>Juno Isaac Jagape, Althea Paglinawan</h3>
                                            </div>
                                            { checked &&
                                                <div className="px-8">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                                </div>
                                            }
                                        </div>
                                    )}
                                </RadioGroup.Option>
                            </RadioGroup>

                        <button type='submit' className='fixed bottom-4 left-4 bg-[#222] border-2 border-custom-gold text-white px-5 py-2 w-48'>Submit</button>
                </form>
            </div>
        </main>
    )
}

