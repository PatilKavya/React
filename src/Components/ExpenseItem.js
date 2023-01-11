import "./ExpenseItem.css";

function ExpenseItem() {
  const expenceDate=new Date(2023,0,11);
  const expenceItem='Car Insurance';
  const expencePrice=1000;
  const LocationOfExpenditure='Dehli'
  return (
    <div className="expense-item">
      <div>{expenceDate.toString()}</div>
      <div className="expense-item__description">
        <h2>{expenceItem}</h2>
        <div className="expense-item__price">{expencePrice} Rs</div>
        <div>{LocationOfExpenditure}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
