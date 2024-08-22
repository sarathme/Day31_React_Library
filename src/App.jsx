import AppLayout from "./AppLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import CardList from "./ui/CardList";
import BookCard from "./ui/BookCard";
import { useSelector } from "react-redux";
import AuthorForm from "./authors/AuthorForm";

function App() {
  const { books, authors } = useSelector((state) => state);

  const booksData = books.books;
  const authorsData = authors.authors;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="books" />} />
          <Route
            path="books"
            element={
              <CardList
                title="Books"
                data={booksData}
                render={(book) => <BookCard key={book.id} />}
              />
            }
          />

          <Route
            path="authors"
            element={
              <CardList
                title="Authors"
                data={authorsData}
                render={(author) => <BookCard key={author.id} />}
              />
            }
          />

          <Route
            path="authors/create"
            element={
              <CardList
                data={null}
                title="Add New Author"
                render={<AuthorForm />}
              />
            }
          />

          <Route
            path="books/create"
            element={
              <CardList
                data={null}
                title="Add new Book"
                render={<AuthorForm />}
              />
            }
          />

          <Route
            path="authors/edit"
            element={
              <CardList
                data={null}
                title="Edit Author"
                render={<AuthorForm />}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
