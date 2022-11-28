import React from 'react'
import img1 from '../../../assets/graphics/FireShot Capture 004.png'
import img2 from '../../../assets/graphics/FireShot Capture 005.png'
import img3 from '../../../assets/graphics/FireShot Capture 006.png'
import img4 from '../../../assets/graphics/FireShot Capture 007.png'
import img5 from '../../../assets/graphics/FireShot Capture 008.png'
//import link icon
import { Carousel } from 'react-bootstrap'

export default function ProjectCarousel() {
  return (
    <div className='container col-11' style={{ minHeight: '50vh', margin: '20px auto' }}>
      <Carousel variant='dark' interval={null}>
        <Carousel.Item>
          <img className='d-block w-100' src={img1} alt='First slide' />
          <Carousel.Caption>
            <h3>Login</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={img2} alt='Second slide' />

          <Carousel.Caption>
            <h3>Home</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={img3} alt='Second slide' />

          <Carousel.Caption>
            <h3>Budget tracker</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={img4} alt='Second slide' />

          <Carousel.Caption>
            <h3>Todo list</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={img5} alt='Second slide' />

          <Carousel.Caption>
            <h3>Invitation maker</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
