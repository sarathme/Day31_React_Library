import { useDispatch, useSelector } from "react-redux";
import InputGroup from "../ui/InputGroup";
import SelectAuthors from "../ui/SelectAuthors";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import generateUniqueId from "generate-unique-id";
import { useNavigate, useParams } from "react-router-dom";
import { addNewBook, updateBook } from "./bookSlice";

const initialValues = {
  title: "",
  publishedDate: "",
  isbnNumber: "",
  description: "",
};

const validateForm = (values, authors) => {
  const isbnRegex =
    /^(?:(?:\d{1,5}-)?(?:\d{1,7}-)?(?:\d{1,6}-)?(?:\d{1,3}-)?(?:\d{9}X|\d{10})|(?:\d{3}-)?(?:\d{1,5}-)?(?:\d{1,7}-)?(?:\d{1,6}-)?(?:\d{1,3}-)?\d{13})$/;
  const errors = {};

  if (!values.title.length) {
    errors.title = "Required";
  }
  if (!authors.length) {
    errors.authors = "Please select atleast one author";
  }
  if (!values.publishedDate.length) {
    errors.publishedDate = "Required";
  }
  if (!values.description.length) {
    errors.description = "Required";
  }
  if (!values.isbnNumber.length) {
    errors.isbnNumber = "Required";
  }
  if (!isbnRegex.test(values.isbnNumber)) {
    errors.isbnNumber = "Please provide a valid ISBN Number";
  }

  return errors;
};

function BookForm({ isEdit }) {
  const [isEditing, setIsEditing] = useState(isEdit);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authors } = useSelector((state) => state.authors);
  const { books } = useSelector((state) => state.books);
  const { bookId } = useParams();
  const bookData = isEditing
    ? books.filter((book) => book.id === bookId)
    : [initialValues];

  let bookAuthors;
  if (isEditing) {
    bookAuthors = authors.filter((author) =>
      bookData[0]?.authorIDs.includes(author.id)
    );
  }

  const [value, setValue] = useState(function () {
    if (isEdit) {
      return bookAuthors.map((bookAuthor) => {
        return { id: bookAuthor.id, authorName: bookAuthor.authorName };
      });
    } else {
      return [];
    }
  });

  useEffect(() => {
    setIsEditing(isEdit);
  }, [isEdit]);

  const formik = useFormik({
    initialValues: bookData[0],
    validate: (values) => {
      return validateForm(values, value);
    },
    onSubmit(values) {
      if (isEditing) {
        const updatedBook = {
          ...values,
          authorIDs: value.map((value) => value.id),
        };

        dispatch(updateBook(updatedBook));
      } else {
        const newBook = {
          ...values,
          authorIDs: value.map((value) => value.id),
          id: generateUniqueId(),
        };
        dispatch(addNewBook(newBook));
      }

      navigate("/books");
    },
  });

  function addValues(obj) {
    setValue((value) => {
      const res = value.filter((valueObj) => valueObj.id === obj.id);

      if (res.length === 0) {
        return [...value, obj];
      } else {
        return value;
      }
    });
  }

  function removeValue(obj) {
    setValue((value) => {
      return value.filter((valueObj) => valueObj.id !== obj.id);
    });
  }

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <InputGroup
        label="Select Author(s)"
        labelFor="title"
        error={formik.errors.authors}
        errorMessage={formik.errors.authors}>
        <SelectAuthors
          options={authors}
          values={value}
          setValues={addValues}
          removeValue={removeValue}
        />
      </InputGroup>
      <InputGroup
        label="Book Title"
        labelFor="title"
        error={formik.touched.title && formik.errors.title}
        errorMessage={formik.errors.title}>
        <input
          id="title"
          placeholder="Book Title"
          type="text"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </InputGroup>
      <InputGroup
        label="Published Date"
        labelFor="publishedDate"
        error={formik.touched.publishedDate && formik.errors.publishedDate}
        errorMessage={formik.errors.publishedDate}>
        <input
          id="publishedDate"
          type="date"
          value={formik.values.publishedDate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </InputGroup>
      <InputGroup
        label="ISBN"
        labelFor="isbnNumber"
        error={formik.touched.isbnNumber && formik.errors.isbnNumber}
        errorMessage={formik.errors.isbnNumber}>
        <input
          id="isbnNumber"
          type="text"
          value={formik.values.isbnNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Input ISBN"
        />
      </InputGroup>
      <InputGroup
        label="Short Description"
        labelFor="description"
        error={formik.touched.description && formik.errors.description}
        errorMessage={formik.errors.description}>
        <textarea
          id="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Write a short description of the book (150 characters)"
          maxLength="150"
        />
      </InputGroup>
      <div className="btn-group">
        <input
          type="button"
          value="Cancel"
          className="cancel"
          onClick={() => navigate("/books")}
        />
        <input
          type="submit"
          value={isEditing ? "Update Book" : "Add Book"}
          className="save"
        />
      </div>
    </form>
  );
}

export default BookForm;
