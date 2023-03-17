import { Definition } from '@/types'

type WordMeaningProps = {
  partOfSpeech: string
  definitions: Definition[]
}

const WordMeaning = ({ partOfSpeech, definitions }: WordMeaningProps) => {
  return (
    <article className="py-5">
      <i className="font-semibold block">{partOfSpeech}</i>

      <ul className="py-3 list-disc">
        {definitions.map((d) => (
          <li key={d.definition} className="py-1">
            <p>{d.definition}</p>
            {d.example && <p className="text-gray-400">{`"${d.example}"`}</p>}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default WordMeaning
