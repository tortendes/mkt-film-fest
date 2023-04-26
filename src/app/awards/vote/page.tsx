/* eslint-disable @next/next/no-img-element */
"use client";

import  './style.scss'
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import { initFirebase } from '../../../../utils/firebase'
import { getAuth, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import Image from 'next/image'
import { Controller, useForm } from 'react-hook-form';
import { RadioGroup } from '@headlessui/react';
import nominees from '../../../../utils/nominees.json';
import VotingCard from '../../../../components/OptionsGroup';

const mt = Montserrat({ subsets: ["latin"] });
const cg = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

initFirebase()
const provider = new GoogleAuthProvider();
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
    const { control, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => console.log(data);

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
                <p className="mt-5">To continue, please sign in using Google.</p>
                <button className="bg-[#EAAC52] border-4 border-[#DE9936] hover:border-[#EAAC52] hover:bg-[#BA863B] text-white px-8 py-3" onClick={signIn}>Sign In with Google</button>
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
                    <Controller
                        control={control}
                        name="best-poster"
                        defaultValue="Malikmata"
                        render={({ field }) => (
                            <RadioGroup { ...field } className="flex justify-stretch overflow-x-scroll">
                                {nominees.best_poster.map(data => (
                                    <RadioGroup.Option value={data.title} key={data.title}>
                                        {({ checked }) => (
                                            <VotingCard 
                                                title={data.title}
                                                description={data.description}
                                                image={data.image} checked={checked}
                                            />
                                        )}
                                    </RadioGroup.Option>
                                ))}
                            </RadioGroup>
                        )}
                    />
                </div>
                <div className="film-category">
                    <h1 className="cat-title">
                        Besst Background Music
                    </h1>
                    <h3 className="cat-desc">
                        The Best Background Music award acknowledges the important role of music in setting the mood and tone of a short film. This award honors the seamless integration of background music into the storytelling, enhancing the narrative and immersing viewers in the film&#39;s world.
                    </h3>
                    <Controller
                        control={control}
                        name="best-bgm"
                        defaultValue="Malikmata"
                        render={({ field }) => (
                            <RadioGroup { ...field } className="flex justify-stretch overflow-x-scroll mt-3">
                                {nominees.best_bgm.map(data => (
                                    <RadioGroup.Option value={data.title} key={data.title}>
                                        {({ checked }) => (
                                            <VotingCard 
                                                title={data.title}
                                                description={data.description}
                                                image={data.image} checked={checked}
                                            />
                                        )}
                                    </RadioGroup.Option>
                                ))}
                            </RadioGroup>
                        )}
                    />
                </div>
                <div className="film-category">
                    <h1 className="cat-title">
                        Best Editing
                    </h1>
                    <h3 className="cat-desc">
                        The Best Editing award recognizes the outstanding technical and creative skill in crafting a cohesive and engaging story through the use of editing techniques. This award celebrates the critical role of editing in shaping a film&#39;s pacing, structure, and emotional impact. The winning edit will demonstrate exceptional proficiency in visual storytelling, seamlessly weaving together shots and scenes to create a compelling narrative that captivates and resonates with viewers.
                    </h3>
                    <Controller
                        control={control}
                        name="best-edit"
                        defaultValue="Malikmata"
                        render={({ field }) => (
                            <RadioGroup { ...field } className="flex justify-stretch overflow-x-scroll mt-3">
                                {nominees.best_editing.map(data => (
                                    <RadioGroup.Option value={data.title} key={data.title}>
                                        {({ checked }) => (
                                            <VotingCard 
                                                title={data.title}
                                                description={data.description}
                                                image={data.image} checked={checked}
                                            />
                                        )}
                                    </RadioGroup.Option>
                                ))}
                            </RadioGroup>
                        )}
                    />
                </div>
                <div className="film-category">
                    <h1 className="cat-title">
                        Best Cinematography
                    </h1>
                    <h3 className="cat-desc">
                        The Best Cinematography award acknowledges the exceptional visual storytelling achieved through the skillful use of camera work, lighting, and composition. This award celebrates the power of cinematography to transport viewers into the world of the film and convey emotion and meaning through visual language. The winning cinematography will demonstrate exceptional artistry, technical proficiency, and creativity in capturing the film&#39;s themes and tone, bringing them to life on screen in a way that captivates and inspires audiences.
                    </h3>
                    <span className={`${cg.className} text-lg font-bold`}>Select one option</span>
                    <Controller
                        control={control}
                        name="best-cinematography"
                        defaultValue="Malikmata"
                        render={({ field }) => (
                            <RadioGroup { ...field } className="flex justify-stretch overflow-x-scroll mt-2">
                                {nominees.best_editing.map(data => (
                                    <RadioGroup.Option value={data.title} key={data.title}>
                                        {({ checked }) => (
                                            <VotingCard 
                                                title={data.title}
                                                description={data.description}
                                                image={data.image} checked={checked}
                                            />
                                        )}
                                    </RadioGroup.Option>
                                ))}
                            </RadioGroup>
                        )}
                    />
                </div>
                <div className="film-category">
                    <h1 className="cat-title">
                        Best Director/s
                    </h1>
                    <h3 className="cat-desc">
                        The Best Director award recognizes the exceptional leadership and creative vision demonstrated by a director in bringing a film to life. This award celebrates the critical role of the director in shaping a film&#39;artistic and technical elements, from casting to cinematography, sound design to editing. The winning director demonstrates exceptional proficiency in storytelling, bringing together all elements of the film to create a cohesive and impactful work that resonates with audiences.
                    </h3>
                    <span className={`${cg.className} text-lg font-bold`}>Select one option</span>
                    <Controller
                        control={control}
                        name="best-director"
                        defaultValue="Malikmata"
                        render={({ field }) => (
                            <RadioGroup { ...field } className="flex justify-stretch overflow-x-scroll mt-2">
                                {nominees.best_director.map(data => (
                                    <RadioGroup.Option value={data.title} key={data.title}>
                                        {({ checked }) => (
                                            <VotingCard 
                                                title={data.title}
                                                description={data.description}
                                                image={data.image} checked={checked}
                                            />
                                        )}
                                    </RadioGroup.Option>
                                ))}
                            </RadioGroup>
                        )}
                    />
                </div>
                <button type='submit' className='bg-[#222] border-2 border-custom-gold text-white px-5 py-2 w-48'>Submit</button>
                </form>
            </div>
        </main>
    )
}

