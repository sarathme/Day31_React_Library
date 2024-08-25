import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <aside className="sidebar">
      <ul role="list">
        <li>
          <NavLink to="books">Books</NavLink>
        </li>
        <li>
          <NavLink to="authors">Authors</NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;
