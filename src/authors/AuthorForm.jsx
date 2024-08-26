import { useFormik } from "formik";
import { addNewAuthor, updateAuthor } from "./authorSlice";
import { useDispatch, useSelector } from "react-redux";
import InputGroup from "../ui/InputGroup";
import generateUniqueId from "generate-unique-id";
import { useNavigate, useParams } from "react-router-dom";

const initialValues = {
  authorName: "",
  birthDate: "",
  shortBio: "",
};
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

function AuthorForm({ isEdit }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { authors } = useSelector((state) => state.authors);
  const { authorId } = useParams();

  const authorData = isEdit
    ? authors.filter((author) => author.id === authorId)
    : [initialValues];

  const formik = useFormik({
    initialValues: authorData[0],
    validate,
    onSubmit(values) {
      if (isEdit) {
        dispatch(updateAuthor(values));
      } else {
        const newAuthor = { ...values, id: generateUniqueId() };

        dispatch(addNewAuthor(newAuthor));
      }
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
          placeholder="Write a short bio of the author (150 characters)"
          onChange={formik.handleChange}
          defaultValue={formik.values.shortBio}
          maxLength="150"
        />
      </InputGroup>
      <div className="btn-group">
        <input
          type="button"
          value="Cancel"
          className="cancel"
          onClick={() => navigate("/authors")}
        />
        <input
          type="submit"
          value={isEdit ? "Update Author" : "Add Author"}
          className="save"
        />
      </div>
    </form>
  );
}

export default AuthorForm;
