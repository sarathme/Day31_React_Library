# Formik React Library

The formik npm package is used to easily validate forms in React applications.

The package provides us with a hook useFormik which returns a object with form
handling methods and input field value which need to bind to an input.

```js
// Formik package Hook
const formik = useFormik({ options });
```

The hook accepts an object of options.

1. **_initialValues_** property where we need to provide default values for the
   input fields in the form.
2. **_validate_** method which accepts the values of the input fields.
3. **_handleSubmit_** method which is called when the form is submitted.

## validate method

This method accepts the values object where the values are from the binded input
fields.

It should return an object either empty (means no errors) or with fields (means
there is error in the form inputs).

## handleSubmit method

This method is called when an empty object is returned from the validate method
when specified.

Inside this method we handle form submission like sending POST request to a API
or changing Context or Redux store values.

### Binding inputs with formik

We need to bind the formik package values to the input fields to handle various
events of the inputs.

```jsx
<input
  type="text"
  name="authorName"
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  value={formik.values.authorName}
/>
```

Here the input is a text field we bind the value of the input to the
initialValues of the formik object returned from the useFormik hook.

The formik object also has methods to handle input events like change and blur
where we bind them to the input fields.

The values object properties are obtained by the name attribute of the input
fields.
