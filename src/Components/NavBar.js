import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const NavBar = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get(`${API}/transactions`)
        .then(res => setTransactions(res.data))
        .catch(err => console.error(err))
    }, []);

    const transactionTotal = () => {
        let amounts = transactions.map(transaction => transaction.amount);
        let positiveNum = amounts.filter(num => num > 0).reduce((a,b) => a + b, 0);
        let negativeNum = amounts.filter(num => num < 0).reduce((a,b) => a + b, 0);
        let sum = positiveNum + negativeNum;

        return sum;
    };

    let total = transactionTotal();

    return (
        <nav>
            <p>${total}</p>
            <button>
                <Link to="/transactions">All Transactions</Link>
            </button>
            <button>
                <Link to="/transactions/new">New Transaction</Link>
            </button>
        </nav>
    )
}

export default NavBar;