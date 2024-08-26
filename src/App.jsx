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
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="/books" />} />
          <Route
            path="/books"
            element={
              <CardList
                title="Books"
                data={books}
                render={(book) => <BookCard key={book.id} book={book} />}
              />
            }
          />

          <Route
            path="/authors"
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
            path="/author/create"
            element={
              <CardList
                data={null}
                title="Add New Author"
                render={<AuthorForm key={1} isEdit={false} />}
              />
            }
          />

          <Route
            path="/book/create"
            element={
              <CardList
                data={null}
                title="Add new Book"
                render={<BookForm key={1} isEdit={false} />}
              />
            }
          />
          <Route
            path="/books/edit/:bookId"
            element={
              <CardList
                data={null}
                title="Update Book"
                render={<BookForm isEdit={true} />}
              />
            }
          />

          <Route
            path="/authors/edit/:authorId"
            element={
              <CardList
                data={null}
                title="Update Author"
                render={<AuthorForm isEdit={true} />}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
