import React, { useEffect, useState } from 'react';
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

const intialState = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  password: '',
  confirmpassword: ''
};

export default function SignUp() {
  const [userSignup, setUserSingup] = useState(intialState);

  const handleChange = e => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const handleSubmit = e => {
    // e.preventDefault();
    console.log(e);
  };

  return (
    <div id="signup-card">
      {/* <> */}
        <Card
          cardTitle="Sign Up"
          cardWidth="col-sm-4"
          message="Please fill in this form to create an account!"
          cardBody={
            <form onSubmit={handleSubmit} className='form-group'>
              <InputField
                inputType="text"
                placeholder="first name"
                inputName="firstname"
                inputId="firstname"
                change={handleChange}
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
                change={handleChange}
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
                change={handleChange}
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
                change={handleChange}
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
                change={handleChange}
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
                change={handleChange}
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
            </form>
          }
          footerMessage={
            <span>
              <Link to="/login" className="nav-link dashboard-headers">
                Have an account alerady? Login
              </Link>
            </span>
          }
        />
      {/* <> */}
    </div>
  );
}
