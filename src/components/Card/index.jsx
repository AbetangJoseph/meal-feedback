import React from 'react';
import './style.css';

export default function Card({ cardTitle, cardBody, cardWidth, message }) {
  return (
    <>
      <div className={cardWidth}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted">{cardTitle}</h5>
            <p className="login-p-tags">{message}</p>
            <hr />
            <div className="card-text" style={{ listStyleType: 'none' }}>
              {cardBody}
            </div>
            <hr />
            <p className="login-p-tags">
              Have an account alerady? <a href="#">Login</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
