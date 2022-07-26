import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

const EditTransaction = () => {
    let { index } = useParams();
    const navigate = useNavigate();

    const [transaction, setTransaction] = useState({
        item_name: "",
        amount: 0,
        date: "",
        from: "",
        category: "",
    });

    const handleInput = (e) => {
        setTransaction({...transaction, [e.target.id]: e.target.value})
    };

    useEffect(() => { 
        axios.get(`${API}/transactions/${index}`)
        .then(res => setTransaction(res.data))
        .catch(err => console.error(err))
    }, [index]);

    const editTransaction = () => {
        axios.put(`${API}/transactions/${index}`, transaction)
        .then(res => {
            setTransaction(res.data)
            navigate(`/transactions/${index}`)
        })
        .catch(err => console.error(err))
    };
    
    const handleEdit = (e) => {
        e.preventDefault();
        editTransaction();
    };

    return (
        <div className="New Edit">
            <form onSubmit={handleEdit} >
                <label>
                    Transaction Name:
                    <input type="text" value={transaction.item_name} id="item_name" onChange={handleInput} />
                </label>
                <br />
                <label>
                    Amount:
                    <input type="text" value={transaction.amount} id="amount" onChange={handleInput} />
                </label>
                <br />
                <label>
                    Date:
                    <input type="text" value={transaction.date} id="date" onChange={handleInput} />
                </label>
                <br />
                <label>
                    From:
                    <input type="text" value={transaction.from} id="from" onChange={handleInput} />
                </label>
                <br />
                <label>
                    Category:
                    <input type="text" value={transaction.category} id="category" onChange={handleInput} />
                </label>
                <br/>
                <input type="submit" />
            </form>
            <Link to={`/transactions/${index}`}>
                <button>Back</button>
            </Link>
        </div>
    );
};

export default EditTransaction;