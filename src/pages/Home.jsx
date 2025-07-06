import { Link } from "react-router-dom";
import PagesLayout from "../layouts/PagesLayout";
import { GiftIcon, HandshakeIcon, MessageCircle } from "lucide-react";

const Home = () => {
  return (
    <PagesLayout>
      <div>
        <div className=" w-full h-[70vh] md:h-[80vh]">
          <img
            src="/images/placeholder.jpg"
            alt="photo of kintampo"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-1/2 left-1/2 tranform -translate-x-1/2 -translate-y-1/2 text-white text-center max-w-[700px]">
          <h1 className=" text-xl md:text-4xl font-extrabold text-center mb-3">
            Welcome to the <br /> Kintampo Youth Association
          </h1>
          <p className=" text-base md:text-2xl text-center">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>

      <div className="mt-10 px-8 gap-y-3 flex flex-col md:flex md:flex-row md:justify-between md:gap-x-7">
        <div className="md:w-1/2">
          <img
            className="md:h-[350px] w-full object-cover"
            src="/images/placeholder.jpg"
            alt=""
          />
        </div>
        <div className="mt-5 md:w-1/2 md:flex md:flex-col md:justify-center md:items-center ">
          <h2 className="text-xl text-gray-700 md:text-3xl font-bold text-center mb-6 ">
            Lorem ipsum.
          </h2>
          <p className="text-sm md:text-l">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            quas veniam numquam adipisci itaque corporis ullam aut eius,
            aspernatur id libero mollitia aliquam suscipit, beatae ab enim error
            nisi nam. <br />
            <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Expedita quas sit nulla illo autem eligendi placeat perspiciatis
            rerum sequi quibusdam!
          </p>
        </div>
      </div>

      <div className="mt-4 md:flex md:flex-row md:gap-x-8 md:p-8">
        <div className="p-8 shadow bg-white">
          <h2 className="text-xl text-gray-700 md:text-3xl font-bold text-center mb-6 ">
            Who We Are
          </h2>
          <p className="text-sm md:text-l mb-4">
            Kintampo Youth Association (KYA) is a grassroots youth organization
            committed to promoting peace, unity, and development in Kintampo...
          </p>
          <div className="flex justify-center items-center">
            <Link to="/about">
              <button className="px-4 py-1 text-sm font-bold bg-amber-500 text-white hover:bg-white hover:border-1 hover:text-amber-500 transition ease-out duration:500 cursor-pointer">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="p-8 shadow bg-white">
          <h2 className="text-xl text-gray-700 md:text-3xl font-bold text-center mb-6">
            What We Do
          </h2>
          <p className="text-sm md:text-l mb-4">
            From community clean-ups to leadership training, peace forums to
            business incubation, KYA is at the heart of youth-led change in
            Kintampo.
          </p>
          <div className="flex justify-center items-center">
            <Link to="/programs">
              <button className="px-4 py-1 text-sm font-bold bg-amber-500 text-white hover:bg-white hover:border-1 hover:text-amber-500 transition ease-out duration:500 cursor-pointer">
                See Our Programs
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-6 mb-6">
        <div>
          <h2 className="text-xl text-gray-700 md:text-3xl font-bold text-center mb-2">
            Suppport Our Mission
          </h2>
        </div>
        <div className="flex flex-row justify-center items-center mt-10 gap-4">
          <div>
            <HandshakeIcon className="size-20 text-green-500" />
            <Link to="/join">
              <p className="hover:text-amber-500">Join KYA</p>
            </Link>
          </div>

          <div>
            <GiftIcon className="size-20 text-green-500" />
            {/* WHERE SHOULD THIS LEAD TO */}
            <Link>
              <p className="hover:text-amber-500">Donate</p>
            </Link>
          </div>
          <div>
            <MessageCircle className="size-20 text-green-500" />
            <Link to="/contact">
              <p className="hover:text-amber-500">Contact Us</p>
            </Link>
          </div>
        </div>
      </div>
    </PagesLayout>
  );
};

export default Home;
