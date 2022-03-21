import { useState } from 'react';

import './Expenses.css';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

const Expenses = (props) => {

  const [chosenYear, setFilteredYear] = useState('2021');

  const filteredYearHandler = (filteredYear) => {
    console.log(`ExpenseFilter passed the value ${filteredYear} to Expenses`);

    setFilteredYear(filteredYear);
  }

  const filteredResults = props.expenses.filter((el) => {
    return el.date.getFullYear().toString() === chosenYear;
  });

  let expensesRendered = [...props.expenses];

  expensesRendered = chosenYear ? filteredResults : expensesRendered;
  console.log('filtered results: ', filteredResults);

  let expensesContent = <p>No expenses found.</p>

  if (expensesRendered.length) {
    expensesContent = expensesRendered.map((el) => (
      <ExpenseItem
        key={el.id}
        title={el.title}
        amount={el.amount}
        date={el.date}
      />
    ));
  }

  return (

    <>
      <Card className='expenses'>
        <ExpenseFilter selected={chosenYear} onFilteredYearSelected={filteredYearHandler}/>
        {expensesContent}
      </Card>
    </>

  )

};

export default Expenses;
