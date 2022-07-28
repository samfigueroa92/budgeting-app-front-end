import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";

const Transaction = ({ transaction, index }) => {
  return (
    <Container>
    <Table striped bordered hover size="sm">
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
              {transaction.item_name[0].toUpperCase() +
                transaction.item_name.slice(1)}
            </a>
          </td>
          <td>$ {transaction.amount}</td>
        </tr>
      </thead>
    </Table>
    </Container>
  );
};

export default Transaction;
