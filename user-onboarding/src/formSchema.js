import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be 3 character"),
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(3, "Password must be 3 character"),
  terms:yup
    .boolean()
    .oneOf([true],"Must Accept Terms and Conditions"),
});