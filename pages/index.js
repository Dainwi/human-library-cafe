import React from 'react'
import FeaturedEvent from './FeaturedEvent'


const Homepage = () => {
  return (
    <>
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Welcome to the Human Library Cafe</h1>
          <p>Learn - Connect - Share</p>
          <a href="/events" className="cta-button">Explore Events</a>
        </div>
      </section>

        <FeaturedEvent/>
    </>
  )
}

export default Homepage