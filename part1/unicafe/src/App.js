import React, { useState } from 'react';

const Header = ({ text }) => 
  <h1>{text}</h1>

const Button = ({ onClick, text }) => 
  <button onClick={onClick}>{text}</button>;

const Statistic = ({ name, value }) => {
  if (name === "positive") {
    return (
      <tr>
        <td>{name} {value}%</td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{name} {value}</td>
      </tr>
    );
  }
};

const Statistics = ({ clicks }) => {
  const totalClicks = clicks.good + clicks.neutral + clicks.bad;
  if (totalClicks === 0) {
    return (
      <p>No feedback given</p>
    );
  } else {
    const average = (clicks.good - clicks.bad) / totalClicks;
    const positivePercentage = clicks.good / totalClicks * 100;

    return (
      <div>
        <Header text="statistics"/>
        <table>
          <tbody>
            <Statistic name="good" value={clicks.good}/>
            <Statistic name="neutral" value={clicks.neutral}/>
            <Statistic name="bad" value={clicks.bad}/>
            <Statistic name="all" value={clicks.totalClicks}/>
            <Statistic name="average" value={average}/>
            <Statistic name="positive" value={positivePercentage}/>
          </tbody>
        </table>
      </div>
    );
  }
};


const App = () => {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleGoodClick = () => 
    setClicks({ ...clicks, good: clicks.good + 1 });

  const handleNeutralClick = () => 
    setClicks({ ...clicks, neutral: clicks.neutral + 1 });

  const handleBadClick = () => 
    setClicks({ ...clicks, bad: clicks.bad + 1 });

  return (
    <div>
      <Header text="give feedback"/>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <Statistics clicks={clicks} />
    </div>
  );
};

export default App;