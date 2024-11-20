import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-green-500 p-4 flex justify-between items-center">
      <Link to="/" className="text-white font-bold text-xl">Fruit Shop</Link>
      <div className="flex items-center space-x-4">
        <NavLink to="/" className="text-white hover:underline">
          Home
        </NavLink>
        <NavLink to="/shop" className="text-white hover:underline">
          Shop
        </NavLink>
        <NavLink to="/login" className="text-white hover:underline">
          Login
        </NavLink>
        <NavLink to="/register" className="text-white hover:underline">
          Register
        </NavLink>
        <NavLink to="/cart" className="relative text-white">
          <FaShoppingCart size={20} />
          {/* Add a badge for cart items */}
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
