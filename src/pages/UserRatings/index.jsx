import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/Card';

export default function userRatings() {
  let date = new Date(Date.now());

  return (
    <div style={{ margin: '25px' }}>
      <div className="my-ratings">
        <h5>
          <Link to="/" className="nav-link dashboard-headers">
            <Button buttonLabel="Back" buttonType="btn btn-custom-outline " />
          </Link>
        </h5>
        <h5>my ratings</h5>
      </div>
      <div style={{ margin: '15px' }}>
        <div
          className="row"
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '50px'
          }}
        >
          <Card
            cardTitle={<p style={{ color: '#cf320d' }}>food name</p>}
            cardBody={<h6>feedback</h6>}
            cardWidth="col-sm-8"
            footerMessage={<p>{date.toString().split('G')[0]}</p>}
          />
        </div>
      </div>
    </div>
  );
}
