import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => setTransactions(res.data))
      .catch((err) => console.error(err));
  }, []);

  const transactionTotal = () => {
    let amounts = transactions.map((transaction) => transaction.amount);
    let sum = amounts.reduce((a, b) => Number(a) + Number(b), 0)

    return sum;
  };

  let total = transactionTotal();

  let color = "neutral";

  if(total >= 1000){
    color = "green"
  }else if(total < 0){
    color = "red"
  }

  return (
    <div>
        <h1>Account Total: <span className={color}>${total}</span></h1>
            {transactions.map((transaction, index) => {
              return (
                <Transaction
                  key={index}
                  transaction={transaction}
                  index={index}
                />
              );
            })}
    </div>
  );
};

export default Transactions;
