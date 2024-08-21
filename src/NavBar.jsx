function NavBar() {
  return (
    <header className="full-width grid-container bg-accent">
      <nav className="nav-bar">
        <h1>React Library</h1>
        <ul role="list" className="mobile-hidden-btn">
          <li>
            <a href="#">Add New Book</a>
          </li>
          <li>
            <a href="#">Add New Author</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
