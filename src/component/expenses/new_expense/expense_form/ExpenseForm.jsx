import React, { useState } from "react";
import './ExpenseForm.css';
const ExpenseForm=(props)=>{
    const onSave=props.onSave;
    const[enteredtitle,setEnteredTitle]=useState('');
    const[enteredAmount,setEnteredAmount]=useState('');
    const[enteredDate,setEnteredDate]=useState('');

    const onTitleChange=(event)=>setEnteredTitle(event.target.value);
    const onAmountChange=(event)=>setEnteredAmount(event.target.value)
    const onDateChange=(event)=>setEnteredDate(event.target.value)

    const onExpenseSubmit =(event)=>{
        event.preventDefault();
        console.log('Call from Form',enteredtitle,enteredAmount,enteredDate)
        const new_expense={
            title:enteredtitle,
            amount:enteredAmount,
            date:new Date(enteredDate),
        }
        onSave(new_expense);
    };
    return(
        <form onSubmit={onExpenseSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
          <label htmlfor="title">Title</label>
          <input type="text" name="title" id="title" value={enteredtitle} onChange={onTitleChange}/><br></br>
          </div>
          <div className="new-expense__control">
          <label htmlfor="amount">Amount</label>
          <input type="number" name="amount" id="amount" min="0" value={enteredAmount} onChange={onAmountChange}/><br></br>
          </div>
          <div className="new-expense__control">
          <label htmlfor="date">Date</label>
          <input type="date" name="date" id="date" min="0" value={enteredDate} onChange={onDateChange} />
          </div>
        
        </div>
        <div className="new-expense__actions">
          <button>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
    </form>
    );
}
export default ExpenseForm;