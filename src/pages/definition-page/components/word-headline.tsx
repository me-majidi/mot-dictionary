import WordPhoneticAudio from './word-phonetic-audio'

type WordHeadlineProps = {
  word: string
  phonetic: string
  phoneticAudioSrc?: string
}

const WordHeadline = ({
  word,
  phonetic,
  phoneticAudioSrc,
}: WordHeadlineProps) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-5xl font-extrabold">{word}</h1>
        <p className="text-primary-500 mt-2 font-normal">{phonetic}</p>
      </div>

      {phoneticAudioSrc && <WordPhoneticAudio src={phoneticAudioSrc} />}
    </div>
  )
}

export default WordHeadline
