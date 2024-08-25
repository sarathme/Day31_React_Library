import { HiMiniPencil, HiMiniTrash } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./bookSlice";
import { useNavigate, useParams } from "react-router-dom";

function BookCard({ book }) {
  const authors = useSelector((state) => state.authors.authors);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const bookAuthors = authors
    .filter((author) => book.authorIDs.includes(author.id))
    .map((author) => author.authorName);

  const date = new Date(book.publishedDate).getDate();
  const year = new Date(book.publishedDate).getFullYear();
  const month = new Date(book.publishedDate).getMonth();

  return (
    <div className="card">
      <div className="card__header bg-accent">
        <h2>{book.title}</h2>
      </div>
      <AuthorBadge authors={bookAuthors} />
      <div className="description">
        <h4>Description:</h4>
        <p>{book.description}</p>
      </div>
      <div className="card__footer bg-accent">
        <h4>
          ISBN: <span>{book.isbnNumber}</span>
        </h4>
        <h4>
          Published Date:{" "}
          <span>{`${date < 10 ? "0" : ""}${date}-${
            month < 10 ? "0" : ""
          }${month}-${year}`}</span>
        </h4>
      </div>
      <div className="cta">
        <button className="btn" onClick={() => navigate(`edit/${book.id}`)}>
          {<HiMiniPencil />}
        </button>
        <button className="btn" onClick={() => dispatch(deleteBook(book.id))}>
          {<HiMiniTrash />}
        </button>
      </div>
    </div>
  );
}

function AuthorBadge({ authors }) {
  return (
    <div className="author-badges">
      <h4>Author(s)</h4>
      {authors.map((author) => (
        <span key={author}>{author}</span>
      ))}
    </div>
  );
}

export default BookCard;
