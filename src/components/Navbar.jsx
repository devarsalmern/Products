import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-around">
        <Link
          to="/"
          className="text-lg text-white transition-colors duration-200 hover:text-gray-400"
        >
          Home
        </Link>
        <Link
          to="/category"
          className="text-lg text-white transition-colors duration-200 hover:text-gray-400"
        >
          Categories
        </Link>
        <Link
          to="/products"
          className="text-lg text-white transition-colors duration-200 hover:text-gray-400"
        >
          Products
        </Link>
        <Link
          to="/user-auth"
          className="text-lg text-white transition-colors duration-200 hover:text-gray-400"
        >
          UserAuth
        </Link>
        <Link
          to="/profile"
          className="text-lg text-white transition-colors duration-200 hover:text-gray-400"
        >
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
