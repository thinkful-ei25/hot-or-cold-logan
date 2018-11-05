import React from 'react';
import GuessHistory from './guess-history';
import GuessNumber from './guess-number';
import Feedback from './feedback';
import './guess-form.css';

export default function GuessForm(props) {
  return (
    <section className="guess-section">
      <Feedback />

      <form className="guess-form">
        <input placeholder='Enter Your Guess' type="number"></input>
        <button type="submit">Guess</button>
      </form>

      <GuessNumber />
      <GuessHistory />
    </section>
  );
}
