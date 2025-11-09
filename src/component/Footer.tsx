import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, X } from 'lucide-react'
import { useState } from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  const [showTerms, setShowTerms] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)
  return (
    <footer className='bg-black text-white rounded-4xl p-4 sm:p-6 md:p-10 w-full mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
        <div>
          <h3 className='text-xl sm:text-2xl font-extrabold uppercase text-amber-400'>ГрузЧек</h3>
          <p className='mt-2 sm:mt-3 text-sm sm:text-base text-white/80 leading-6 sm:leading-7'>
            Быстрые и профессиональные услуги. Качество, надёжность и забота о клиенте — наш приоритет.
          </p>
          <div className='flex items-center gap-2 sm:gap-3 mt-3 sm:mt-4'>
            <a href='#' aria-label='Facebook' className='p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white'>
              <Facebook size={16} className='sm:w-[18px] sm:h-[18px]' />
            </a>
            <a href='#' aria-label='Instagram' className='p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white'>
              <Instagram size={16} className='sm:w-[18px] sm:h-[18px]' />
            </a>
            <a href='#' aria-label='Twitter' className='p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white'>
              <Twitter size={16} className='sm:w-[18px] sm:h-[18px]' />
            </a>
          </div>
        </div>

        <div>
          <h4 className='font-semibold text-white mb-2 sm:mb-3 text-sm sm:text-base'>Навигация</h4>
          <ul className='space-y-1.5 sm:space-y-2 text-white/80 text-sm sm:text-base'>
            <li><a href='#services' className='hover:text-amber-400 transition-colors'>Услуги</a></li>
            <li><a href='#about' className='hover:text-amber-400 transition-colors'>О компании</a></li>
            <li><a href='#reviews' className='hover:text-amber-400 transition-colors'>Отзывы</a></li>
            <li><a href='#contact' className='hover:text-amber-400 transition-colors'>Контакты</a></li>
          </ul>
        </div>

        <div>
          <h4 className='font-semibold text-white mb-2 sm:mb-3 text-sm sm:text-base'>Наши услуги</h4>
          <ul className='space-y-1.5 sm:space-y-2 text-white/80 text-sm sm:text-base'>
            <li><a href='#' className='hover:text-amber-400 transition-colors'>Переезды</a></li>
            <li><a href='#' className='hover:text-amber-400 transition-colors'>Доставка</a></li>
            <li><a href='#' className='hover:text-amber-400 transition-colors'>Грузчики</a></li>
            <li><a href='#' className='hover:text-amber-400 transition-colors'>Экстренная помощь</a></li>
          </ul>
        </div>

        <div>
          <h4 className='font-semibold text-white mb-2 sm:mb-3 text-sm sm:text-base'>Контакты</h4>
          <ul className='space-y-2 sm:space-y-3 text-white/80 text-sm sm:text-base'>
            <li className='flex items-start gap-2 sm:gap-3'>
              <MapPin size={16} className='mt-0.5 sm:mt-1 text-amber-400 shrink-0 sm:w-[18px] sm:h-[18px]' />
              <span>улица Нижняя Масловка, Москва</span>
            </li>
            <li className='flex items-start gap-2 sm:gap-3'>
              <Phone size={16} className='mt-0.5 sm:mt-1 text-amber-400 shrink-0 sm:w-[18px] sm:h-[18px]' />
              <a href='tel:+79660112044' className='hover:text-amber-400 transition-colors break-all'>+7 (966) 011-20-44</a>
            </li>
            <li className='flex items-start gap-2 sm:gap-3'>
              <Mail size={16} className='mt-0.5 sm:mt-1 text-amber-400 shrink-0 sm:w-[18px] sm:h-[18px]' />
              <a href='mailto:info@gruzchek.ru' className='hover:text-amber-400 transition-colors break-all'>info@gruzchek.ru</a>
            </li>
          </ul>
        </div>
      </div>

      <div className='h-px bg-white/10 my-4 sm:my-6 md:my-8' />

      <div className='flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-white/80'>
        <p className='text-center sm:text-left'>© {year} ГрузЧек. Все права защищены.</p>
        <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center'>
          <a href='#' onClick={(e) => { e.preventDefault(); setShowTerms(true) }} className='hover:text-amber-400 transition-colors'>Пользовательское соглашение</a>
          <a href='#' onClick={(e) => { e.preventDefault(); setShowPrivacy(true) }} className='hover:text-amber-400 transition-colors'>Политика конфиденциальности</a>
        </div>
      </div>

      {showTerms && (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4'>
          <div className='absolute inset-0 bg-black/50 backdrop-blur-sm' onClick={() => setShowTerms(false)} />
          <div className='relative bg-white text-black max-w-3xl w-full rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl max-h-[90vh] overflow-y-auto'>
            <button aria-label='Fermer' onClick={() => setShowTerms(false)} className='absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-black/5 hover:bg-black/10'>
              <X size={16} className='sm:w-[18px] sm:h-[18px]' />
            </button>
            <h3 className='text-xl sm:text-2xl md:text-3xl font-bold text-amber-500 mb-3 sm:mb-4 uppercase pr-8'>Пользовательское соглашение</h3>
            <div className='prose prose-sm md:prose-base max-w-none text-gray-700'>
              <p className='text-sm sm:text-base mb-3'>Последнее обновление: ноябрь 2025</p>
              <ul className='list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base'>
                <li><strong>Условия:</strong> ГрузЧек предоставляет услуги по переезду, доставке, грузчику и срочной помощи.</li>
                <li><strong>Бронирование:</strong> Вы предоставляете корректную информацию (адрес, дата/время, доступ, контакты). Изменения могут повлиять на стоимость и возможность оказания услуги.</li>
                <li><strong>Оплата и тарифы:</strong> Стоимость объявляется заранее. Возможны дополнительные сборы (ожидание, объём/вес, отсутствие лифта, парковка). Оплата производится по завершении работ, если не оговорено иное.</li>
                <li><strong>Отмена и перенос:</strong> Бесплатно за разумное время до выполнения заказа. В противном случае возможны удержания. Перенос — по согласованию и наличию свободных дат.</li>
                <li><strong>Доступ и безопасность:</strong> Клиент гарантирует безопасный доступ. Мы вправе отказаться при отсутствии условий безопасности.</li>
                <li><strong>Ответственность:</strong> Мы бережём Ваши вещи. В случае утраты/порчи ответственность ограничена стоимостью предмета и границами страхования.</li>
                <li><strong>Форс-мажор:</strong> Не отвечаем за обстоятельства вне нашего контроля (погода, аварии, забастовки и др.).</li>
                <li><strong>Поведение:</strong> Услуга может быть прекращена при оскорбительном, опасном или незаконном поведении.</li>
                <li><strong>Персональные данные:</strong> Обрабатываются согласно нашей Политике конфиденциальности.</li>
                <li><strong>Применимое право:</strong> Российское законодательство. Стороны стремятся к досудебному урегулированию споров.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {showPrivacy && (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4'>
          <div className='absolute inset-0 bg-black/50 backdrop-blur-sm' onClick={() => setShowPrivacy(false)} />
          <div className='relative bg-white text-black max-w-3xl w-full rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl max-h-[90vh] overflow-y-auto'>
            <button aria-label='Fermer' onClick={() => setShowPrivacy(false)} className='absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-black/5 hover:bg-black/10'>
              <X size={16} className='sm:w-[18px] sm:h-[18px]' />
            </button>
            <h3 className='text-xl sm:text-2xl md:text-3xl font-bold text-amber-500 mb-3 sm:mb-4 uppercase pr-8'>Политика конфиденциальности</h3>
            <div className='prose prose-sm md:prose-base max-w-none text-gray-700'>
              <p className='text-sm sm:text-base mb-3'>Последнее обновление: ноябрь 2025</p>
              <ul className='list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base'>
                <li><strong>Собираемые данные:</strong> ФИО, контакты, адреса, детали заказа, счета, переписка.</li>
                <li><strong>Цели обработки:</strong> Обработка заявок, связь, исполнение договорённости, биллинг, улучшение качества услуг.</li>
                <li><strong>Правовая основа:</strong> Договор, законные интересы, обязательства по закону, согласие (если требуется).</li>
                <li><strong>Срок хранения:</strong> Строго по необходимости и требованиям закона, после чего информация удаляется или обезличивается.</li>
                <li><strong>Передача данных:</strong> Только доверенным подрядчикам и по необходимости для оказания услуг; третьим лицам не продаются.</li>
                <li><strong>Защита:</strong> Все разумные технические и организационные меры соблюдены.</li>
                <li><strong>Права клиента:</strong> Право доступа, корректировки, удаления, ограничения, возражения, передачи данных. Контакты: info@gruzchek.ru.</li>
                <li><strong>Cookies:</strong> Используются только для работы сайта и, при согласии, для статистики/персонализации.</li>
                <li><strong>Изменения политики:</strong> Всегда действует актуальная версия политики.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}

export default Footer