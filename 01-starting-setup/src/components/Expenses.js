import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  <div>
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
  </div>;
}

export default Expenses;

//1. Making Expenses.js file and function
//2. copy ExpenseItem to Expenses file into return
//3. imprt ExpenseItem, App file
//4. Export Expenses
//5. props = expenses as const in App.js
