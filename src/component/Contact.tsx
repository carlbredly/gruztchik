import React from 'react'
import FastOrderForm from './FastOrderForm'
import CompanyMap from './CompanyMap'

const Contact = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-4 lg:gap-2 relative rounded-4xl w-full bg-white h-auto p-2 sm:p-4'>
        <FastOrderForm titre="Связаться с нами" placeholderTache="Что требуется сделать?" placeholderAdresse="Адрес" placeholderEmail="E-mail" placeholderPhone="Ваш телефон" labelPersonnes="Количество работников" labelHeures="Количество часов" bouton="Отправить заявку" disclaimer="Нажимая на кнопку, вы соглашаетесь с условиями использования и политикой конфиденциальности." />
        <CompanyMap/>
    </div>
  )
}

export default Contact