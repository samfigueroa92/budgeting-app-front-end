import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const Transaction = ({ transaction, index }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    axios.delete(`${API}/transactions/${index}`)
    .then(res => navigate("/"))
    .catch(err => console.error(err))
};

  return (
    <Container>
    <Table striped bordered size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Transaction Name</th>
          <th>Amount</th>
        </tr>
        <tr>
          <td>{index}</td>
          <td>{transaction.date}</td>
          <td>
            <a href={`/transactions/${index}`}>
              {transaction.item_name}
            </a>
          </td>
          <td>$ {transaction.amount}</td>
          <td>
            <Button variant="dark" onClick={()=> navigate(`/transactions/${index}/edit`)}>Edit
            </Button>
          </td>
          <td><Button variant="dark" onClick={handleDelete} >Delete</Button></td>
        </tr>
      </thead>
    </Table>
    </Container>
  );
};

export default Transaction;
