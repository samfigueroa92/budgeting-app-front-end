import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

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

    const handleDelete = () => {
        axios.delete(`${API}/transactions/${index}`)
        .then(res => navigate("/transactions"))
        .catch(err => console.error(err))
    };

    return (
        <div className="transaction-view">
            <p>Transaction Name: {transaction.item_name}</p>
            <p>Amount: $ {transaction.amount}</p>
            <p>Date: {transaction.date}</p>
            <p>From: {transaction.from}</p>
            <p>Category: {transaction.category}</p>
            <Link to={"/transactions"}>
            <Button variant="dark" type="submit">Back</Button>
            </Link>
            <Link to={`/transactions/${index}/edit`}>
            <Button variant="dark" type="submit">Edit</Button>
            </Link>
            <Button variant="dark" type="submit" onClick={handleDelete}>Delete</Button>
        </div>
    );
};

export default TransactionDetails;