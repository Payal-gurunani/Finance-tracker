// src/components/BalanceDisplay.js
import React from 'react';

function BalanceDisplay({ transactions }) {
  const calculateIncome = () => {
    return transactions
      .filter((transaction) => transaction.type === 'Income')
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  };

  const calculateExpenses = () => {
    return transactions
      .filter((transaction) => transaction.type === 'Expense')
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  };

  const income = calculateIncome();
  const expenses = calculateExpenses();
  const balance = income - expenses;

  return (
    <div className='balance-display'>
      <h2>Balance</h2>
      <p className='income'>Total Income: ${income}</p>
      <p className='expenses'>Total Expenses: ${expenses}</p>
      <p className='balance'>Balance: ${balance}</p>
    </div>
  );
}

export default BalanceDisplay;
