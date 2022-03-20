// import { useState } from 'react';

import './ExpenseFilter.css';

const ExpenseFilter = (props) => {

  // const [filteredYear, setFilteredYear] = useState('');

  const clickHandler = (event) => {

    event.preventDefault();

    console.log(`Filtered Year Selected: ${event.target.value}`);
    const filteredYear = event.target.value;

    props.onFilteredYearSelected(filteredYear);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={clickHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value=''>(none)</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
