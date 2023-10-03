import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const [filteredInfoText, setFilteredInfoText] = useState('2019, 2021, 2022');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    if (selectedYear === '2019') {
      setFilteredInfoText('2020, 2021, 2022');
    } else if (selectedYear === '2020') {
      setFilteredInfoText('2019, 2021, 2022');
    } else if (selectedYear === '2021') {
      setFilteredInfoText('2019, 2020, 2022');
    } else {
      setFilteredInfoText('2019, 2020, 2021');
    }
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <p>Data for years {filteredInfoText} is hidden</p>
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
};
export default Expenses;
