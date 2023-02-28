 import React,{useState} from "react"
import './Expenseitem.css';
import ExpenseDate from "../expense_date/Expensedate";
const ExpenseItem=(props={})=>{
    // const date=new Date(2023,2,3).toISOString();
    // const title="New Tv";
    // const amount='79';
    console.log(props);
    // let {
    //     date = new Date(),
    //     amount=0,
    //    }=props;
       const [title, setTitle]=useState(props.title)//[title,setTitle]
       const [date, setDate]=useState(props.date)
       const [amount, setAmount]=useState(props.amount)
       //let title=props.title;
    //    function onChangeClick(event){
    // //     console.log('ExpenseitemExpenseitemExpenseitem');
    // //     setTitle('updated');
    // //     setDate(new Date());
    // //     setAmount(0);
    // //     console.log(title);
    // //    }
    // const year=date.getFullYear();
    // const month=date.toLocaleDateString('en-US',{month:'long'});
    // const day=date.toLocaleDateString('en-US',{day:'2-digit'});
    // console.log(year);
    return (
        <div className="expense-item">
            {/* <div className="date">{date}</div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div> */}
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                    {/* {props.title}</h2> */}
                <div className="expense-item__price">
                    {/* ${props.amount} */}
                    ${amount}
                    </div>
                    {/* <button onClick={onChangeClick}>change</button> */}
        </div>
        </div>
    )
}
export default ExpenseItem;