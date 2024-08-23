import { HiMiniPencil, HiMiniTrash } from "react-icons/hi2";

function AuthorCard({ author }) {
  return (
    <div className="card">
      <div className="card__header bg-accent">
        <h2>{author.authorName}</h2>
        <h4>
          Birth Date: <span>{author.birthDate}</span>
        </h4>
      </div>
      <div className="bio">
        <p>{author.shortBio}</p>
      </div>
      <div className="cta">
        <button className="btn">{<HiMiniPencil />}</button>
        <button className="btn">{<HiMiniTrash />}</button>
      </div>
    </div>
  );
}

export default AuthorCard;
