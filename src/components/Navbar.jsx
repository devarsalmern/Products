import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"categories"}>Categories</Link>
      <Link to={"products"}>Products</Link>
      <Link to={"/user-auth/login"}>Login</Link>
      <Link to={"/user-auth/signup"}>Signup</Link>
    </>
  );
};
export default Navbar;
