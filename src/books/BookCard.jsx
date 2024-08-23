import { HiMiniPencil, HiMiniTrash } from "react-icons/hi2";
import { useSelector } from "react-redux";

function BookCard({ book }) {
  const authors = useSelector((state) => state.authors.authors);

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
        <h4>
          by {bookAuthors.length > 0 ? bookAuthors.join(", ") : bookAuthors}
        </h4>
      </div>
      <p>{book.description}</p>
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
        <button className="btn">{<HiMiniPencil />}</button>
        <button className="btn">{<HiMiniTrash />}</button>
      </div>
    </div>
  );
}

export default BookCard;
