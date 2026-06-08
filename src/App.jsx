import React, { useState, useRef } from 'react';
import './App.css';
import { letters } from './data/letters';
import DrawingBoard from './components/DrawingBoard';
import LetterSelector from './components/LetterSelector';
import Controls from './components/Controls';
import { Sparkles } from 'lucide-react';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const boardRef = useRef(null);
  
  const currentLetter = letters[currentIndex];

  const handleClear = () => {
    if (boardRef.current) {
      boardRef.current.clearCanvas();
    }
  };

  const handleNext = () => {
    if (currentIndex < letters.length - 1) {
      setCurrentIndex(currentIndex + 1);
      handleClear();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      handleClear();
    }
  };

  const handleSelectLetter = (letter) => {
    const index = letters.findIndex((l) => l.id === letter.id);
    if (index !== -1) {
      setCurrentIndex(index);
      handleClear();
    }
  };

  return (
    <div className="app-container">
      <header className="app-header glass-panel">
        <h1>
          <Sparkles className="icon-sparkle" style={{ color: currentLetter.color }} /> 
          Belajar Menulis Hijaiyah 
          <Sparkles className="icon-sparkle" style={{ color: currentLetter.color }} />
        </h1>
        <p>Ayo tebalkan hurufnya!</p>
      </header>

      <main className="app-main">
        <div className="board-section">
          <div className="board-wrapper glass-panel">
            <div className="letter-header" style={{ backgroundColor: currentLetter.color }}>
              <h2>{currentLetter.name}</h2>
            </div>
            
            <DrawingBoard 
              ref={boardRef} 
              currentLetter={currentLetter} 
              color={currentLetter.color} 
            />
          </div>

          <Controls 
            onClear={handleClear}
            onNext={handleNext}
            onPrev={handlePrev}
            hasPrev={currentIndex > 0}
            hasNext={currentIndex < letters.length - 1}
          />
        </div>

        <aside className="sidebar-section">
          <LetterSelector 
            letters={letters}
            currentLetter={currentLetter}
            onSelectLetter={handleSelectLetter}
          />
        </aside>
      </main>
    </div>
  );
}

export default App;
