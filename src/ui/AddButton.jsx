import { useState } from "react";
import { HiMiniPlusCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

function AddButton() {
  const [isOptionOpen, setIsOptionsOpen] = useState(false);
  const options = [
    {
      text: "Add New Author",
      redirectLink: "/author/create",
    },
    {
      text: "Add New Books",
      redirectLink: "/book/create",
    },
  ];

  return (
    <div className="mobile-visible-btn">
      <button onClick={() => setIsOptionsOpen((option) => !option)}>
        <HiMiniPlusCircle />
      </button>
      {isOptionOpen && (
        <ul role="list">
          {options.map((option) => (
            <li key={option.text} onClick={() => setIsOptionsOpen(false)}>
              <Link to={option.redirectLink}>{option.text}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AddButton;
