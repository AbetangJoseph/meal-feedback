import React from 'react';
import Card from '../../components/Card';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import './style.css';

export default function Login() {
  return (
    <div id="login-card">
      <Card
        cardTitle="Login"
        cardWidth="col-sm-4"
        message="Please fill in this form to login!"
        cardBody={
          <>
            <InputField />
            <InputField />
            <Button
              buttonLabel="Login"
              buttonType="btn btn-custom-outline btn-block"
            />
          </>
        }
        footerMessage={
          <span>
            <Link to="/signup" className="nav-link dashboard-headers">
              Don't have an account? Signup
            </Link>
          </span>
        }
      />
    </div>
  );
}
