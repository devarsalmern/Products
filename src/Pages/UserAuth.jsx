import { Outlet, Link } from "react-router-dom";

const UserAuth = () => {
  return (
    <>
      <h1>UserAuth Page</h1>
      <nav className="bg-gray-800 p-4">
        <Link
          to={"/"}
          className="text-lg text-white transition-colors duration-200 hover:text-gray-400"
        >
          Home
        </Link>
        <Link
          to={"/user-auth/signup"}
          className="text-lg text-white transition-colors duration-200 hover:text-gray-400"
        >
          SignUp
        </Link>
        <Link
          to={"/user-auth/login"}
          className="text-lg text-white transition-colors duration-200 hover:text-gray-400"
        >
          Login
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default UserAuth;
