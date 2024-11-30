// src/components/TransactionList.js
import React from 'react';

const TransactionList = ({ transactions, onDeleteTransaction }) => {
  return (
    <div className="transaction-list">
      <h3>Transactions</h3>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={transaction.id}>
            <span>{transaction.description}</span>
            <span>{transaction.type === 'Income' ? '+' : '-'}${transaction.amount}</span>
            <button onClick={() => onDeleteTransaction(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
