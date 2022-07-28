import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";

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
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => setTransaction(res.data))
      .catch((err) => console.error(err));
  }, [index]);

  const editTransaction = () => {
    axios
      .put(`${API}/transactions/${index}`, transaction)
      .then((res) => {
        setTransaction(res.data);
        navigate(`/transactions/${index}`);
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTransaction();
  };

  return (
    <div className="New-Edit">
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="item_name">
            <Form.Label>Transaction Name</Form.Label>
            <Form.Control
              type="text"
              value={transaction.item_name}
              onChange={handleInput}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="amount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              value={transaction.amount}
              onChange={handleInput}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="text"
              value={transaction.date}
              onChange={handleInput}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="from">
            <Form.Label>From</Form.Label>
            <Form.Control
              type="text"
              value={transaction.from}
              onChange={handleInput}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              value={transaction.category}
              onChange={handleInput}
            ></Form.Control>
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
          </Button>
          <Link to={`/transactions/${index}`}>
            <Button variant="dark" type="submit">
              Back
            </Button>
          </Link>
        </Form>
      </Container>
    </div>
  );
};

export default EditTransaction;
