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
    email: yup
      .string()
      .email("Invalid email")
      .required("Please enter your email"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Please enter your password"),
    gender: yup.string().required("Please select your gender"),
  });

  const handleSubmit = (values) => {
    console.log("Values: ", values);
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-center text-2xl font-bold">Sign Up</h2>
          <Formik
            initialValues={defaultValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="mb-4">
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="mt-1 text-sm text-red-500">
                  <ErrorMessage name="name" />
                </p>
              </div>

              <div className="mb-4">
                <Field
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="mt-1 text-sm text-red-500">
                  <ErrorMessage name="email" />
                </p>
              </div>

              <div className="mb-4">
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="mt-1 text-sm text-red-500">
                  <ErrorMessage name="password" />
                </p>
              </div>

              <div className="mb-6">
                <Field
                  component="select"
                  name="gender"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    Select gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Field>
                <p className="mt-1 text-sm text-red-500">
                  <ErrorMessage name="gender" />
                </p>
              </div>

              <button
                className="w-full rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="submit"
              >
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default SignUpPage;
