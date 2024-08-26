import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="full-width grid-container bg-accent header">
      <nav className="nav-bar">
        <h1>React Library</h1>
        <ul role="list" className="mobile-hidden-btn">
          <li>
            <Link to="/book/create">Add New Book</Link>
          </li>
          <li>
            <Link to="/author/create">Add New Author</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
