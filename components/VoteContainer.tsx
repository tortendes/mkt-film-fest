import './VoteContainerStyle.scss'

interface VoteCardInterface {
    type: 'portrait' | 'landscape',
    title: string,
    image: string,
    description?: string
    formWatch: any
    metadata: object[]
}

export default function VoteCard({ type, title, image, description, formWatch, metadata }: VoteCardInterface): JSX.Element {
    if (type == 'portrait') {
        return (
            <label>
                <input type="radio" name="selection" className='peer hidden' />
                
            </label>
        )
    }
}