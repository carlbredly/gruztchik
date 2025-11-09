import { Quote } from 'lucide-react'
type ReviewCardProps = { nom: string; texte: string }


const ReviewCard = ({ nom, texte }: ReviewCardProps) => {
  return (
    <div className='relative w-[280px] sm:w-[300px] md:w-80 h-auto min-h-[200px] sm:h-52 bg-amber-400 rounded-3xl px-4 py-3 sm:py-4 overflow-hidden shadow-sm hover:shadow-lg transition-transform duration-300 ease-out hover:-translate-y-0.5'>
        <div className='relative z-10 mb-2 sm:mb-3'>
            <h2 className='font-bold text-base sm:text-lg'>{nom}</h2>
            <p className='text-sm sm:text-base text-gray-700'>Клиент</p>
        </div>
        <p className='relative z-10 italic text-justify text-sm sm:text-base break-words break-all leading-relaxed w-full'>
          {texte}
        </p>
        <div className='absolute bottom-2 right-3 sm:bottom-3 sm:right-4 z-0 opacity-30'>
          <Quote size={70} className='text-white' strokeWidth={2} />
        </div>
    </div>
  )
}

export default ReviewCard