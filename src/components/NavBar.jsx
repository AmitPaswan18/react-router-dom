import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-center gap-10 h-20 bg-gray-900 text-white items-center font-bold">
        <Link to="/about">About Us</Link>
        <Link to="/contact"> Contact</Link>
        <Link to="/messages"> Messages</Link>
      </div>
    </>
  );
};

export default NavBar;
