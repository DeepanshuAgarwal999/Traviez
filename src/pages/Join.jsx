import Footer from "../componenets/Footer";
import Header from "../componenets/Header";
import j1 from "/aboutimages/j1.jpg";
import { Link } from "react-router-dom";
const Join = () => {
  return (
    <div>
      <div className="w-full">
        <div
          className="pt-5 bg-no-repeat  bg-cover  h-80 bg-center relative"
          style={{
            backgroundImage: `url(${j1})`,
            // backgroundColor:"black"
          }}
        >
          <Header />
          <h1 className="text-white text-center lg:text-7xl text-4xl absolute bottom-12 font-semibold  w-full">
            Become a Travier Today
          </h1>
        </div>
      </div>

      <div className="md:flex justify-between md:p-16 p-6 md:pt-24 pt-20  h-full w-full mb-20">
        <div className="md:w-[50%] w-full">
          <h1 className="md:text-8xl text-4xl text-red-700 pt-6  font-bold">
            Join Now
          </h1>
          <p className="font-[400] text-[14px] py-5 pb-16 text-gray-600 ">
            Please provide the necessary information, and we will contact you
            shortly.
          </p>
        </div>
        <div className="md:w-[50%] w-full ">
          <div>
            <label
              htmlFor=""
              className="after:content-['*'] after:ml-0.5 after:text-red-500 "
            >
              Name
            </label>
            <div className="flex justify-between w-full md:gap-10 gap-5 ">
              <div className="w-full">
                <input
                  className="placeholder:italic placeholder:text-slate-400 block bg-slate-50 w-full border border-slate-300  py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-gray-500  focus:active:border-black sm:text-sm"
                  placeholder=""
                  type="text"
                  required
                  name="firstname"
                />
                <label htmlFor="" className="text-xs text-gray-500">
                  First
                </label>
              </div>
              <div className="w-full">
                <input
                  className="placeholder:italic placeholder:text-slate-400  bg-slate-50 w-full border border-slate-300  py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-gray-500  focus:active:border-black sm:text-sm"
                  placeholder=""
                  type="text"
                  name="lastname"
                  required
                />
                <label htmlFor="" className="text-xs text-gray-500">
                  Last
                </label>
              </div>
            </div>
          </div>
          <div className="pt-5">
            <div className="md:w-[60%] w-full">
              <label
                htmlFor="email"
                className="after:content-['*'] after:ml-0.5 after:text-red-500 "
              >
                Email Id
              </label>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-slate-50 w-full border border-slate-300  py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-gray-500  focus:active:border-black sm:text-sm"
                placeholder=""
                type="text"
                name="email"
                required
              />
            </div>
          </div>
          <div className="pt-5">
            <div className="md:w-[60%] w-full">
              <label
                htmlFor=""
                className="after:content-['*'] after:ml-0.5 after:text-red-500 "
              >
                Phone Number
              </label>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-slate-50 w-full border border-slate-300  py-2 pl- pr-3 shadow-sm focus:outline-none focus:border-gray-500  focus:active:border-black sm:text-sm"
                placeholder=""
                type="number"
                name="phone"
              />
            </div>
          </div>
          <div className="pt-5">
            <div className="md:w-[60%] w-full">
              <label htmlFor="">Social Media URL</label>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-slate-50 w-full border border-slate-300  py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-gray-500  focus:active:border-black sm:text-sm"
                placeholder=""
                type="text"
                name="socialurl"
              />
            </div>
          </div>{" "}
          <div className="pt-5">
            <div className="w-full">
              <label htmlFor="">Message</label>
              <textarea
                name="box"
                id=""
                className=" block w-full border border-slate-300 bg-slate-50 py-2 pl-3 pr-3 shadow-sm focus:outline-none h-28 focus:border-gray-500  focus:active:border-black sm:text-sm"
              ></textarea>
            </div>
          </div>
          <div className="pt-10">
            <Link
              className="px-7 py-4 text-center hover:bg-orange-500 duration-500 bg-red-600 text-white"
              to="/join"
            >
              Submit
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Join;
