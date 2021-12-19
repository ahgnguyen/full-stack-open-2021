import React, { useState } from 'react';

const Header = ({ text }) => 
  <h1>{text}</h1>

const Button = ({ onClick, text }) => 
  <button onClick={onClick}>{text}</button>;

const Anecdote = ({ anecdote, numVotes }) =>
  <div>
    <Header text="Anecdote of the day" />
    <p>{anecdote}</p>
    <p>has {numVotes} votes</p>
  </div>

const MostVotes = ({ anecdotes, votes }) => {
  let maxIndex = -1;
  let max = 0;
  for (let i = 0; i < votes.length; i++) {
    if (votes[i] > max) {
      max = votes[i];
      maxIndex = i;
    }
  }

  if (maxIndex == -1) {
    return (
      <div>
        <Header text="Anecdote with the most votes" />
        <p>No votes yet</p>
      </div>
    );
  } else {
    return (
      <div>
        <Header text="Anecdote with the most votes" />
        <p>{anecdotes[maxIndex]}</p>
        <p>has {votes[maxIndex]} votes</p>
      </div>
    );
  }
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };


  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  return (
    <div>
      <Anecdote anecdote={anecdotes[selected]} numVotes={votes[selected]} />
      <Button onClick={handleVote} text="vote" />
      <Button onClick={handleNextAnecdote} text="next anecdote" />
      <MostVotes anecdotes={anecdotes} votes={votes} />
    </div>
  );
};

export default App;