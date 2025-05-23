import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="container-fluid min-vh-100 d-flex flex-column justify-content-between px-3"
    >
   
      <div className="d-flex flex-grow-1 align-items-center justify-content-center">
        <div
          className="text-center p-5 rounded-4 shadow-lg"
          style={{
            maxWidth: '800px',
            width: '100%',
            backgroundColor: '#ffffff',
            color: '#212529',
          }}
        >
          <h1 className="display-4 fw-bold mb-3 text-primary">
            📚 Book Management System
          </h1>
          <p className="lead mb-4 text-secondary">
            Organize, explore, and manage your book collection effortlessly with a
            user-friendly experience.
          </p>

          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
            <button
              className="btn btn-primary btn-lg fw-semibold rounded-pill px-4"
              onClick={() => navigate('/books')}
            >
              📖 View Books
            </button>
            <button
              className="btn btn-outline-dark btn-lg fw-semibold rounded-pill px-4"
              onClick={() => navigate('/login')}
            >
              🔐 Login
            </button>
            <button
              className="btn btn-warning btn-lg fw-semibold rounded-pill px-4"
              onClick={() => navigate('/register')}
            >
              📝 Register
            </button>
          </div>
        </div>
      </div>

     
      <footer className="text-center py-3 text-dark small">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Book Management System. All rights reserved.
        </p>
        <p className="mb-0">
          Developed by <strong>Anil Navik</strong>
        </p>
      </footer>
    </div>
  );
};

export default Home;
