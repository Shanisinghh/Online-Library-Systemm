import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import AddBook from "./components/AddBook.jsx";
import Book from "./components/Book.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

import BookDetail from "./components/BookDetail.jsx";
import BrowseAllBook from "./components/BrowseAllBook.jsx";
import NotFound from "./components/NotFound.jsx";

const pathprovider = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<NotFound />}>
      <Route path="" element={<Home />} />
      <Route path="/addbook" element={<AddBook />} />
      <Route path="/BrowseBooks" element={<BrowseAllBook />} />
      <Route path="/bookdetail/:id" element={<BookDetail />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={pathprovider} />
    </Provider>
  </StrictMode>
);
