import { Montserrat, Cormorant_Garamond } from "next/font/google"
import winners from '../../../../utils/nominees.json'
import './style.scss'
import Link from "next/link";

const mt = Montserrat({ subsets: ["latin"] });
const cg = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500"] })

export default function Winners(): JSX.Element {
    function ordinal_suffix_of(i: number): string {
        var j = i % 10,
            k = i % 100;
        if (j == 1 && k != 11) {
            return i + "st";
        }
        if (j == 2 && k != 12) {
            return i + "nd";
        }
        if (j == 3 && k != 13) {
            return i + "rd";
        }
        return i + "th";
    }

    return (
        <main>
            <div className="hero-section">
                <p className={`${cg.className} hero-title`}>Winners</p>
            </div>
            <div className="body">
                <Link href="/awards/" className={`${mt.className} text-custom-gold hover:underline mb-2 ml-3 hover:ml-5 duration-200`}>&larr; Go back</Link>
                <div className="category">
                    <h1 className={`${mt.className} title`}>Best Picture (Poster)</h1>
                    <p className={`${mt.className} description`}>The Best Poster award celebrates the artistry and creativity that goes into crafting an unforgettable movie poster. The winning poster captures the essence of the movie with striking visuals, bold typography, and innovative design. It entices audiences with a tantalizing glimpse of the film&#38;s world and promises an unforgettable cinematic experience. Whether it&#38;s a minimalist masterpiece, a breathtaking collage, or a bold and daring design, the Best Poster award showcases the very best of movie marketing and design.</p>
                    <div className="selection">
                        {winners.best_poster.map(item => {
                            if (item.winner) {
                                return (
                                    <div key={item.title} className="mb-3">
                                        <span className="text-custom-gold uppercase text-sm">Winner</span>
                                        <p className={`${mt.className} sl-title`}>{item.title}</p>
                                        <p className={`${cg.className} sl-description`}>{item.description}</p>
                                        <p className={`${cg.className} text-sm font-light`}>{ordinal_suffix_of(item.place)} place</p>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={item.title}>
                                        <p className={`${mt.className} sl-title`}>{item.title}</p>
                                        <p className={`${cg.className} sl-description`}>{item.description}</p>
                                        <p className={`${cg.className} text-sm font-light`}>{ordinal_suffix_of(item.place)} place</p>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>


                <div className="category">
                    <h1 className={`${mt.className} title`}>Best Background Music</h1>
                    <p className={`${mt.className} description`}>The Best Background Music award acknowledges the important role of music in setting the mood and tone of a short film. This award honors the seamless integration of background music into the storytelling, enhancing the narrative and immersing viewers in the film&#38;s world.</p>
                    <div className="selection">
                        {winners.best_bgm.map(item => {
                            if (item.winner) {
                                return (
                                    <div key={item.title} className="mb-3">
                                        <span className="text-custom-gold uppercase text-sm">Winner</span>
                                        <p className={`${mt.className} sl-title`}>{item.title}</p>
                                        <p className={`${cg.className} sl-description`}>{item.description}</p>
                                        <p className={`${cg.className} text-sm font-light`}>{ordinal_suffix_of(item.place)} place</p>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={item.title}>
                                        <p className={`${mt.className} sl-title`}>{item.title}</p>
                                        <p className={`${cg.className} sl-description`}>{item.description}</p>
                                        <p className={`${cg.className} text-sm font-light`}>{ordinal_suffix_of(item.place)} place</p>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>


                <div className="category">
                    <h1 className={`${mt.className} title`}>Best Editing</h1>
                    <p className={`${mt.className} description`}>The Best Editing award recognizes the outstanding technical and creative skill in crafting a cohesive and engaging story through the use of editing techniques. This award celebrates the critical role of editing in shaping a film&#38;s pacing, structure, and emotional impact. The winning edit will demonstrate exceptional proficiency in visual storytelling, seamlessly weaving together shots and scenes to create a compelling narrative that captivates and resonates with viewers.</p>
                    <div className="selection">
                        {winners.best_editing.map(item => {
                            if (item.winner) {
                                return (
                                    <div key={item.title} className="mb-3">
                                        <span className="text-custom-gold uppercase text-sm">Winner</span>
                                        <p className={`${mt.className} sl-title`}>{item.title}</p>
                                        <p className={`${cg.className} sl-description`}>{item.description}</p>
                                        <p className={`${cg.className} text-sm font-light`}>{ordinal_suffix_of(item.place)} place</p>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={item.title}>
                                        <p className={`${mt.className} sl-title`}>{item.title}</p>
                                        <p className={`${cg.className} sl-description`}>{item.description}</p>
                                        <p className={`${cg.className} text-sm font-light`}>{ordinal_suffix_of(item.place)} place</p>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>


                <div className="category">
                    <h1 className={`${mt.className} title`}>Best Cinematography</h1>
                    <p className={`${mt.className} description`}>The Best Editing award recognizes the outstanding technical and creative skill in crafting a cohesive and engaging story through the use of editing techniques. This award celebrates the critical role of editing in shaping a film&#38;s pacing, structure, and emotional impact. The winning edit will demonstrate exceptional proficiency in visual storytelling, seamlessly weaving together shots and scenes to create a compelling narrative that captivates and resonates with viewers.</p>
                    <div className="selection">
                        {winners.best_cinematography.map(item => {
                            if (item.winner) {
                                return (
                                    <div key={item.title} className="mb-3">
                                        <span className="text-custom-gold uppercase text-sm">Winner</span>
                                        <p className={`${mt.className} sl-title`}>{item.title}</p>
                                        <p className={`${cg.className} sl-description`}>{item.description}</p>
                                        <p className={`${cg.className} text-sm font-light`}>{ordinal_suffix_of(item.place)} place</p>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={item.title}>
                                        <p className={`${mt.className} sl-title`}>{item.title}</p>
                                        <p className={`${cg.className} sl-description`}>{item.description}</p>
                                        <p className={`${cg.className} text-sm font-light`}>{ordinal_suffix_of(item.place)} place</p>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>


                <div className="category">
                    <h1 className={`${mt.className} title`}>Best Director</h1>
                    <p className={`${mt.className} description`}>The Best Director award recognizes the exceptional leadership and creative vision demonstrated by a director in bringing a film to life. This award celebrates the critical role of the director in shaping a film&#38;s artistic and technical elements, from casting to cinematography, sound design to editing. The winning director demonstrates exceptional proficiency in storytelling, bringing together all elements of the film to create a cohesive and impactful work that resonates with audiences.</p>
                    <div className="selection">
                        {winners.best_director.map(item => {
                            if (item.winner) {
                                return (
                                    <div key={item.title} className="mb-3">
                                        <span className="text-custom-gold uppercase text-sm">Winner</span>
                                        <p className={`${mt.className} sl-title`}>{item.title}</p>
                                        <p className={`${cg.className} sl-description`}>{item.description}</p>
                                        <p className={`${cg.className} text-sm font-light`}>{ordinal_suffix_of(item.place)} place</p>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={item.title}>
                                        <p className={`${mt.className} sl-title`}>{item.title}</p>
                                        <p className={`${cg.className} sl-description`}>{item.description}</p>
                                        <p className={`${cg.className} text-sm font-light`}>{ordinal_suffix_of(item.place)} place</p>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>


                <div className="category">
                    <h1 className={`${mt.className} title`}>Best Story</h1>
                    <p className={`${mt.className} description`}>
                        The Best Story award recognizes the exceptional skill in crafting a compelling and original narrative that resonates with audiences. This award celebrates the critical role of storytelling in creating a memorable and impactful cinematic experience. The winning story will demonstrate exceptional creativity, originality, and depth, immersing viewers in the film&#38;s world and taking them on a journey that captures their hearts and minds. The characters and their struggles will be fully-realized, the plot will be engaging and thought-provoking, and the themes will resonate long after the film has ended. The winning story will have elevated the film beyond its individual parts, creating a truly memorable and inspiring cinematic experience.
                    </p>
                    <div className="selection">
                        {winners.best_story.map(item => {
                            if (item.winner) {
                                return (
                                    <div key={item.title} className="mb-3">
                                        <span className="text-custom-gold uppercase text-sm">Winner</span>
                                        <p className={`${mt.className} sl-title`}>{item.title}</p>
                                        <p className={`${cg.className} sl-description`}>{item.description}</p>
                                        <p className={`${cg.className} text-sm font-light`}>{ordinal_suffix_of(item.place)} place</p>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={item.title}>
                                        <p className={`${mt.className} sl-title`}>{item.title}</p>
                                        <p className={`${cg.className} sl-description`}>{item.description}</p>
                                        <p className={`${cg.className} text-sm font-light`}>{ordinal_suffix_of(item.place)} place</p>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>


                <div className="category">
                    <h1 className={`${mt.className} title`}>Best Supporting Actor</h1>
                    <p className={`${mt.className} description`}>
                        The Best Supporting Actor award acknowledges the exceptional performance of an actor in a supporting role, adding depth, nuance, and complexity to the film&#38;s narrative. This  award celebrates the critical role of supporting actors in bringing the film&#38;s characters to life, providing a vital and memorable contribution to the overall story. 
                    </p>
                    <div className="selection">
                        {winners.best_supp_actor.map(item => {
                            if (item.winner) {
                                return (
                                    <div key={item.title} className="mb-3">
                                        <span className="text-custom-gold uppercase text-sm">Winner</span>
                                        <p className={`${mt.className} sl-title`}>{item.title}</p>
                                        <p className={`${cg.className} sl-description`}>{item.description}</p>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={item.title}>
                                        <p className={`${mt.className} sl-title`}>{item.title}</p>
                                        <p className={`${cg.className} sl-description`}>{item.description}</p>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
                <div className="category">
                    <h1 className={`${mt.className} title`}>Best Supporting Actress</h1>
                    <p className={`${mt.className} description`}>
                        The Best Supporting Actress award acknowledges the exceptional performance of an actress in a supporting role, adding depth, nuance, and complexity to the film&#38;s narrative. This  award celebrates the critical role of supporting actresses in bringing the film&#38;s characters to life, providing a vital and memorable contribution to the overall story. 
                    </p>
                    <div className="selection">
                        {winners.best_supp_actress.map(item => {
                            if (item.winner) {
                                return (
                                    <div key={item.title} className="mb-3">
                                        <span className="text-custom-gold uppercase text-sm">Winner</span>
                                        <p className={`${mt.className} sl-title`}>{item.title}</p>
                                        <p className={`${cg.className} sl-description`}>{item.description}</p>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={item.title}>
                                        <p className={`${mt.className} sl-title`}>{item.title}</p>
                                        <p className={`${cg.className} sl-description`}>{item.description}</p>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>


                <div className="category">
                    <h1 className={`${mt.className} title`}>Best Actor</h1>
                    <p className={`${mt.className} description`}>
                        The Best Actor award recognizes the exceptional performance of an actor in a leading role, bringing the film&#32;s central character to life with depth, nuance, and authenticity. This award celebrates the critical role of the actor in captivating and engaging viewers, drawing them into the film&#39;s world and carrying them through the story.
                    </p>
                    <div className="selection">
                        {winners.best_actor.map(item => {
                            if (item.winner) {
                                return (
                                    <div key={item.title} className="mb-3">
                                        <span className="text-custom-gold uppercase text-sm">Winner</span>
                                        <p className={`${mt.className} sl-title`}>{item.title}</p>
                                        <p className={`${cg.className} sl-description`}>{item.description}</p>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={item.title}>
                                        <p className={`${mt.className} sl-title`}>{item.title}</p>
                                        <p className={`${cg.className} sl-description`}>{item.description}</p>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
                <div className="category">
                    <h1 className={`${mt.className} title`}>Best Actress</h1>
                    <p className={`${mt.className} description`}>
                        The Best Actress award recognizes the exceptional performance of an actress in a leading role, bringing the film&#32;s central character to life with depth, nuance, and authenticity. This award celebrates the critical role of the actor in captivating and engaging viewers, drawing them into the film&#38;s world and carrying them through the story.
                    </p>
                    <div className="selection">
                        {winners.best_actress.map(item => {
                            if (item.winner) {
                                return (
                                    <div key={item.title} className="mb-3">
                                        <span className="text-custom-gold uppercase text-sm">Winner</span>
                                        <p className={`${mt.className} sl-title`}>{item.title}</p>
                                        <p className={`${cg.className} sl-description`}>{item.description}</p>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={item.title}>
                                        <p className={`${mt.className} sl-title`}>{item.title}</p>
                                        <p className={`${cg.className} sl-description`}>{item.description}</p>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>


                <div className="category">
                    <h1 className={`${mt.className} title`}>Best Film</h1>
                    <p className={`${mt.className} description`}>
                        The Best Film award recognizes the exceptional achievement of a film in bringing together all elements of the cinematic art form to create a truly memorable and impactful work. This award celebrates the critical role of a film in inspiring and engaging audiences, providing a powerful and thought-provoking experience that resonates long after the credits have rolled
                    </p>
                    <div className="selection">
                        {winners.best_film.map(item => {
                            if (item.winner) {
                                return (
                                    <div key={item.title} className="mb-3">
                                        <span className="text-custom-gold uppercase text-sm">Winner</span>
                                        <p className={`${mt.className} sl-title`}>{item.title}</p>
                                        <p className={`${cg.className} sl-description`}>{item.description}</p>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={item.title}>
                                        <p className={`${mt.className} sl-title`}>{item.title}</p>
                                        <p className={`${cg.className} sl-description`}>{item.description}</p>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </main>
    )
}