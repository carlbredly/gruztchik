import { useState } from 'react'
import { DynamicIcon } from 'lucide-react/dynamic';
import { X } from 'lucide-react';
import Card from './Card';

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const servicesList = [
    {
      id: 1,
      name: 'Демонтаж и разборка',
      nameEn: 'Démontage et démantèlement',
      description: 'Профессиональный демонтаж любых конструкций, квартир, мебели и техники.',
      price: 'от 1500 ₽/час',
      minHours: 4,
      image: './src/assets/services/demont.jpg'
    },
    {
      id: 2,
      name: 'Резка и вывоз металла',
      nameEn: 'Découpe et évacuation de métal',
      description: 'Резка и оперативный вывоз металлолома с объекта, вывезем быстро и аккуратно.',
      price: 'от 2000 ₽/час',
      minHours: 4,
      image: './src/assets/services/decoupe.jpeg'
    },
    {
      id: 3,
      name: 'Установка кондиционеров и холодильников',
      nameEn: 'Installation de climatiseurs et réfrigérateurs',
      description: 'Профессиональный монтаж и подключение кондиционеров, холодильного оборудования.',
      price: 'от 2500 ₽/час',
      minHours: 3,
      image: './src/assets/services/frigo.jpeg'
    },
    {
      id: 4,
      name: 'Услуги разнорабочего и ремонтные услуги',
      nameEn: 'Services de manœuvre et services de réparation',
      description: 'Любые работы: переноска, подсобные, помощь на стройке, мелкий ремонт.',
      price: 'от 1200 ₽/час',
      minHours: 4,
      image: './src/assets/services/rabot.jpg'
    },
    {
      id: 5,
      name: 'Упаковка и погрузка',
      nameEn: 'Services d\'emballage et de chargement',
      description: 'Надёжная упаковка и аккуратная погрузка любых вещей и мебели.',
      price: 'от 1800 ₽/час',
      minHours: 4,
      image: './src/assets/services/camion.jpeg'
    },
    {
      id: 6,
      name: 'Переезд и транспортировка',
      nameEn: 'Déménagement et transport',
      description: 'Комплексные переезды для квартир, офисов и предприятий.',
      price: 'от 2200 ₽/час',
      minHours: 4,
      image: './src/assets/services/camion.jpeg'
    },
    {
      id: 7,
      name: 'Уборка и вывоз мусора',
      nameEn: 'Nettoyage et remise en état',
      description: 'Генеральная уборка после ремонта, вынос и вывоз строительного и бытового мусора.',
      price: 'от 1000 ₽/час',
      minHours: 3,
      image: './src/assets/services/rabot.jpg'
    }
  ];

  return (
    <>
      <div className='w-full h-auto bg-white rounded-3xl px-4 sm:px-6 md:px-8 py-4 sm:py-6'>
          <div className='mb-4 sm:mb-6'>
              <p className='text-sm sm:text-base'>Мы предлагаем следующие услуги</p>
          </div>
          <div className='flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-8 mb-4 sm:mb-6'>
              <h1 className='uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight lg:max-w-[200px] text-gray-950'>Сертифицированное качество</h1>
              <div className='lg:max-w-[380px]'>
                  <p className='leading-relaxed text-justify text-sm sm:text-base text-gray-950 mb-2'>От ремонта и установки до профессионального обслуживания — мы справимся с любой задачей. <br className='hidden sm:block' /> Доверьтесь опыту, выберите ГрузЧек.</p>
                  <div className='flex items-center text-red-600 text-sm sm:text-base cursor-pointer'>
                      <button onClick={() => setIsModalOpen(true)} className='hover:underline flex items-center gap-1'>
                          Все услуги
                      </button>
                      <DynamicIcon name="chevron-right" color="red" size={18} className='ml-1' />
                  </div>
              </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 xl:gap-14 my-4 sm:my-6 overflow-x-auto sm:overflow-x-visible">
              <Card foto="./src/assets/services/demont.jpg" texte="Демонтаж и разборка" />
              <Card foto="./src/assets/services/decoupe.jpeg" texte="Резка и вывоз металла" />
              <Card foto="./src/assets/services/frigo.jpeg" texte="установка кондиционеров и холодильников" />
              <Card foto="./src/assets/services/rabot.jpg" texte="Услуги разнорабочего и ремонтные услуги" />
              <Card foto="./src/assets/services/camion.jpeg" texte="Услуги по упаковке и погрузке" />
          </div>
          <div className='flex justify-center'>
              <div className="relative w-full sm:w-3/4 md:w-1/2 h-[2px] bg-gray-300 my-4">
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1/3 h-[3px] bg-gray-700"></div>
              </div>
          </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4'>
          <div 
            className='absolute inset-0 bg-black/50 backdrop-blur-sm' 
            onClick={() => setIsModalOpen(false)}
          />
          <div className='relative bg-white max-w-4xl w-full rounded-2xl sm:rounded-3xl shadow-2xl max-h-[90vh] overflow-hidden animate-slideDown'>
            {/* Header du modal */}
            <div className='sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between z-10'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 uppercase'>Все услуги</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className='p-2 rounded-full hover:bg-gray-100 transition-colors'
                aria-label='Fermer'
              >
                <X size={24} className='text-gray-600' />
              </button>
            </div>

            {/* Contenu du modal */}
            <div className='overflow-y-auto max-h-[calc(90vh-80px)] px-4 sm:px-6 py-4 sm:py-6'>
              <div className='space-y-4 sm:space-y-6'>
                {servicesList.map((service) => (
                  <div
                    key={service.id}
                    className='border border-gray-200 rounded-xl p-4 sm:p-5 hover:shadow-lg transition-all duration-200 bg-white'
                  >
                    <div className='flex flex-col sm:flex-row sm:items-start gap-4'>
                      <div className='flex-1'>
                        <h3 className='text-lg sm:text-xl font-bold text-gray-900 mb-1'>
                          {service.name}
                        </h3>
                        <p className='text-sm sm:text-base text-gray-600 mb-2 italic'>{service.name}</p>
                        <p className='text-sm sm:text-base text-gray-700 mb-3'>{service.description}</p>
                        <div className='flex flex-wrap items-center gap-3'>
                          <span className='text-base sm:text-lg font-bold text-amber-500'>Цена: {service.price}</span>
                          <span className='text-sm text-gray-500'>Минимум {service.minHours} ч.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Note importante */}
              <div className='mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200'>
                <p className='text-sm sm:text-base text-gray-700'>
                  <strong className='text-amber-600'>Внимание:</strong> Все цены ориентировочные и зависят от сложности, объёма и условий работ. Для персонального расчёта — свяжитесь с нами.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Services