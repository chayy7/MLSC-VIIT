import React from 'react';
import EventsSection from './EventsSection';

const upcoming = [
  {
    id: 'u1',
    title: 'Upcoming Event',
    date: '404',
    location: 'Main Auditorium',
    description: 'Upcoming Event',
    image: 'https://i.postimg.cc/Jnf4Q9Rv/Untitled-design.jpg',
    ctaLabel: 'Register',
    ctaLink: '#',
  },
  {
    id: 'u2',
    title: 'Upcoming Event',
    date: '404',
    location: 'Hall B',
    description: 'Upcoming Event',
    image: 'https://i.postimg.cc/Jnf4Q9Rv/Untitled-design.jpg',
    ctaLabel: 'Register',
    ctaLink: '#',
  },
];

const past = [
  {
    id: 'p1',
    title: 'Inaugural Ceremony',
    date: '2025-09-22',
    location: 'Vikram Sarabhai Seminar Hall',
    description:
      'Celebrating new beginnings and inspiring journeys at our Inaugural Ceremony.',
    image: 'https://i.postimg.cc/ZnTNXpJ8/DSC-0461-1.jpg',
  },
  {
    id: 'p2',
    title: 'Microsoft Azure Tech Workshop',
    date: '2025-12-17',
    location: 'Vikram Sarabhai Seminar Hall',
    speakers: ['Zaara Nasim', 'N Varshith', 'J Venkat Sai'],
    description:
      'A hands-on workshop covering Azure fundamentals and cloud deployment.',
    image: 'https://i.postimg.cc/tRmQ88ZK/file-000000008e347206b419a707e5070ee3.png',
  },
];

export default function Events() {
  return <EventsSection upcoming={upcoming} past={past} />;
}
