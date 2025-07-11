# 📚 Online Library System

A  React application to manage an online library with functionality to browse, add, and view details of books. Built using **React**, **React Router**, **Redux**, and **Tailwind CSS**.

---

## 🚀 Features

### ✅ Home Page
- Navigation bar for easy routing.
- Filter books by category (`/books/:category`).
- Search bar to filter books by title or author.
- "View Details" links for each book.

### ✅ Book Details Page
- Displays title, author, description, and rating.
- "Back to Browse" navigation.

### ✅ Add Book Page
- Add new book form with validation.
- Redux used to manage book list state.
- Redirects to Browse Books with new book shown.

### ❌  Delete Book Page
-  **Delete a Book**: Each book card has a delete button to remove it from the library (handled via Redux).
- Redux used to manage book list state.
- Redirects to Home After delete book.


### ✅ 404 Page
- Friendly "Page Not Found" message for undefined routes.
- Link to return to Home page.

---

## 🛠️ Tech Stack

- ⚛️ React
- 📦 Redux Toolkit
- 🎨 Tailwind CSS
- 🌐 React Router DOM
- 🔍 JavaScript (ES6+)

---

## how to run

Make sure you have **Node.js** and **npm** installed on your system.

Step 1 - Install all dependencies using **npm install**

Step 2 - Run command npm **run dev**

