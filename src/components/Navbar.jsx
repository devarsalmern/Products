import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"categories"}>Categories</Link>
      <Link to={"products"}>Products</Link>
    </>
  );
};
export default Navbar;
