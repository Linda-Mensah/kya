import { Link } from "react-router-dom";
import PagesLayout from "../layouts/PagesLayout";
import {
  GiftIcon,
  HammerIcon,
  HandshakeIcon,
  MessageCircle,
  UsersIcon,
} from "lucide-react";

const Home = () => {
  return (
    <PagesLayout>
      <div
        className="relative w-full h-[70vh] md:h-[100vh] bg-cover bg-center "
        style={{ backgroundImage: "url('/images/placeholder.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 slide-down">
          <h1 className="text-4xl md:text-6xl font-bold ">WELCOME TO KYA</h1>
          <p className="mt-4 text-lg md:text-2xl max-w-xl">
            Unity. Growth. Community.
          </p>
        </div>
      </div>
      {/* <div className="relative w-full h-[80vh] md:h-[100vh]">
        <img
          src="/images/placeholder.webp"
          alt="photo of kintampo"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center max-w-[700px] animate-slide-down">
          <h1 className="text-xl md:text-5xl font-extrabold text-center mb-3 whitespace-nowrap">
            Kintampo Youth Association
          </h1>
          <p className="text-base md:text-2xl text-center">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div> */}

      <div className="mt-10 px-8 gap-y-3 flex flex-col md:flex md:flex-row md:justify-between md:gap-x-7 ">
        <div className="md:w-1/2">
          <img
            className="md:h-[350px] w-full object-cover"
            src="/images/placeholder.webp"
            alt=""
          />
        </div>
        <div className="md:w-1/2 md:flex md:flex-col md:justify-center md:items-center border-1 border-gray-300 md:px-8 my-6 px-2 p-10 text-center">
          <h2 className="text-x md:text-3xl font-bold text-center m-4 bg-gradient-to-r from-orange-700 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Together, We Rise
          </h2>
          <p className="text-center mt-3">
            Kintampo Youth Association (KYA) is a collective of passionate
            changemakers, bridging gaps between generations and communities.{" "}
            <br />
            We come together to promote unity, leadership, and opportunity in
            every corner of Kintampo
          </p>
        </div>
      </div>

      <div className="mt-4 md:flex md:flex-row md:gap-x-8 md:p-8">
        <div className=" bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition flex flex-col justify-center items-center">
          <UsersIcon className="bg-orange-500 text-white size-10 rounded-full mb-2 p-2" />
          <h2 className="text-x md:text-3xl font-bold text-center m-4 bg-gradient-to-r from-orange-700 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Who We Are
          </h2>
          <p className="text-center mt-3">
            KYA is a grassroots youth organization committed to promoting peace,
            unity, and development in Kintampo...
          </p>
          <div className="flex justify-center items-center">
            <Link to="/about">
              <button
                className="px-4 py-3 mt-4 text-sm font-bold bg-gray-100 text-gray-900 rounded-full hover:bg-white hover:border-1 hover:text-amber-500 transition ease-out duration:500 cursor-pointer"
                aria-label="Read more about us"
              >
                More...
              </button>
            </Link>
          </div>
        </div>
        <div className=" bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition flex flex-col justify-center items-center">
          <HammerIcon className="bg-orange-500 text-white size-10 rounded-full mb-2 p-2" />
          <h2 className="text-x md:text-3xl font-bold text-center m-4 bg-gradient-to-r from-orange-700 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            What We Do
          </h2>
          <p className="text-center mt-3">
            From community clean-ups to leadership training, peace forums to
            business incubation, KYA is at the heart of youth-led change in
            Kintampo.
          </p>
          <div className="flex justify-center items-center">
            <Link to="/programs">
              <button
                className="px-4 py-3 mt-4 text-sm font-bold bg-gray-100 text-gray-900 rounded-full hover:bg-white hover:border-1 hover:text-amber-500 transition ease-out duration:500 cursor-pointer"
                aria-label="Our programs"
              >
                More...
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-6 mb-6">
        <div>
          <h2 className="text-x md:text-3xl font-bold text-center m-4 bg-gradient-to-r from-orange-700 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Suppport Our Mission
          </h2>
        </div>
        <div className="flex flex-row justify-center items-center mt-10 gap-4">
          <Link to="/join">
            <div
              className="bg-orange-400 text-white  hover:text-orange-500 hover:bg-white hover:border hover:border-orange-500 p-2 md:py-6     md:px-8 flex flex-col items-center justify-center transition ease-in-out duration-300 cursor-pointer"
              aria-label="Join KYA"
            >
              <HandshakeIcon className="md:size-20 hover:text-orange-500" />

              <p className="cursor-pointer transition ease-out duration:300 text-sm md:text-l font-semibold">
                Join KYA
              </p>
            </div>
          </Link>
          {/* WHERE SHOULD THIS LEAD TO */}
          <Link>
            <div
              className="bg-orange-400 text-white  hover:text-orange-500 hover:bg-white hover:border hover:border-orange-500 p-2 md:py-6     md:px-8 flex flex-col items-center justify-center transition ease-in-out duration-300 cursor-pointer"
              aria-label="Donate"
            >
              <GiftIcon className="md:size-20 hover:text-orange-500" />

              <p className="cursor-pointer transition ease-out duration:300 text-sm md:text-l font-semibold">
                Donate
              </p>
            </div>
          </Link>
          <Link to="/contact">
            <div
              className="bg-orange-400 text-white  hover:text-orange-500 hover:bg-white hover:border hover:border-orange-500 p-2 md:py-6     md:px-8 flex flex-col items-center justify-center transition ease-in-out duration-300 cursor-pointer"
              aria-label="Contact us"
            >
              <MessageCircle className="md:size-20 hover:text-orange-500" />

              <p className="cursor-pointer transition ease-out duration:300 text-sm md:text-l font-semibold">
                Contact Us
              </p>
            </div>
          </Link>
        </div>
      </div>
    </PagesLayout>
  );
};

export default Home;
