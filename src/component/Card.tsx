interface CardProps {
  foto: string;
  texte: string;
}

const Card = ({foto, texte}: CardProps) => {
  return (
    <div className='relative h-64 sm:h-72 md:h-80 w-full sm:w-52 overflow-hidden bg-amber-400 rounded-2xl mx-auto'>
        <img src={foto} alt={texte} className='w-full h-full object-cover'/>
        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-3 sm:px-4 py-4 sm:py-6'>
        <p className="text-yellow-400 font-semibold text-base sm:text-lg md:text-xl leading-tight">
          {texte}
        </p>
        </div>
    </div>
  )
}

export default Card