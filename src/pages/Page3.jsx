import trimg from "/images/trimg.jpg";
import Typed from "react-typed";
const Page3 = () => {
  return (
    <div>
      <div
        className="w-full h-screen object-cover bg-no-repeat  bg-cover"
        style={{
          backgroundImage: `url(${trimg})`,
        }}
      >
        <div className="mx-auto w-full flex justify-center h-full items-center text-center lg:text-8xl nd:text-6xl text-4xl font-[500] text-red-600 uppercase ">
          <Typed
            className="drop-shadow-2xl  shadow-gray-950"
            strings={[
              "Traviez ",
              "Explore The World ",
              "with us.",
              `${"made with ❤️"}`,
            ]}
            typeSpeed={100}
            backSpeed={50}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Page3;
