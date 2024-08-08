import { Outlet, Link } from "react-router-dom";

const UserAuth = () => {
  return (
    <>
      <h1>UserAuth Page</h1>
      <Link to={"/user-auth/signup"}>SignUp</Link>
      <Link to={"/user-auth/login"}>Login</Link>
      <Outlet />
    </>
  );
};

export default UserAuth;
