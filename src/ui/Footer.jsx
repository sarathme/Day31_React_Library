import { useSelector } from "react-redux";

function Footer() {
  const { books } = useSelector((state) => state.books);
  const { authors } = useSelector((state) => state.authors);

  return (
    <footer className="footer grid-container bg-accent full-width">
      <div className="stats">
        <p>
          Total Books: <span>{books.length}</span>
        </p>
        <p>
          Total Authors: <span>{authors.length}</span>
        </p>
        {/* <p>
          Authors with no books: <span>{authors.length}</span>
        </p> */}
      </div>
    </footer>
  );
}

export default Footer;
