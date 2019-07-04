import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import Button from '../../components/Button';
import RadioBox from '../../components/RadioBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Dasboard() {
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
          <Link to="/history" className="nav-link dashboard-headers">
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
        <Card
          cardWidth="col-sm-3"
          cardTitle="Breakfast"
          cardBody="Not available"
          footerMessage={
            <>
              <div>
                <RadioBox
                  labelText="very good"
                  labelName="breakfeedback"
                  id="verygoodbreakfast"
                />
                <RadioBox
                  labelText="good"
                  labelName="breakfeedback"
                  id="goodbreakfast"
                />
                <RadioBox labelText="bad" labelName="breakfeedback" id="badbreakfast" />
              </div>
              <Button
                buttonType="btn btn-outline-danger"
                icon={<FontAwesomeIcon icon={faPaperPlane} />}
                buttonLabel="send feedback"
              />
            </>
          }
        />
        <Card
          cardWidth="col-sm-3"
          cardTitle="Lunch"
          cardBody="Not available"
          footerMessage={
            <>
              <div>
                <RadioBox
                  labelText="very good"
                  labelName="lunchfeedback"
                  id="verygoodlunch"
                />
                <RadioBox
                  labelText="good"
                  labelName="lunchfeedback"
                  id="goodlunch"
                />
                <RadioBox labelText="bad" labelName="lunchfeedback" id="badlunch" />
              </div>
              <Button
                buttonType="btn btn-outline-danger"
                icon={<FontAwesomeIcon icon={faPaperPlane} />}
                buttonLabel="send feedback"
              />
            </>
          }
        />
        <Card
          cardWidth="col-sm-3"
          cardTitle="Dinner"
          cardBody="Not available"
          footerMessage={
            <>
              <div>
                <RadioBox
                  labelText="very good"
                  labelName="feedback"
                  id="verygooddinner"
                />
                <RadioBox labelText="good" labelName="feedback" id="gooddinner" />
                <RadioBox labelText="bad" labelName="feedback" id="baddinner" />
              </div>
              <Button
                buttonType="btn btn-outline-danger"
                icon={<FontAwesomeIcon icon={faPaperPlane} />}
                buttonLabel="send feedback"
              />
            </>
          }
        />
      </div>
    </div>
  );
}
