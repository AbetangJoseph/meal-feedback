import React from 'react';
import Card from '../../components/Card';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
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
              buttonType="btn btn-success btn-block"
            />
          </>
        }
        footerMessage={
          <span>
            Have an account alerady? <a href="/">Login</a>
          </span>
        }
      />
    </div>
  );
}
