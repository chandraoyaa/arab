import React from 'react';

const LetterSelector = ({ letters, currentLetter, onSelectLetter }) => {
  return (
    <div className="letter-selector glass-panel">
      <h3>Pilih Huruf</h3>
      <div className="letters-grid">
        {letters.map((letter) => (
          <button
            key={letter.id}
            className={`letter-btn ${currentLetter.id === letter.id ? 'active' : ''}`}
            style={{ 
              backgroundColor: currentLetter.id === letter.id ? letter.color : 'white',
              color: currentLetter.id === letter.id ? 'white' : '#333',
              borderColor: letter.color
            }}
            onClick={() => onSelectLetter(letter)}
          >
            {letter.char}
            <span className="letter-name" style={{ color: currentLetter.id === letter.id ? 'white' : '#666' }}>
              {letter.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LetterSelector;
