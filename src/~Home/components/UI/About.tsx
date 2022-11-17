import React from 'react'
import './About.css'
type infoType = {
  [key: string]: any
}
import myPhoto from '../../../assets/graphics/Me Dark Background square.jpg'
const info: infoType = {
  'Full Name': 'Mohamed Ali',
  Age: 27,
  Nationality: 'Tunisian',
  Residency: 'İzmit Turkiye',
  Email: 'med.ali.benthaier@gmail.com',
  Languages: 'Arabic, English, French',
  WhatsApp: '+216 53 458 430',
}

export default function About() {
  return (
    <div className='section-wrapper'>
      <div className='section about d-flex flex-column align-items-center'>
        <h4>ABOUT ME</h4>
        <div className='d-flex'>
          <div className='col-6 d-flex flex-column pe-5'>
            <img src={myPhoto} className='w-100' alt='Mohamed Ali Ben Thaier' />
          </div>
          <div className='col-6 d-flex flex-column align-items-start px-5'>
            <h3>Hi there</h3>
            <p>
              I am a self-taught and hardworking junior frontend developer. Looking to leverage my problem-solving
              skills and passion for web development and build upon my 4+ years of motion design experience by
              transitioning into the software development space
            </p>
            <div className='d-flex col-12 flex-column align-items-start '>
              {Object.keys(info).map((key) => (
                <div className='d-flex col-12' key={key}>
                  <div className='d-flex col-4 justify-content-between pe-3'>
                    <p className=''>{key}</p>
                    <span>
                      <b>:</b>
                    </span>
                  </div>
                  <div className='d-flex col-6'>
                    <p className=''>{info[key]}</p>
                  </div>
                </div>
              ))}
              <button className='btn'>Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
