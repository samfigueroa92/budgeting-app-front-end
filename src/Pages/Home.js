import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Container>
        <p>
          Welcome to my simple Budget App. On this site you will be able to view a list of transactions, make a new transaction, edit old transactions or delete them. I built this using Javascript, HTML, CSS, React, Express and Bootstrap. If you enjoyed my app feel free to reach out!
        </p>
      </Container>
      <Container>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1d9ba706-bc48-4313-bf08-d143716962fa%2FSamantha_Figueroa.jpg?table=block&id=4713bc3f-b349-4a46-b9f2-d0438a0ed7a4&spaceId=e2735e9b-8fe9-4c16-bdc1-be142cd1014e&width=2000&userId=508bb533-cfe0-4929-b1f8-94995b637846&cache=v2"
          />
          <Card.Body>
            <Card.Title>Samantha Figueroa</Card.Title>
            <Card.Text>
            I am a
          web developer in training with Pursuit, an intensive 12
          month software engineering fellowship with a 9% acceptance rate.
            </Card.Text>
            <Button variant="dark">GitHub</Button>
            <Button variant="dark">Email</Button>
            <Button variant="dark">LinkedIn</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Home;
