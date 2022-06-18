import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextField = ({ labels, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mbs-2">
      <labels htmlFor={field.name}>{labels}</labels>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};
