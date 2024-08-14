import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-col">
      <Link to={"/"}>Home</Link>
      <Link to={"/category"}>Categories</Link>
      <Link to={"/products"}>Products</Link>
      <Link to={"/user-auth"}>UserAuth</Link>
      <Link to={"/profile"}>Profile</Link>
    </div>
  );
};
export default Navbar;
