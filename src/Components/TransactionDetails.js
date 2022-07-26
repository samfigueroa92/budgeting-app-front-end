import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const TransactionDetails = () => {
    const [transaction, setTransaction] = useState({});
    let { index } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/transactions/${index}`)
        .then(res => setTransaction(res.data))
        .catch(err => console.error(err))
    }, [index]);

    return (
        <div>
            <p>{transaction.item_name}</p>
            <p>{transaction.amount}</p>
            <p>{transaction.date}</p>
            <p>{transaction.from}</p>
            <p>{transaction.category}</p>
            <Link to={"/transactions"}>
            <button>Back</button>
            </Link>
            <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
            </Link>
        </div>
    )
};

export default TransactionDetails;