import React from 'react'
import './About.css'
import './Contact.css'
type infoType = {
  [key: string]: any
}
import myPhoto from '../../../assets/graphics/Me Dark Background square.jpg'
const info: infoType = {
  Email: 'med.ali.benthaier@gmail.com',
  WhatsApp: '+216 53 458 430',
}

export default function Contact() {
  return (
    <div className='section-wrapper contact'>
      <div className='section about d-flex flex-column align-items-center'>
        <h4>Contact</h4>
        <div className='d-flex col-12 justify-content-around'>
          {Object.keys(info).map((key) => (
            <div className='d-flex flex-column justify-content-center align-items-center' key={key}>
              <div className='d-flex'>
                <p className=''>{key}</p>
              </div>
              <div className='d-flex'>
                <p className=''>{info[key]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
