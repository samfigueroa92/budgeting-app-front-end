import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";

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
        if(e.target.id === "amount"){
            setTransaction({...transaction, [e.target.id]: Number(e.target.value)})
        }else{
            setTransaction({...transaction, [e.target.id]: e.target.value})
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTransaction();
    };

    return (
        <div className="New">
            <Container>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="item_name">
        <Form.Label>Transaction Name</Form.Label>
        <Form.Control type="text" placeholder="income, food..." id="item_name" value={transaction.item_name} onChange={handleInput}/>
      </Form.Group>
            <Form.Group className="mb-3" controlId="amount">
        <Form.Label>Amount</Form.Label>
        <Form.Control type="number" id="amount" value={transaction.amount} onChange={handleInput}/>
      </Form.Group>
            <Form.Group className="mb-3" controlId="item_name">
        <Form.Label>Date</Form.Label>
        <Form.Control type="text" id="date" value={transaction.date} onChange={handleInput}/>
      </Form.Group>
            <Form.Group className="mb-3" controlId="from">
        <Form.Label>From</Form.Label>
        <Form.Control type="text" placeholder="employer, bank..." id="from" value={transaction.from} onChange={handleInput}/>
      </Form.Group>
            <Form.Group className="mb-3" controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="income, food..." id="category" value={transaction.category} onChange={handleInput}/>
      </Form.Group>
      <Button variant="dark" type="submit">
        Submit
      </Button>
                </Form>
            </Container>
        </div>
    );
};

export default NewTransaction;