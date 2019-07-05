import React from 'react';
import Card from '../../components/Card';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import './style.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneAlt,
  faLock,
  faPenAlt,
  faAt
} from '@fortawesome/free-solid-svg-icons';

export default function SignUp() {
  return (
    <div id="signup-card">
      <Card
        cardTitle="Sign Up"
        cardWidth="col-sm-4"
        message="Please fill in this form to create an account!"
        cardBody={
          <>
            <InputField
              inputType="text"
              placeholder="first name"
              inputName="firstname"
              inputId="firstname"
              inputSign={
                <FontAwesomeIcon
                  icon={faPenAlt}
                  style={{ color: 'grey', fontSize: '13px' }}
                />
              }
            />
            <InputField
              inputType="password"
              placeholder="last name"
              inputName="lastname"
              inputId="lastname"
              inputSign={
                <FontAwesomeIcon
                  icon={faPenAlt}
                  style={{ color: 'grey', fontSize: '13px' }}
                />
              }
            />
            <InputField
              inputType="email"
              placeholder="email"
              inputName="email"
              inputId="email"
              inputSign={
                <FontAwesomeIcon
                  icon={faAt}
                  style={{ color: 'grey', fontSize: '13px' }}
                />
              }
            />
            <InputField
              inputType="phone"
              placeholder="phone"
              inputName="phone"
              inputId="phone"
              inputSign={
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  style={{ color: 'grey', fontSize: '13px' }}
                />
              }
            />
            <InputField
              inputType="password"
              placeholder="password"
              inputName="password"
              inputId="password"
              inputSign={
                <FontAwesomeIcon
                  icon={faLock}
                  style={{ color: 'grey', fontSize: '14px' }}
                />
              }
            />
            <InputField
              inputType="password"
              placeholder="confirm password"
              inputName="confirmpassword"
              inputId="confirmpassword"
              inputSign={
                <FontAwesomeIcon
                  icon={faLock}
                  style={{ color: 'grey', fontSize: '14px' }}
                />
              }
            />
            <Button
              buttonLabel="sign up"
              buttonType="btn btn-custom-outline btn-block"
            />
          </>
        }
        footerMessage={
          <span>
            <Link to="/login" className="nav-link dashboard-headers">
              Have an account alerady? Login
            </Link>
          </span>
        }
      />
    </div>
  );
}
