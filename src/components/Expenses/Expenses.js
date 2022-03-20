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

  return (

    <>
      <ExpenseFilter selected={chosenYear} onFilteredYearSelected={filteredYearHandler}/>
      <Card className='expenses'>
        {props.expenses.map((el) => (
          <ExpenseItem
            key={el.id}
            title={el.title}
            amount={el.amount}
            date={el.date}
          />
        ))}
      </Card>
    </>

  )

};

export default Expenses;
