import React from 'react';
import './feedback.css';
export default function Feedback(props) {
  let feedback = 'Make your guess!';
  //hot, warm or cold if statements
  return (
    <div className="feedback">{feedback}</div>
  )
}