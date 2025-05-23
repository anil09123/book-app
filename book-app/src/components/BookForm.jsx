import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../utils/axios';
import { Form, Button, Container, Card } from 'react-bootstrap';

const initialData = {
  title: '',
  author: '',
  publication_date: '',
  genre: '',
  description: '',
};

const BookForm = () => {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    if (isEdit) {
      axios.get(`books/${id}/`).then((res) => {
        setFormData({
          title: res.data.title,
          author: res.data.author,
          publication_date: res.data.publication_date,
          genre: res.data.genre,
          description: res.data.description,
        });
      });
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit) {
      await axios.put(`books/${id}/`, formData);
    } else {
      await axios.post('books/', formData);
    }
    navigate('/books');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '100%', maxWidth: '600px' }} className="p-4 shadow">
        <h2 className="text-center mb-4">{isEdit ? 'Edit Book' : 'Add New Book'}</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter book title"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="author">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Enter author name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="publication_date">
            <Form.Label>Publication Date</Form.Label>
            <Form.Control
              type="date"
              name="publication_date"
              value={formData.publication_date}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="genre">
            <Form.Label>Genre</Form.Label>
            <Form.Control
              type="text"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              placeholder="Enter genre"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter a brief description"
              required
            />
          </Form.Group>

          <Button type="submit" variant={isEdit ? 'primary' : 'success'} className="w-100">
            {isEdit ? 'Update Book' : 'Add Book'}
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default BookForm;
