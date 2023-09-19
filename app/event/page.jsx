import React from 'react';
import eventData from '@/data/Eventdata';

const Event = () => {
  return (
    <>
      {/* <h2 style={{margin: '20px'}}>Featured Events</h2> */}
      <div className="event">
        {eventData.featuredEvents.map((event, index) => (
          // Render an event card for each featured event
          <div className="event-card" key={index}>
            <h3>{event.eventName}</h3>
            <img src={event.imageURL} alt="event" />
            <div className="event-card-content">
              <p>{event.eventLocation}</p>
              <p>{event.eventDescription}</p>
              <a href={event.link} className="cta-button">
                Explore Event
              </a>
            </div>
          </div>
        ))}
      </div>
    </>);
}
export default Event;