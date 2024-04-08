import * as Yup from "yup";

const signupSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required."),
  username: Yup.string().required("Username is required."),
  password: Yup.string()
    .required("Passwrod is required.")
    .min(6, "password should be atleast 6 char"),
  cpassword: Yup.string()
    .required("Confirm Passwrod is required.")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  gender: Yup.string().required("Gender is required."),
});
const loginSchema = Yup.object({
  username: Yup.string().required("Username is required."),
  password: Yup.string()
    .required("Passwrod is required.")
    .min(6, "password should be atleast 6 char"),
});

export { signupSchema, loginSchema };
