import * as Yup from "yup"
const AddBookValidation = Yup.object({
  title: Yup.string().required("Title is required"),
  author: Yup.string().required("Author is required"),
  published_year: Yup.number().typeError("Publish Year must be a number").integer("Publish Year must be an integer").required("Publish Year is required"),
  isbn: Yup.string().required("ISBN is required"),
})

export default AddBookValidation