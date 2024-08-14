import { Outlet } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const LoginPage = () => {
  const defaultValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    email: yup.string().required("Please enter your email"),
    password: yup.string().required("Please enter you password"),
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
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
      <Outlet />
    </>
  );
};

export default LoginPage;
