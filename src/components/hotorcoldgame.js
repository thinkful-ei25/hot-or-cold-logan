import React from 'react';

import './hotorcoldgame.css';
//import all components
import Header from './header';
import GuessForm from './guess-form';

//export default
export default function HotOrColdGame(props) {
  return (
    <div className="HotOrCold">
      <Header />
      <section className='guess-section'>
        <GuessForm />
      </section>
    </div>
  )
}
