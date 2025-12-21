import React, { useEffect, useRef } from 'react';
import './Events.css';

const EventItem = ({ ev, index }) => {
  const isEven = index % 2 === 0;
  const img = ev.image || '';

  const body = (
    <div className="es-eventBody">
      <h3 id={`es-title-${ev.id}`} className="es-eventTitle">
        {ev.title}
      </h3>

      <div className="es-eventMeta">
        {ev.date && <time>{ev.date}</time>}
        {ev.location && <span> · {ev.location}</span>}
      </div>

      {/* ✅ Speakers */}
      {ev.speakers && ev.speakers.length > 0 && (
        <p className="es-eventSpeakers">
          <strong>Speakers:</strong> {ev.speakers.join(', ')}
        </p>
      )}

      {/* ✅ Description */}
      {ev.description && (
        <p className="es-eventDesc">{ev.description}</p>
      )}

      <div className="es-eventActions">
        {ev.ctaLink && ev.ctaLabel && (
          <a className="es-btn" href={ev.ctaLink}>
            {ev.ctaLabel}
          </a>
        )}
      </div>
    </div>
  );

  const media = (
    <div className="es-eventMedia">
      {img ? (
        <img src={img} alt={ev.title} className="es-eventImg" />
      ) : (
        <div className="es-imagePlaceholder">No image</div>
      )}
    </div>
  );

  return (
    <article className="es-eventItem">
      {isEven ? (
        <>
          {body}
          {media}
        </>
      ) : (
        <>
          {media}
          {body}
        </>
      )}
    </article>
  );
};

export default function EventsSection({ upcoming = [], past = [] }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const items = rootRef.current?.querySelectorAll('.es-eventItem');
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('es-inView');
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );

    items?.forEach((i) => obs.observe(i));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="es-section" ref={rootRef}>
      <div className="es-container">
        <h1 className="es-heading">Events</h1>

        {upcoming.length > 0 && (
          <div className="es-block">
            <h3 className="es-blockTitle">Upcoming Events</h3>
            {upcoming.map((ev, i) => (
              <EventItem key={ev.id} ev={ev} index={i} />
            ))}
          </div>
        )}

        {past.length > 0 && (
          <div className="es-block">
            <h3 className="es-blockTitle">Past Events</h3>
            {past.map((ev, i) => (
              <EventItem key={ev.id} ev={ev} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
