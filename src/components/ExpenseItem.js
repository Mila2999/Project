import './ExpenseItem.css';
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div> August 16th 2023</div>
      <div className="expense-item__description">
        <h2>Fligts to Viena</h2>
        <div className="expense-item__price">$249.49</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
