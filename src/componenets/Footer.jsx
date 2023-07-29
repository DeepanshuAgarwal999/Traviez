import f1 from "/footerimages/f1.jpg";
import f2 from "/footerimages/f2.jpg";
import f3 from "/footerimages/f3.jpg";
import f4 from "/footerimages/f4.jpg";
import f5 from "/footerimages/f5.png";
import download from "/footerimages/download.png";
const Footer = () => {
  const images = [f2, f3, f4];
  return (
    <div className="min-w-full ">
      <div className="md:flex  justify-center  items-center w-full">
        <div>
          <img
            className="md:w-80 w-full h-72 mx-auto object-cover"
            src={f1}
            alt=""
          />
        </div>
        <div className="md:w-64  w-full  h-72 text-center p-10 mx-auto">
          <img src={download} className="w-24 mx-auto " alt="" />
          <p className="text-center text-xl font-bold p-6">
            Follow us on
            <br />
            <span className="text-2xl uppercase">instagaram</span>
          </p>
        </div>

        {images.map((item, i) => (
          <div key={i} className="md:w-80 ">
            <img
              className="w-full  h-72 mx-auto object-cover "
              src={item}
              alt="image failed to load"
            />
          </div>
        ))}
      </div>
      <div className="max-w-7xl py-8 md:mt-14  md:h-fit  ">
        <div className="md:flex justify-between mx-auto gap-20 items-center">
          <div className="w-40 mx-auto mb-7">
            <h1 className="font-bold md:text-2xl text-xl italic py-4 text-center ">
              Contact Us{" "}
            </h1>
            <p className="md:text-xl text-lg text-center">
              +91 8310951806 <br /> info@traviez.com
            </p>
          </div>
          <div className=" md:w-56 w-72 mx-auto mb-5">
            <img className=" md:w-52  mx-auto" src={f5} alt="" />
            <p className="text-center text-sm text-gray-600 ml-6 p-2">
              Copyright &copy; 2023 Traviez{" "}
            </p>
          </div>
          <div className="w-36 mx-auto ">
            <img src={download} className="md:w-16 w-12 mx-auto" alt="" />
            <p className="font-bold md:text-lg text-sm italic uppercase text-center py-4">
              follow us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
