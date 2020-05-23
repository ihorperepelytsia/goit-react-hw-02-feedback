import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Sections from './Sections/Sections';
import Notification from './Notification/Notification';
import {
  countTotalFeedback,
  countPositiveFeedbackPercentage,
} from '../service/service';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = ({ target: { name } }) => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Sections title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handleIncrement} />
        </Sections>
        {countTotalFeedback(good, neutral, bad) > 0 ? (
          <Sections title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback(good, neutral, bad)}
              positivePercentage={countPositiveFeedbackPercentage(
                good,
                neutral,
                bad,
              )}
            ></Statistics>
          </Sections>
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}
