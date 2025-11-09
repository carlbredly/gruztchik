import React from 'react'

const Trust = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 my-6 sm:my-8 mx-0 sm:mx-4 md:mx-14'>
        <div className='flex flex-col items-center p-3 sm:p-4'>
            <h1 className='font-medium text-2xl sm:text-3xl mb-1 sm:mb-2'>7+</h1>
            <p className='text-gray-500 text-xs sm:text-sm md:text-base text-center'>Лет опыта</p>
        </div>
        <div className='flex flex-col items-center p-3 sm:p-4'>
            <h1 className='font-medium text-2xl sm:text-3xl mb-1 sm:mb-2'>30+</h1>
            <p className='text-gray-500 text-xs sm:text-sm md:text-base text-center'>Специалистов в штате</p>
        </div>
        <div className='flex flex-col items-center p-3 sm:p-4'>
            <h1 className='font-medium text-2xl sm:text-3xl mb-1 sm:mb-2'>2.5k+</h1>
            <p className='text-gray-500 text-xs sm:text-sm md:text-base text-center'>Довольных клиентов</p>
        </div>
        <div className='flex flex-col items-center p-3 sm:p-4'>
            <h1 className='font-medium text-2xl sm:text-3xl mb-1 sm:mb-2'>98%</h1>
            <p className='text-gray-500 text-xs sm:text-sm md:text-base text-center'>Положительных отзывов</p>
        </div>
    </div>
  )
}

export default Trust