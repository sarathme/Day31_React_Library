import AppLayout from "./AppLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import CardList from "./ui/CardList";
import BookCard from "./books/BookCard";
import { useSelector } from "react-redux";
import AuthorForm from "./authors/AuthorForm";
import BookForm from "./books/BookForm";
import AuthorCard from "./authors/AuthorCard";

function App() {
  const { books } = useSelector((state) => state.books);
  const { authors } = useSelector((state) => state.authors);

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
                data={books}
                render={(book) => <BookCard key={book.id} book={book} />}
              />
            }
          />

          <Route
            path="authors"
            element={
              <CardList
                title="Authors"
                data={authors}
                render={(author) => (
                  <AuthorCard key={author.id} author={author} />
                )}
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
                render={<BookForm />}
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
