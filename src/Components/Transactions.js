import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get(`${API}/transactions`)
        .then(res => setTransactions(res.data))
        .catch(err => console.error(err))
    }, [])

    return (
        <div className="Transactions">
            <h1>Bank Account Total: </h1>
            {transactions.map((transaction, index) => {
                return <Transaction key={index} transaction={transaction} index={index}/>
            })}
        </div>
    )
}

export default Transactions;