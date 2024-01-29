import React, { useState, useEffect } from 'react';
import './rotate.css'; // Import the CSS file for styles

const RotatingTextList = ({ texts }) => {
  const [visibleIndexes, setVisibleIndexes] = useState([0, 1, 2, 3, 4]);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setVisibleIndexes((prevIndexes) =>
          prevIndexes.map((index) => (index + 1) % texts.length)
        );
        setTransitioning(false);
      }, 500); // Adjust the timeout to match your transition duration
    }, 4000); // Increase the interval duration to 4000 milliseconds (4 seconds)

    return () => clearInterval(intervalId);
  }, [texts.length]);

  // Define a style object for different positions
  const positionStyles = {
    0: { color: 'black', fontSize: '30px', opacity: 0.5 },
    1: { color: 'black', fontSize: '34px', opacity: 0.8 },
    2: { fontWeight: 'bold', color: 'black', fontSize: '40px' },
    3: { color: 'black', fontSize: '34px', opacity: 0.8 },
    4: { color: 'black', fontSize: '30px', opacity: 0.5 },
  };

  return (
    <div className={`rotating-text-list-container ${transitioning ? 'transitioning' : ''}`}>
      {/* Map over visible indexes to create the carousel effect */}
      {visibleIndexes.map((visibleIndex, i) => (
        <div key={i} style={positionStyles[i]}>
          {texts[visibleIndex]}
        </div>
      ))}
    </div>
  );
};

export default RotatingTextList;
