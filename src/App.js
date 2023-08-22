// import React from 'react';
import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2023, 7, 13),
    },
    { id: 'e2', title: 'Iphone', amount: 799.49, date: new Date(2023, 2, 15) },
    {
      id: 'e3',
      title: 'Corcinet',
      amount: 294.67,
      date: new Date(2023, 2, 23),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2023, 5, 10),
    },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
