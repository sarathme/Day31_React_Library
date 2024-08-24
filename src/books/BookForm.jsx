import { useDispatch, useSelector } from "react-redux";
import InputGroup from "../ui/InputGroup";
import SelectAuthors from "../ui/SelectAuthors";
import { useState } from "react";
import { useFormik } from "formik";
import generateUniqueId from "generate-unique-id";
import { useNavigate } from "react-router-dom";
import { addNewBook } from "./bookSlice";

const initialValues = {
  title: "",
  publishedDate: "",
  isbnNumber: "",
  description: "",
};

const validate = (values) => {
  const errors = {};

  if (!values.title.length) {
    errors.title = "Required";
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

  return errors;
};

function BookForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authors } = useSelector((state) => state.authors);

  const [value, setValue] = useState([]);
  const [authorSelected, setAuthorSelected] = useState(true);

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit(values) {
      const newBook = {
        ...values,
        authorIDs: value.map((valueObj) => valueObj.id),
        id: generateUniqueId(),
      };

      dispatch(addNewBook(newBook));
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
    setValue((value) => value.filter((valueObj) => valueObj.id !== obj.id));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (value.length === 0) {
      setAuthorSelected(false);
    }

    formik.handleSubmit();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <InputGroup
        label="Select Author(s)"
        labelFor="title"
        error={!authorSelected}
        errorMessage={"Please select atleast one author"}>
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
        />
      </InputGroup>
      <div className="btn-group">
        <input type="button" value="Reset" className="cancel" />
        <input type="submit" value="Add Book" className="save" />
      </div>
    </form>
  );
}

export default BookForm;
