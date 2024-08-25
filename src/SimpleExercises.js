// src/components/SimpleExercises.js
import React from 'react';
import './SimpleExercises.css';
import breathe from './deepbreathe.jpg'
import meditate from './meditate.jpeg'
import muscle from './muscle relax.jpeg'
import stretch from './stretching.jpg'
const exercises = [
  {
    name: 'Deep Breathing',
    description: 'Take slow, deep breaths to calm your nervous system and reduce stress.',
    image: breathe,
    video: 'https://www.youtube.com/embed/aNXKjGFUlMs' // Example YouTube video ID
  },
  {
    name: 'Yoga',
    description:'Yoga can relax your muscles and relieve your stress',
    image: muscle,
    video: 'https://www.youtube.com/embed/1_Bgzdi4XX4' // Example YouTube video ID
  },
  {
    name: 'Stretching',
    description: 'Gentle stretching exercises to relieve physical tension and improve flexibility.',
    image: stretch,
    video: 'https://www.youtube.com/embed/yqeirBfn2j4' // Example YouTube video ID
  },
  {
    name: 'Mindfulness Meditation',
    description: 'Sit quietly and focus on your breath or a mantra to calm your mind and reduce stress.',
    image: meditate,
    video: 'https://www.youtube.com/embed/YRJ6xoiRcpQ' // Example YouTube video ID
  }
];

const SimpleExercises = () => {
  return (
    <div className="exercises-container">
      <ul className="exercises-list">
        {exercises.map((exercise, index) => (
          <li key={index} className="exercise-item">
            <img src={exercise.image} alt={exercise.name} className="exercise-image" />
            <div className="exercise-details">
              <h2>{exercise.name}</h2>
              <p>{exercise.description}</p>
              <div className="exercise-video">
                <iframe
                  width="560"
                  height="315"
                  src={exercise.video}
                  title={exercise.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleExercises;
