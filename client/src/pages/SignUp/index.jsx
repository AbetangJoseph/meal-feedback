import React, { useState } from 'react';
import Card from '../../components/Card';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import './style.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUserMutation } from '../../gql/queries';
import { graphql, compose } from 'react-apollo';
import {
  faPhoneAlt,
  faLock,
  faPenAlt,
  faAt
} from '@fortawesome/free-solid-svg-icons';

const intialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  confirmpassword: ''
};

function SignUp(props) {
  const [userSignup, setUserSignUp] = useState(intialState);

  // console.log(props);

  const handleChange = e => {
    e.preventDefault();
    setUserSignUp({ ...userSignup, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(userSignup);

    const data = props.createUserMutation({
      variables: {
        firstName: userSignup.firstName,
        lastName: userSignup.lastName,
        phone: userSignup.phone,
        password: userSignup.password,
        email: userSignup.email
      }
    });
    console.log(data);

    setUserSignUp(intialState);
  };

  return (
    <div id="signup-card">
      <>
        <Card
          cardTitle="Sign Up"
          cardWidth="col-sm-4"
          message="Please fill in this form to create an account!"
          cardBody={
            <form onSubmit={handleSubmit} className="form-group">
              <InputField
                inputType="text"
                placeholder="first name"
                inputName="firstName"
                inputId="firstname"
                inputValue={userSignup.firstName}
                change={handleChange}
                inputSign={
                  <FontAwesomeIcon
                    icon={faPenAlt}
                    style={{ color: 'grey', fontSize: '13px' }}
                  />
                }
              />
              <InputField
                inputType="text"
                placeholder="last name"
                inputName="lastName"
                inputId="lastname"
                inputValue={userSignup.lastName}
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
                inputValue={userSignup.email}
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
                inputValue={userSignup.phone}
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
                inputValue={userSignup.password}
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
                inputValue={userSignup.confirmpassword}
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
      </>
    </div>
  );
}

// export default graphql(createUserMutation)(SignUp);
export default compose(
  graphql(createUserMutation, { name: 'createUserMutation' })
)(SignUp);
