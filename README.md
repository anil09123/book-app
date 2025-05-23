📚 Book Management System
A full-stack web application that allows users to register, login, and manage books (CRUD operations). 
Built using React.js for the frontend and Django REST Framework for the backend. 
MySQL is used as the relational database to persist data.

**🚀 Features**
🔐 User Authentication (JWT-based login & registration)
📘 Add, View, Edit, Delete Books
🧳 Each user has their own book list (User-to-Book relation)
🌐 RESTful API integration
🎨 Responsive UI using Bootstrap
🗃️ Data stored in MySQL with Django models

**💠 Tech Stack**
**Frontend**
React.js, React Router DOM, Axios, Bootstrap 5

**Backend**
Django, Django REST Framework, djoser (for auth), Simple JWT (for tokens)

**Database**
sqlite3

**📂 Project Structure**
![image](https://github.com/user-attachments/assets/f86f02e9-6afb-4a5e-968f-721fc23cb48a)

**🔐 Authentication**
JWT authentication using djoser and SimpleJWT
Tokens stored in localStorage on login
Protected routes like /books are only accessible to logged-in users


