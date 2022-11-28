import React, { useState } from 'react'
import { motion } from 'framer-motion'
import tsicon from '../../../assets/graphics/typescript.svg'
import PortfolioModal from './PortfolioModal'
//import typescript icon

export default function PortfolioCard({
  title,
  description,
  component,
  index,
}: {
  title: string
  description: string
  component: any
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

  const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow(true)
  }
  const handleHide = () => {
    setShow(false)
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
        // onClick={handleShow}
        className='card-overlay d-flex flex-wrap justify-content-center align-items-center'>
        <div className='col-12 text-center'>
          <p>{description}</p>
        </div>
        <div>
          <button className='btn' onClick={handleShow}>
            Show
          </button>

          {show && (
            <PortfolioModal
              show={show}
              component={component}
              title={title}
              handleShow={handleShow}
              handleHide={handleHide}
            />
          )}
        </div>
      </motion.div>
      <div className='d-flex justify-content-between'>
        <div>
          <h1>#{index + 1}</h1>
        </div>
        <div>
          <img src={tsicon} alt='typescript icon' />
        </div>
      </div>
      <div>
        <p>{title}</p>
      </div>
    </motion.div>
  )
}
