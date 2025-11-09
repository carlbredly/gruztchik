import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='relative flex items-center justify-between my-4 bg-white pl-4 pr-2 sm:px-6 md:pl-8 md:pr-4 py-3 sm:py-3.5 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 z-50 border border-gray-100'>
      <div className='flex items-center'>
        <a 
          href="#home" 
          className='text-xl sm:text-2xl md:text-2xl uppercase font-extrabold pl-1 sm:pl-2 text-gray-900 hover:text-amber-500 transition-all duration-300 tracking-tight'
        >
          ГрузЧек
        </a>
      </div>
      
      {/* Menu desktop */}
      <nav className='hidden md:flex items-center gap-6 lg:gap-10 xl:gap-12'>
        <a 
          href="#home" 
          className='text-gray-700 hover:text-amber-500 transition-all duration-300 font-semibold text-sm lg:text-base relative group'
        >
          Главная
          <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full'></span>
        </a>
        <a 
          href="#services" 
          className='text-gray-700 hover:text-amber-500 transition-all duration-300 font-semibold text-sm lg:text-base relative group'
        >
          Услуги
          <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full'></span>
        </a>
        <a 
          href="#about" 
          className='text-gray-700 hover:text-amber-500 transition-all duration-300 font-semibold text-sm lg:text-base relative group'
        >
          О компании
          <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full'></span>
        </a>
      </nav>

      {/* Bouton Contact desktop */}
      <div className='hidden md:flex items-center'>
        <a 
          href="#contact" 
          className='bg-amber-400 hover:bg-amber-500 text-gray-900 pr-2 pl-5 lg:px-7 py-2.5 lg:py-3 rounded-full font-semibold text-sm lg:text-base shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95'
        >
          Контакты



        </a>
      </div>

      {/* Bouton hamburger mobile */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className='md:hidden p-2.5 rounded-lg text-gray-700 hover:text-amber-500 hover:bg-amber-50 transition-all duration-300 active:scale-95'
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X size={26} className='transition-transform duration-300 rotate-0' />
        ) : (
          <Menu size={26} className='transition-transform duration-300' />
        )}
      </button>

      {/* Menu mobile avec animation */}
      {isMenuOpen && (
        <>
          <div 
            className='fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden animate-fadeIn'
            onClick={() => setIsMenuOpen(false)}
          />
          <div 
            className={`absolute top-full left-0 right-0 mt-3 mx-3 sm:mx-4 bg-white rounded-2xl shadow-2xl z-50 md:hidden overflow-hidden animate-slideDown` + (isMenuOpen ? '' : ' pointer-events-none')}
          >
            <nav className='flex flex-col p-5 gap-1'>
              <a 
                href="#home" 
                className='text-gray-700 hover:text-amber-500 hover:bg-amber-50 transition-all duration-200 font-semibold py-3 px-4 rounded-lg text-base active:bg-amber-100'
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </a>
              <a 
                href="#services" 
                className='text-gray-700 hover:text-amber-500 hover:bg-amber-50 transition-all duration-200 font-semibold py-3 px-4 rounded-lg text-base active:bg-amber-100'
                onClick={() => setIsMenuOpen(false)}
              >
                Услуги
              </a>
              <a 
                href="#about" 
                className='text-gray-700 hover:text-amber-500 hover:bg-amber-50 transition-all duration-200 font-semibold py-3 px-4 rounded-lg text-base active:bg-amber-100'
                onClick={() => setIsMenuOpen(false)}
              >
                О компании
              </a>
              <a 
                href="#contact" 
                className='bg-amber-400 hover:bg-amber-500 text-gray-900 px-6 py-3.5 rounded-full font-semibold text-center mt-2 shadow-sm hover:shadow-md transition-all duration-300 transform active:scale-95'
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}

export default Header