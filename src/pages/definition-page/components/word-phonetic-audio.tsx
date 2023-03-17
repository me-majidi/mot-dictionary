import { ReactComponent as IconPlay } from '@/assets/icons/play.svg'
import { useRef } from 'react'

type WordPhoneticAudioProps = {
  src: string
}

const WordPhoneticAudio = ({ src }: WordPhoneticAudioProps) => {
  const buttonRef = useRef<HTMLAudioElement>(null)

  const handleClick = () => {
    buttonRef.current?.play()
  }

  return (
    <>
      <audio src={src} ref={buttonRef} />
      <button
        type="button"
        className="bg-primary-300 rounded-full w-[80px] h-[80px] flex items-center justify-center"
        onClick={handleClick}
        aria-label="play"
      >
        <IconPlay className="fill-primary-500" />
      </button>
    </>
  )
}

export default WordPhoneticAudio
