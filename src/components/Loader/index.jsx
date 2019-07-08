import React from 'react';
import './style.css';

export default function Loader({ isActive }) {
  return (
    <div className={isActive ? 'modal text-center show' : 'modal'}>
      <div className="spinner-border text-primary loader" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
