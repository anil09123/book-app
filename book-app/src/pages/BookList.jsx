import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('books/').then(res => {
      setBooks(res.data.results || res.data); 
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-3">Loading Books...</p>
      </Container>
    );
  }
  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">Book Collection</h2>
        </Col>
        <Col className="text-end">
          <Link to="/add">
            <Button variant="success">Add New Book</Button>
          </Link>
        </Col>
      </Row>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {books.map(book => (
          <Col key={book.id}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
                <Card.Text><strong>Genre:</strong> {book.genre}</Card.Text>
                <Card.Text><strong>Published:</strong> {book.publication_date}</Card.Text>
                <Link to={`/books/${book.id}`}>
                  <Button variant="primary" size="sm">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
