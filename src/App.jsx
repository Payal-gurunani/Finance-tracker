import React,{useState} from 'react'

import './styles.css'; 
import BalanceDisplay from './components/BalanceDisplay';
import IncomeExpencesForm from './components/IncomeExpencesForm';
// import Balance from './components/Balance';
import TransactionList from './components/TransactionList';

function App() {
 const [transactions ,setTransactions] = useState([]);
  const addTransaction = (transaction) =>{
    setTransactions([...transactions,transaction]);
  };

  const onDeleteTransaction = (index) => {
    setTransactions(transactions.filter((_,i)=> i !==index));
  };
  return (
   <div className='App'>
    <h1>Personal Finance Tracker</h1>
   <BalanceDisplay transactions = {transactions}/>
   <IncomeExpencesForm  addTransaction = {addTransaction}/>
   <TransactionList transactions = {transactions} onDeleteTransaction = {onDeleteTransaction}/>
   </div>
  )
}

export default App
