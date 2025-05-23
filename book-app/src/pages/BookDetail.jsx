import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from '../utils/axios';
import AuthContext from '../context/AuthContext';
import { Container, Card, Button, Spinner, Row, Col } from 'react-bootstrap';

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`books/${id}/`).then(res => setBook(res.data));
  }, [id]);

  const handleDelete = async () => {
    await axios.delete(`books/${id}/`);
    navigate('/books');
  };

  if (!book) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-3">Loading...</p>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Card className="shadow-lg">
        <Card.Body>
          <Card.Title as="h2" className="mb-4">{book.title}</Card.Title>
          <Card.Text><strong>Author:</strong> {book.author}</Card.Text>
          <Card.Text><strong>Published:</strong> {book.publication_date}</Card.Text>
          <Card.Text><strong>Genre:</strong> {book.genre}</Card.Text>
          <Card.Text><strong>Description:</strong>{book.description}</Card.Text>
          <Row className="mt-4">
            {user && user.user_id === book.user && (
              <>
                <Col xs="auto">
                  <Link to={`/edit/${id}`}>
                    <Button variant="primary">Edit</Button>
                  </Link>
                </Col>
                <Col xs="auto">
                  <Button variant="danger" onClick={handleDelete}>Delete</Button>
                </Col>
              </>
            )}
            <Col xs="auto">
              <Button variant="secondary" onClick={() => navigate('/books')}>Back to List</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default BookDetail;
