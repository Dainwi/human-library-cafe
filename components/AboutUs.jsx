import React from 'react';
import aboutData from '@/data/AboutUsData';

export default function AboutUs() {
  return (
    <section className='about-us'>
      <h1>Welcome to the Human Library Cafe</h1>
      <div className="about-us-wrapper">
        {aboutData.AboutData.map((item, index) => (
          <div className="about-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
