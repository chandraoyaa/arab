import React from 'react';
import { Eraser, ArrowRight, ArrowLeft } from 'lucide-react';

const Controls = ({ onClear, onNext, onPrev, hasPrev, hasNext }) => {
  return (
    <div className="controls">
      <button 
        className="control-btn prev-btn glass-panel" 
        onClick={onPrev}
        disabled={!hasPrev}
      >
        <ArrowLeft size={24} />
        <span>Sebelumnya</span>
      </button>

      <button className="control-btn clear-btn glass-panel" onClick={onClear}>
        <Eraser size={24} />
        <span>Hapus</span>
      </button>

      <button 
        className="control-btn next-btn glass-panel" 
        onClick={onNext}
        disabled={!hasNext}
      >
        <span>Selanjutnya</span>
        <ArrowRight size={24} />
      </button>
    </div>
  );
};

export default Controls;
