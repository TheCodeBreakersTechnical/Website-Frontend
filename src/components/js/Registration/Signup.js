import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TestField";
import * as Yup from "yup";

export const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div>
          <h1 className="abs my-4 font-weight-bold .display-4">Register Here</h1>
          <Form>
            <TextField labels="First Name" name="firstName" type="text" />
            <TextField labels="Last Name" name="lastName" type="text" />
            <TextField labels="Email" name="email" type="email" />
            <TextField labels="Password" name="password" type="password" />
            <TextField
              labels="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <div className="buttonss">
              <button className="btns" type="submit">
                Register
              </button>
              <button className="btns" type="reset">
                Reset
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};
