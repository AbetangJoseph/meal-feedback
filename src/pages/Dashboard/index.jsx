import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import Button from '../../components/Button';
import RadioBox from '../../components/RadioBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Dasboard() {
  const foodCards = [
    {
      cardTitle: 'Breakfast',
      labelName: 'breakfeedback',
      option1: 'verygoodbreakfast',
      option2: 'goodbreakfast',
      option3: 'badreakfast'
    },
    {
      cardTitle: 'Lunch',
      labelName: 'lunchfeedback',
      option1: 'verygoodlunch',
      option2: 'goodlunch',
      option3: 'badlunch'
    },
    {
      cardTitle: 'Dinner',
      labelName: 'dinnerfeedback',
      option1: 'verygooddinner',
      option2: 'gooddinner',
      option3: 'baddinner'
    }
  ];

  return (
    <div style={{ margin: '25px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <h5>
          <Link to="/dashboard" className="nav-link dashboard-headers">
            dashboard
          </Link>
        </h5>
        <h5>
          <Link to="/myratings" className="nav-link dashboard-headers">
            my ratings
          </Link>
        </h5>
      </div>
      <hr />
      <div
        className="row"
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '50px'
        }}
      >
        {foodCards.map((card, index) => (
          <Card
            key={index}
            cardWidth="col-sm-3"
            cardTitle={card.cardTitle}
            cardBody="Not available"
            footerMessage={
              <>
                <div>
                  <RadioBox
                    labelText="very good"
                    labelName={card.labelName}
                    id={card.option1}
                  />
                  <RadioBox
                    labelText="good"
                    labelName={card.labelName}
                    id={card.option2}
                  />
                  <RadioBox
                    labelText="bad"
                    labelName={card.labelName}
                    id={card.option3}
                  />
                </div>
                <Button
                  buttonType="btn btn-outline-danger"
                  icon={<FontAwesomeIcon icon={faPaperPlane} />}
                  buttonLabel="send feedback"
                />
              </>
            }
          />
        ))}
      </div>
    </div>
  );
}
