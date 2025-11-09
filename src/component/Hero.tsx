import { Truck } from 'lucide-react';
import heroImage from '../assets/hero.jpg';

// Logo Telegram SVG
const TelegramLogo = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

// Logo WhatsApp SVG
const WhatsAppLogo = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const Hero = () => {
  return (
    <div 
      className='w-full rounded-3xl mt-6 p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: `url(${heroImage})`
      }}
    >
      {/* Overlay sombre pour mobile - gradient pour meilleure lisibilité */}
      <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-black/70 via-black/60 to-black/50 sm:from-black/50 sm:via-black/40 sm:to-black/30 md:from-black/30 md:via-black/20 md:to-transparent'></div>
      
      {/* Contenu */}
      <div className='relative z-10 max-w-4xl'>
        <h1 className='uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-[550px] mb-4 sm:mb-6 text-white drop-shadow-lg sm:text-gray-950 sm:drop-shadow-none'>
          Переезды и профессиональная помощь 
          <span className='text-amber-400 sm:text-white'> в Москве</span>
        </h1>
        <p className='max-w-[550px] text-sm sm:text-base leading-relaxed text-white/95 mb-3 sm:mb-4 drop-shadow-md sm:text-gray-950 sm:drop-shadow-none'>
          Все наши специалисты прошли проверку и обладают большим опытом работы. Мы гарантируем пунктуальность, аккуратность и бережное отношение к Вашему имуществу.
        </p>
        <p className='mb-4 sm:mb-6 text-sm sm:text-base text-white/90 drop-shadow-md sm:text-gray-950 sm:drop-shadow-none'>
          Минимум <span className='font-bold text-amber-400 sm:text-gray-950'>4 часа</span> от <span className='font-bold text-amber-400 sm:text-gray-950'>1000 ₽/час.</span>
        </p>
        <div className='flex flex-row sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-4 sm:mb-8'>
          <Truck size={24} className='text-white sm:text-gray-950 shrink-0 sm:w-[30px] sm:h-[30px] drop-shadow-lg sm:drop-shadow-none' />
          <p className='text-sm sm:text-base text-white/90 sm:text-gray-950 drop-shadow-md sm:drop-shadow-none'>Выезд на объект в течение 1 часа после звонка.</p>
        </div>
        <div className='flex flex-row sm:flex-row gap-2 sm:gap-4'>
          <a 
            href="#" 
            className='flex items-center justify-center sm:justify-start gap-2 text-white bg-[#0088cc] sm:flex-none sm:w-auto py-2.5 sm:py-3 px-3 sm:pl-2 sm:pr-2 rounded-full hover:bg-[#0077b5] transition-all duration-200 text-xs sm:text-base font-medium shadow-lg hover:shadow-xl active:scale-95'
          >
            <div className='p-1.5 sm:p-2 bg-white/20 rounded-full shrink-0 flex items-center justify-start border-4 border-white'>
              <TelegramLogo className='w-4 h-4 sm:w-5 sm:h-5 text-white' />
            </div>
            <span className='font-medium whitespace-nowrap pr-4 '>Telegram</span>
          </a>
          
          <a 
            href="https://wa.me/79776166933" 
            className='flex items-center justify-center sm:justify-between gap-3 text-white bg-[#25D366]  sm:flex-row sm:w-auto py-2.5 sm:py-3 px-2 sm:pl-2 sm:pr-2 rounded-full hover:bg-[#20BD5A] transition-all duration-200 text-xs sm:text-base font-medium shadow-lg hover:shadow-xl active:scale-95'
          >
            <div className='p-1.5 sm:p-2 bg-white/20 rounded-full shrink-0 flex items-center justify-center border-4 border-white'>
              <WhatsAppLogo className='w-4 h-4 sm:w-5 sm:h-5 text-white' />
            </div>
            <span className='font-medium whitespace-nowrap pr-4 '>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
