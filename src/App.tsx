import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useEffect } from 'react';

import Contact from './component/Contact'
import Header from './component/Header'
import Hero from './component/Hero'
import Review from './component/Review'
import Services from './component/Services'
import Trust from './component/Trust'
import About from './component/About'
import Footer from './component/Footer'




const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

function App() {
 

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className='mx-2 sm:mx-4 md:mx-8 lg:mx-14 mb-4'
      >
        <div className='flex flex-col gap-4'>
          <motion.section variants={sectionVariants} initial="hidden" animate="visible" id="home">
            < Header/>
          </motion.section>

          <motion.section variants={sectionVariants} initial="hidden" animate="visible">
            < Hero/>
          </motion.section>

          <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} id="trust">
            < Trust/>
          </motion.section>

          <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} id="services">
            <Services/>
          </motion.section>

          <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} id="contact">
            <Contact/>
          </motion.section>

          <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} id="reviews">
            <Review/>
          </motion.section>

          <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} id="about">
            <About/>
          </motion.section>

          <motion.section variants={sectionVariants} initial="hidden" animate="visible">
            <Footer/>
          </motion.section>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default App
