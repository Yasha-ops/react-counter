import { useState } from 'react';
import confetti from 'canvas-confetti';
import './index.css';

function launchFireworks() {
  var duration = 0.5 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  var interval = setInterval(function() {
    var timeLeft = animationEnd - Date.now();
  
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }
  
    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random

    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, scalar: 0.5}));
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, scalar: 0.5}));
  }, 250);
}

function App() {
  const [count, setCount] = useState(0);


  // Add fireworks when clicked !
  return (
    <div >
      <h1 className='select-none text-bold font-heading hover:text-xl hover:animate-wiggle' onClick={ () => { 
          launchFireworks();
          setCount(count + 1);
      }}>Click on me !</h1>
      <div className='text-center'>
        <h1 className='text-sm text-center font-heading'>{count}</h1>
      </div>
    </div>
  )
}

export default App;
