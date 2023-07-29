import { Link } from "react-router-dom";
import n4 from "/images/n4.png";
import arrow from "/images/arrow.png";
const Page4 = () => {
  return (
    <div className="w-full bg-pink-50 ">
      <div className="md:flex justify-between gap-56  w-full  ">
        <div className="w-1/2 bg-orange-400 ">
          <img
            src={n4}
            alt=""
            className="scale-125 w-full h-full object-cover"
          />
        </div>
        <div className="max-w-2xl py-16 ">
          <h1 className="lg:text-7xl  md:text-6xl text-4xl mx-auto text-red-700 font-extrabold">
            WE ARE LAUNCHING SOON....
          </h1>
          <p className="text-lg py-5 px-10">
            LIMITED SPOTS. HURRY UP, JOIN NOW
          </p>
          <h1 className="text-center p-10 text-orange-500 ml-24">
            <Link className="border-b-2 border-orange-500"to='/join'>Join Now</Link>
            <img src={arrow} className="w-20  inline-block hover:scale-125 duration-500" alt="" />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page4;
