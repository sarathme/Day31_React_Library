import { Link } from "react-router-dom";

function EmptyData({ message, redirectLink, redirectText }) {
  return (
    <div className="empty-data">
      <h3>{message}</h3>
      <Link to={redirectLink} className="bg-accent">
        {redirectText}
      </Link>
    </div>
  );
}

export default EmptyData;
