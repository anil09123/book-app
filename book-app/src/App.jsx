import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/NavigationBar';
import ProtectedRoute from './components/ProtectedRoute';

import Login from './pages/Login';
import Register from './pages/Register';
import BookList from './pages/BookList';
import BookDetail from './pages/BookDetail';
import BookForm from './components/BookForm';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} /> 
          <Route
            path="books"
            element={
              <ProtectedRoute>
                <BookList />
              </ProtectedRoute>
            }
          />
          <Route
            path="books/:id"
            element={
              <ProtectedRoute>
                <BookDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="add"
            element={
              <ProtectedRoute>
                <BookForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="edit/:id"
            element={
              <ProtectedRoute>
                <BookForm />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
