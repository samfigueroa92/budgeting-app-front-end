import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

const NewTransaction = () => {
    debugger
    const [transaction, setTransaction] = useState({
        item_name: "",
        amount: 0,
        date: "",
        from: "",
        category: "",
    });
    const navigate = useNavigate();

    const addTransaction = () => {
        axios.post(`${API}/transactions`, transaction)
        .then(res => navigate(`/transactions`))
        .catch(err => console.error(err))
    };

    const handleInput = (e) => {
        setTransaction({...transaction, [e.target.id]: e.target.value});
    };

    const handleNew = (e) => {
        e.preventDefault();
        addTransaction();
        console.log(transaction)
    };

    return (
        <div className="New">
            <form onSubmit={handleNew}>
                <label>
                    Transaction Name:
                <input type="text" id="item_name" placeholder="income, food..." value={transaction.item_name} onChange={handleInput} required />
                </label>
                <br/>
                <label>
                    Amount:
                <input type="text" id="amount" value={transaction.amount} onChange={handleInput} required />
                </label>
                <br/>
                <label>
                    Date:
                <input type="text" id="date" placeholder="January 1" value={transaction.date} onChange={handleInput} required />
                </label>
                <br/>
                <label>
                    From:
                <input type="text" id="from" placeholder="employer, grocery store..." value={transaction.from} onChange={handleInput} required />
                </label>
                <br/>
                <label>
                    Category:
                <input type="text" id="category" placeholder="income, food..." value={transaction.category} onChange={handleInput} required />
                </label>
                <br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default NewTransaction;