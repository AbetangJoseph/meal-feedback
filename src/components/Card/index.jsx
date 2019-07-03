import React from 'react';

export default function Card({
  cardTitle,
  cardBody,
  cardWidth,
  message,
  messageFontsize
}) {
  return (
    <>
      <div className={cardWidth}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted">{cardTitle}</h5>
            <p style={{ fontSize: messageFontsize }}>{message}</p>
            <hr />
            <div className="card-text" style={{ listStyleType: 'none' }}>
              {cardBody}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
