import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

export default function userRatings() {
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
    </div>
  );
}
