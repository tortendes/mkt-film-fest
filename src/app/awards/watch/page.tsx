import Link from "next/link";


export default function Watch(): JSX.Element {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center gap-5">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/UXo1gb_Zqm4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <Link href="/awards/" className="text-custom-gold hover:underline">&larr; Go back</Link>
        </main>
    )
}