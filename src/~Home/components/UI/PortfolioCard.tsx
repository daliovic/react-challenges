import React from 'react'
import { motion } from 'framer-motion'
import bg from '../../../assets/graphics/CardBG.svg'
import PortfolioModal from './PortfolioModal'

export default function PortfolioCard({
  title,
  description,
  component,
  index,
}: {
  title: string
  description: string
  component: JSX.Element
  index: number
}) {
  const overlayVariants = {
    hidden: {
      opacity: 0,
      scaleY: 1,
      rotateX: 90,
      rotateY: 0,
      boxShadow: '0 15px 10px rgba(0, 0, 0, 0.3)',
      transition: {
        duration: 0.7,
        ease: 'easeIn',
      },
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      rotateX: 0,
      boxShadow: '0 15px 10px rgba(0, 0, 0, 0.3)',
      transition: {
        duration: 1.1,
        ease: 'easeOut',
      },
    },
  }
  const cardVariants = {
    hidden: {
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeIn',
      },
    },
    visible: {
      scale: 1.04,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }



  return (
    <motion.div
      layout
      className='d-flex flex-column custom-card'
      initial='hidden'
      whileHover='visible'
      animate='hidden'
      variants={cardVariants}
    //   style={{ backgroundImage: `url(${bg})`,}}
      >
      <motion.div
        variants={overlayVariants}
        className='card-overlay d-flex flex-wrap justify-content-center align-items-center'>
        <div className='col-12 text-center'>
          <p>{description}</p>
        </div>
        <div>
          <PortfolioModal component={component} title={title}/>
        </div>
      </motion.div>
      <div className=''>
        <h1>#{index+1}</h1>
      </div>
      <div>
        <p>{title}</p>
      </div>
    </motion.div>
  )
}
