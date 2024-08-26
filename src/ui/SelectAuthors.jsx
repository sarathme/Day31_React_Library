import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SelectAuthors({ options, setValues, values, removeValue }) {
  const [optionOpen, setOptionOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`select-authors ${optionOpen ? "focus-ring" : ""}`}
      tabIndex={0}
      onBlur={(e) => {
        e.stopPropagation();
        setOptionOpen(false);
      }}
      onClick={() => {
        setOptionOpen((state) => !state);
      }}>
      {values.length === 0 && <span>Select the author of the book</span>}
      {values.length !== 0 &&
        values.map((value) => (
          <Values
            key={value.id}
            value={value.authorName}
            onClick={() => removeValue(value)}
          />
        ))}

      <ul className={`options ${optionOpen ? "show" : ""}`} role="list">
        <li>
          {!options.length ? "No Author found " : "Author Not Listed?"}
          <span
            onClick={(e) => {
              e.stopPropagation();
              navigate("/author/create");
            }}>
            Add New
          </span>
        </li>
        {options.map((option) => (
          <li
            key={option.id}
            onClick={() =>
              setValues({ id: option.id, authorName: option.authorName })
            }>
            {option.authorName}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Values({ value, onClick }) {
  return (
    <div className="value-badge">
      {value}
      <span
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}>
        &times;
      </span>
    </div>
  );
}

export default SelectAuthors;
