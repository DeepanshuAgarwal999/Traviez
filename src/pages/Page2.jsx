import img2 from "/images/img1.png";
const Page2 = () => {
  return (
    <div className="max-w-7xl bg-pink-50">
      <div className="md:flex justify-between mx-auto  ">
        <div className="max-w-2xl pt-28 py-20 px-10 md:px-36 ">
          <h1 className="text-red-800 mb-6 text-xl  font-semibold">
            EMPOWERING TRAVEL INFLUENCERS{" "}
            <span className="text-orange-500 text-justify">
             TO PROVIDE UNIQUE TRAVEL EXPERIENCES
            </span>
          </h1>
          <h2 className="text-4xl font-semibold mb-6 text-red-600">
            Discover the World of Travier!{" "}
          </h2>
          <h3 className="text-sm leading-7 font text-justify ">
            Travier is a membership association for travel influencers, content
            creators, and bloggers. It aims to provide them with an opportunity
            to create personalized tripcases for their audience and promote
            Traviez’s social travel management platform. The program not only
            helps the influencers to enhance their audience engagement but also
            benefits them by expanding their reach and user base.
          </h3>
        </div>
        <div className="max-w-3xl lg:block hidden  ">
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Page2;
