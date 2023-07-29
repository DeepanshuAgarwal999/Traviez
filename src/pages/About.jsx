import Footer from "../componenets/Footer";
import Header from "../componenets/Header";
import aboutbanner from "/aboutimages/a1.jpg";
import a2 from "/aboutimages/a2.jpg";
const About = () => {
  return (
    <div className="w-full ">
      <div
        className="pt-5 bg-no-repeat  bg-cover h-72 bg-center relative"
        style={{
          backgroundImage: `url(${aboutbanner})`,
          mixBlendMode: "exclusion",
        }}
      >
        <div className="">
          <Header />
          <h1 className="text-white text-center lg:text-9xl md:text-7xl text-5xl absolute bottom-0  w-full">
            About Us
          </h1>
        </div>
      </div>
      <div className="md:flex justify-around h-3/6 md:pt-4">
        <div className="md:w-2/4 w-full">
          <h1 className="text-4xl font-bold text-red-600 py-6 text-center ">
            TRANSFORMING <span className="text-orange-500 ">TRAVEL</span>
          </h1>
        </div>
        <div className="w-full md:text-left text-center">
          <h1 className="text-6xl font-bold text-red-600 py-6">WHO WE ARE?</h1>
          <h2 className="w-[95%] text-sm leading-7 py-5 ">
            Traviez is a company founded by IIT graduates with a passion for
            travel. Our goal is to revolutionize the travel industry by offering
            a fresh perspective and unique travel experiences to a wider
            audience. Our team is dedicated to making vacations easier and more
            memorable for everyone. Whether it&apos; s exploring new
            destinations, trying new cuisine, or engaging in thrilling
            activities, Traviez is committed to providing an unforgettable
            travel experience. Join us on a journey of discovery and elevate
            your vacation.
          </h2>
        </div>
      </div>

      <div className="md:flex justify-between  mt-32">
        <div className="md:w-1/2 w-full">
          <img src={a2} alt="" />
        </div>
        <div className="w-1/2  font-medium">
          <h1
            className=" text-[3.4rem]  md:w-[60%]   mx-auto 
          text-red-600 "
          >
            Elevate Your Travel Experience with Our Innovative Solution
          </h1>
        </div>
      </div>
      <div className="md:flex justify-around md:h-3/6 mx-auto">
        <div className="md:w-2/4 w-full">
          <h1 className="text-[1.7rem] font-[500] text-red-600 p-16">
            STREAMLINING TRAVEL PLANNING
            <span className="text-orange-500 "> FOR SEAMLESS EXPERIENCE</span>
          </h1>
        </div>
        <div className="w-full md:text-left p-16 text-center">
          <h1 className="text-6xl font-bold text-red-600 py-6">WHAT WE DO?</h1>
          <h2 className="w-[95%] text-sm leading-7 py-5 ">
            At Traviez, we provide a comprehensive travel planning and
            management solution. Our innovative application offers a user-
            friendly interface for creating personalized “TripCases,” which include a complete travel plan. Users can share their TripCases withfriends, or make them available globally, allowing other travelers to search for and follow itineraries that suit their needs. By providing easy access to structured information, Traviez empowers
            travelers to plan and manage their trips with ease, saving them time and reducing the stress of travel planning.
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
