export const countTotalFeedback = (good, neutral, bad) => good + neutral + bad;

export const countPositiveFeedbackPercentage = (good, neutral, bad) =>
  countTotalFeedback(good, neutral, bad) > 0
    ? Math.round((good / countTotalFeedback(good, neutral, bad)) * 100)
    : 0;
