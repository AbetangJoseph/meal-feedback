import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{
          backgroundColor: '#cf320d',
          boxShadow: '10px 1px 10px 1px #ddd'
        }}
      >
        <Link to="/" className="nav-link">
          <FontAwesomeIcon
            icon={faUtensils}
            style={{ color: 'white', fontSize: '30px' }}
          />
          <span
            style={{
              color: 'white',
              fontSize: '25px',
              marginLeft: '10px',
              fontFamily: 'Dancing Script, cursive'
            }}
          >
            RateMeal
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item ">
              <Link to="/signup" className="nav-link">
                Sign up
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
