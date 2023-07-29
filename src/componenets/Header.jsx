import { Link, useNavigate } from "react-router-dom";
import logo from "/images/logo.png";
const Header = () => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate('/')
  }

  return (
    <div className="max-w-screen-xl">
      <div className="flex justify-between md:px-0 px-2 items-center max-w-6xl mx-auto">
        <div>
          <img src={logo} className="w-40 md:w-80 cursor-pointer" onClick={redirect} alt="" />
        </div>
        <div>
          <Link
            to="/about"
            className="md:py-5 md:px-7 py-3 px-2 text-sm font-semibold bg-red-700 rounded-full text-white  hover:bg-white duration-500 hover:text-black "
          >
            About Traviez
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
