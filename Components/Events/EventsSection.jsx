import React, { useEffect, useRef } from 'react';
import './Events.css';

const EventItem = ({ ev, index }) => {
  // For desktop: if index is even (0,2,...) -> description left, image right
  // if index is odd -> image left, description right
  const isEven = index % 2 === 0;
  const img = ev.image || '';

  // Render order: if isEven -> body first then media (body left, media right)
  // otherwise -> media first then body (media left, body right)
  const body = (
    <div className="es-eventBody" key="body">
      <h3 id={`es-title-${ev.id}`} className="es-eventTitle">{ev.title}</h3>
      <div className="es-eventMeta">
        {ev.date && <time className="es-eventDate">{ev.date}</time>}
        {ev.location && <span className="es-eventLocation"> · {ev.location}</span>}
      </div>
      <p className="es-eventDesc">{ev.description}</p>
      <div className="es-eventActions">
        {ev.ctaLink && ev.ctaLabel && (
          <a href={ev.ctaLink} className="es-btn" aria-label={`${ev.ctaLabel} — ${ev.title}`}>
            {ev.ctaLabel}
          </a>
        )}
      </div>
    </div>
  );

  const media = (
    <div className="es-eventMedia" key="media" role="img" aria-label={ev.title}>
      {img ? (
        <img src={img} alt={ev.title} className="es-eventImg" />
      ) : (
        <div className="es-imagePlaceholder" aria-hidden="true">No image</div>
      )}
    </div>
  );

  return (
    <article
      className={`es-eventItem ${!isEven ? 'es-reverse' : ''}`}
      aria-labelledby={`es-title-${ev.id}`}
    >
      {isEven ? [body, media] : [media, body]}
    </article>
  );
};

export default function EventSection({ upcoming = [], past = [] }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll('.es-eventItem'));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('es-inView');
            obs.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );
    items.forEach((it) => obs.observe(it));
    return () => obs.disconnect();
  }, [upcoming, past]);

  return (
    <section className="es-section" aria-labelledby="es-main-title" ref={rootRef}>
      <div className="es-container">
        <h1 id="es-main-title" className="es-heading">Events</h1>

        {upcoming && upcoming.length > 0 && (
          <div className="es-block es-upcoming">
            <h3 className="es-blockTitle">Upcoming Events</h3>
            <div className="es-list">
              {upcoming.map((ev, idx) => (
                <EventItem ev={ev} key={ev.id ?? `up-${idx}`} index={idx} />
              ))}
            </div>
          </div>
        )}

        {past && past.length > 0 && (
          <div className="es-block es-past">
            <h3 className="es-blockTitle">Past Events</h3>
            <div className="es-list">
              {past.map((ev, idx) => (
                <EventItem ev={ev} key={ev.id ?? `past-${idx}`} index={idx} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}