import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import Button from '../../components/Button';
import RadioBox from '../../components/RadioBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { foodCards } from './fixtures';
import http from '../../api';
import Loader from '../../components/Loader';

const initialFeedbackState = {
  feedback: {
    breakfast: {
      comment: '',
      rating: null
    },
    lunch: { comment: '', rating: null },
    dinner: { comment: '', rating: null }
  }
};

// let AvailableMeal = foodCards.map(food => {
//   let newFood = food;
//   let labelExist = foodMeal.find(meal => newFood.labelName === meal.labelName);
//   if (labelExist) {
//     newFood.name = labelExist.name;
//     newFood.vendor = labelExist.vendor;
//   }
//   return newFood;
// });

export default function Dasboard() {
  const [feedbackValue, setFeedbackValue] = useState(
    initialFeedbackState.feedback
  );
  const [spinner, setSpinner] = useState(false);
  const [AvailableMeal, setAvailableMeal] = useState([]);

  const onchangeHandler = event => {
    setFeedbackValue({
      ...feedbackValue,
      [event.target.name]: {
        comment: 'no comment',
        rating: Number(event.target.value)
      }
    });
  };

  useEffect(() => {
    http
      .get('food/available-meal')
      .then(response => {
        setAvailableMeal(
          foodCards.map(food => {
            let newFood = food;
            let labelExist = response.data[0].meal.find(
              meal => newFood.labelName === meal.labelName
            );
            if (labelExist) {
              newFood.name = labelExist.name;
              newFood.vendor = labelExist.vendor;
            }
            return newFood;
          })
        );
      })
      .catch(error => {});
  }, []);

  const handleClick = event => {
    setSpinner(true);
    const endpoint = `rating/${event.target.name}`;

    http.post(endpoint, feedbackValue[event.target.name]).then(response => {
      setSpinner(false);
      alert('rating successful');
    });
  };

  const renderBody = card => {
    return card.name ? (
      <>
        <h4>{card.name}</h4>
        <p>
          Vendor: <i>{card.vendor}</i>
        </p>
      </>
    ) : (
      'food yet to be served'
    );
  };

  const renderFooterContent = card => {
    return (
      <>
        {card.name ? (
          <>
            <div>
              <RadioBox
                labelText="very good"
                labelName={card.labelName}
                radioValue={2}
                onchange={onchangeHandler}
                id={card.option1}
              />
              <RadioBox
                labelText="good"
                labelName={card.labelName}
                radioValue={1}
                onchange={onchangeHandler}
                id={card.option2}
              />
              <RadioBox
                labelText="bad"
                labelName={card.labelName}
                radioValue={0}
                onchange={onchangeHandler}
                id={card.option3}
              />
            </div>
            {feedbackValue[card.labelName].rating === 0 ? (
              <input type="text" />
            ) : (
              ''
            )}
            <Button
              buttonType="btn btn-outline-danger"
              icon={<FontAwesomeIcon icon={faPaperPlane} />}
              buttonLabel="send feedback"
              click={handleClick}
              cardName={card.labelName}
              isDisabled={feedbackValue[card.labelName].rating === null}
            />{' '}
          </>
        ) : (
          'food yet to be served'
        )}
      </>
    );
  };

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
            cardBody={renderBody(card)}
            footerMessage={renderFooterContent(card)}
          />
        ))}
      </div>
      <Loader isActive={spinner} />
    </div>
  );
}
