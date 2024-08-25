import { HiMiniPencil, HiMiniTrash } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { deleteAuthor } from "./authorSlice";
import { useNavigate } from "react-router-dom";

function AuthorCard({ author }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
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
        <button
          className="btn"
          onClick={() => dispatch(deleteAuthor(author.id))}>
          {<HiMiniTrash />}
        </button>
      </div>
    </div>
  );
}

export default AuthorCard;
