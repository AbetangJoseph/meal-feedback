import React from 'react';
import Card from '../../components/Card';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import './style.css';

export default function SignUp() {
  return (
    <div id="signup-card">
      <Card
        cardTitle="Sign Up"
        cardWidth="col-sm-4"
        message="Please fill in this form to create an account!"
        cardBody={
          <>
            <InputField />
            <InputField />
            <InputField />
            <InputField />
            <InputField />
            <InputField />
            <Button
              buttonLabel="sign up"
              buttonType="btn btn-success btn-block"
            />
          </>
        }
      />
    </div>
  );
}
