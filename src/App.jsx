import AppLayout from "./AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="books" element={<h1>Books</h1>} />
          <Route path="authors" element={<h1>Authors</h1>} />
          <Route path="authors/create" element={<h1>Create New Author</h1>} />
          <Route path="books/create" element={<h1>Create New Book</h1>} />
          <Route path="authors/edit" element={<h1>Edit Author</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
