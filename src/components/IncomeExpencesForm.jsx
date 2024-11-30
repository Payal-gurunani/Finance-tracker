import { useState } from "react"
import React  from 'react'

const IncomeExpencesForm = ( {addTransaction} ) => {
const [amount, setAmount] = useState('');
const [description, setDescription] = useState('');
const [type, setType] = useState('Income');

const handleSubmit = (e) =>{
  e.preventDefault();

  const transaction = {
     id: Date.now(),
    amount: parseFloat(amount),
      description,
      type,
  }

  addTransaction(transaction);
    setAmount('');
    setDescription('');
  
};
  return (
    <div>
       <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
        
      </select>
      <button type="submit">Add Transaction</button>
    </form>
    </div>
  )
}

export default IncomeExpencesForm
