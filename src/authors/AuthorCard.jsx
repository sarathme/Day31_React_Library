import { HiMiniPencil, HiMiniTrash } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { deleteAuthor } from "./authorSlice";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../ui/ConfirmModal";
import { useState } from "react";

import { deleteMultipleBooks, removeAuthor } from "../books/bookSlice";

function AuthorCard({ author }) {
  const [ModalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { books } = useSelector((state) => state.books);

  console.log(books);
  const booksOfAuthor = books.filter((book) =>
    book.authorIDs.includes(author.id)
  );

  const onlyThisAuthor = booksOfAuthor.filter(
    (book) => book.authorIDs.length === 1
  );
  const withOtherAuthors = booksOfAuthor.filter(
    (book) => book.authorIDs.length > 1
  );

  function handleDelete() {
    console.log(withOtherAuthors);
    if (onlyThisAuthor.length > 0) {
      const bookIds = onlyThisAuthor.map((book) => book.id);
      dispatch(deleteMultipleBooks(bookIds));
    }

    dispatch(removeAuthor(author.id));
    dispatch(deleteAuthor(author.id));
    navigate("/authors");
  }

  return (
    <>
      <div className="card">
        <div className="card__header bg-accent">
          <h2>{author.authorName}</h2>
          <h4>
            Birth Date: <span>{author.birthDate}</span>
          </h4>
        </div>
        <div className="bio">
          <p className="description">{author.shortBio}</p>
        </div>
        <div className="cta">
          <button className="btn" onClick={() => navigate(`edit/${author.id}`)}>
            {<HiMiniPencil />}
          </button>
          <button className="btn" onClick={() => setModalOpen(true)}>
            {<HiMiniTrash />}
          </button>
        </div>
      </div>
      {ModalOpen && (
        <ConfirmModal
          onClose={() => setModalOpen(false)}
          onConfirm={handleDelete}
          heading="Heads Up!!!">
          {onlyThisAuthor.length > 0 && (
            <div className="delete-confirm">
              <p>You will also delete the below listed books</p>
              <ul className="book-list">
                <>
                  {onlyThisAuthor.map((book) => (
                    <li key={book.id} className="book-card">
                      {book.title}
                    </li>
                  ))}
                </>
              </ul>
            </div>
          )}
          {withOtherAuthors.length > 0 && (
            <div className="delete-confirm">
              <p>You will delete the author from the below listed books</p>
              <ul className="book-list">
                <>
                  {withOtherAuthors.map((book) => (
                    <li key={book.id} className="book-card">
                      {book.title}
                    </li>
                  ))}
                </>
              </ul>
            </div>
          )}
          {withOtherAuthors.length === 0 && onlyThisAuthor.length == 0 && (
            <p>Please Confirm Your Deletion</p>
          )}
        </ConfirmModal>
      )}
    </>
  );
}

export default AuthorCard;
