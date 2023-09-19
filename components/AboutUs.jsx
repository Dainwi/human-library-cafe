import React from 'react'
import aboutData from '@/data/AboutUsData'

export default function AboutUs() {
  return (
    <section className='about-us'>
      <h1>Welcome to the Human Library Cafe</h1>
      <p> Learn - Connect - Share</p>
      {aboutData.AboutData.map((item, index) => {
        <div className="about-card">
          <h3>{item.title}</h3>
          <p>
            {item.content}
          </p>
        </div>
      })}
    </section>
  )
}
