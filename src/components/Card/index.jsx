import React from 'react';
import './style.css';

export default function Card({
  cardTitle,
  cardBody,
  cardWidth,
  message,
  footerMessage
}) {
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
            <div className="login-p-tags">{footerMessage}</div>
          </div>
        </div>
      </div>
    </>
  );
}
