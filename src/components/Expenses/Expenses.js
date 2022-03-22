import { useState } from 'react';

import './Expenses.css';

import Card from '../UI/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

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

  

  return (

    <>
      <Card className='expenses'>
        <ExpenseFilter selected={chosenYear} onFilteredYearSelected={filteredYearHandler} />
        <ExpensesChart expenses={expensesRendered} />
        <ExpensesList items={expensesRendered} />
      </Card>
    </>

  )

};

export default Expenses;
