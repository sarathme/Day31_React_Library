import { useFormik } from "formik";
import { addNewAuthor } from "./authorSlice";
import { useDispatch } from "react-redux";
import InputGroup from "../ui/InputGroup";
import generateUniqueId from "generate-unique-id";
import { useNavigate } from "react-router-dom";

const validate = (values) => {
  const errors = {};

  if (!values.authorName.length) {
    errors.authorName = "Required";
  }
  if (!values.birthDate.length) {
    errors.birthDate = "Required";
  }
  if (!values.shortBio.length) {
    errors.shortBio = "Required";
  }

  return errors;
};

function AuthorForm() {
  const initialValues = {
    authorName: "",
    birthDate: "",
    shortBio: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit(values) {
      const newAuthor = { ...values, id: generateUniqueId() };
      dispatch(addNewAuthor(newAuthor));
      navigate("/authors");
    },
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <InputGroup
        label="Author Name"
        labelFor="authorName"
        error={formik.touched.authorName && formik.errors.authorName}
        errorMessage={formik.errors.authorName}>
        <input
          type="text"
          id="authorName"
          placeholder="Author's name"
          value={formik.values.authorName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </InputGroup>

      <InputGroup
        label="Birth Date"
        labelFor="birthDate"
        error={formik.touched.birthDate && formik.errors.birthDate}
        errorMessage={formik.errors.birthDate}>
        <input
          type="date"
          id="birthDate"
          placeholder="Author's name"
          value={formik.values.birthDate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </InputGroup>
      <InputGroup
        label="Bio"
        labelFor="shortBio"
        error={formik.touched.shortBio && formik.errors.shortBio}
        errorMessage={formik.errors.shortBio}>
        <textarea
          id="shortBio"
          placeholder="Write a short bio of the author"
          onChange={formik.handleChange}>
          {formik.values.shortBio}
        </textarea>
      </InputGroup>
      <div className="btn-group">
        <input
          type="button"
          value="Reset"
          className="cancel"
          onClick={formik.handleReset}
        />
        <input type="submit" value="Add Author" className="save" />
      </div>
    </form>
  );
}

export default AuthorForm;
