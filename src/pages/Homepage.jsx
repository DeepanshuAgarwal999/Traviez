import banner from "/images/banner.png";
import homebanner from "/images/homebanner.jpg";
import { Link } from "react-router-dom";
import Page2 from "./page2";
import Header from "../componenets/Header";
import Footer from "../componenets/Footer";
import Page4 from "./Page4";
import Page3 from "./Page3";
const Homepage = () => {
  return (
    <div>
      <div
        className="pt-5 bg-no-repeat bg-cover  bg-center "
        style={{
          backgroundImage: `url(${homebanner})`,
          
        }}
      >
        <div>
          <Header />

          <div className=" mx-auto max-w-6xl mt-16  text-center text-white">
            <div>
              <h1 className="md:text-2xl text-xl font-semibold ">
                Experience Travel like never before
              </h1>
              <h2 className="md:text-4xl text-2xl  font-bold">
                Become a Travier with Traviez!
              </h2>
              <h3 className="md:text-xl text-sm ">
                Sign up now and start your journey with Traviez today!
              </h3>
              <div className="mt-8 p-3">
                <Link className="px-8 py-5 hover:bg-orange-500 duration-500 bg-red-700 text-white"
                to='/join'>
                  Join Now
                </Link>
              </div>
              <p className="mt-6 text-lg md:text-center text-left pl-5 md:pl-0">
                Limited spots left.{" "}
                <span className="text-orange-300 ">Hurry up, Join now!</span>
              </p>
            </div>
            <div className="mt-3">
              <img src={banner} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
      <Page2 />
      <Page3/>
      <Page4 />
      <Footer />
    </div>
  );
};

export default Homepage;
