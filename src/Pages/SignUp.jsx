import { Outlet } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const SignUpPage = () => {
  const defaultValues = {
    name: "",
    email: "",
    password: "",
    gender: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup.string().required("Please enter your email"),
    password: yup.string().required("Please enter you password"),
    gender: yup.string().required("Please enter you gender"),
  });
  const handleSubmit = (values) => {
    console.log("Values: ", values);
  };
  return (
    <>
      <div className="container">
        <Formik
          initialValues={defaultValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field type="text" name="name" placeholder="Enter your name" />
            <p>
              <ErrorMessage name="name" />
            </p>
            <Field type="text" name="email" placeholder="Enter your email" />
            <p>
              <ErrorMessage name="email" />
            </p>
            <Field
              type="text"
              name="password"
              placeholder="Enter your password"
            />
            <p>
              <ErrorMessage name="password" />
            </p>
            <Field component="select" name="gender">
              <option value="select" disabled>
                Select gender
              </option>
              <option value="male">male</option>
              <option value="female">female</option>
            </Field>
            <p>
              <ErrorMessage name="gender" />
            </p>
            <button
              className="ext-white mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="submit"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
      <Outlet />
    </>
  );
};

export default SignUpPage;
