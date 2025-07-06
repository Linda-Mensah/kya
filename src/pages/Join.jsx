import { Handshake, HelpingHand, UserPlus } from "lucide-react";
import PagesLayout from "../layouts/PagesLayout";

const Join = () => {
  return (
    <PagesLayout>
      <div>
        <h2 className="text-xl text-gray-700 md:text-3xl font-bold text-center mb-4 md:mt-6">
          &#10003; GET INVOLVED
        </h2>
        <div className="flex flex-col md:flex md:flex-row  gap-x-5 px-8 gap-y-5  py-2 md:py-4 justify-center items-center ">
          <div className="px-8 flex flex-col justify-center items-center shadow p-6">
            <span>
              <UserPlus className="mb-2 text-orange-500" />
            </span>
            <span className="font-semibold">Become a Member</span>
            <p className="md:text-l text-sm mt-3 text-center">
              Whether you’re a student, artisan, trader, or professional—you
              have a place in KYA. Your background doesn’t matter; your
              willingness to build a better Kintampo does.
            </p>
          </div>
          <div className="px-8 flex flex-col justify-center items-center shadow p-6">
            <span>
              <HelpingHand className="mb-2 text-orange-500" />
            </span>
            <span className="font-semibold">Volunteer with Us</span>
            <p className="mt-3 md:text-l text-sm text-center">
              We welcome volunteers who want to make a difference in education,
              peacebuilding, health, or environmental sustainability.
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center md:max-w-[450px] ml-7 mr-7 md:mr-auto md:ml-auto text-center shadow p-6 mt-4 md:mt-10">
            <span>
              <Handshake className="mb-2 text-orange-500" />
            </span>
            <span className="font-semibold">Partner with Us</span>
            <p className="mt-3 md:text-l text-sm text-center">
              We collaborate with NGOs, traditional authorities, religious
              leaders, government institutions, and businesses that share our
              mission.
            </p>
          </div>
        </div>
      </div>
    </PagesLayout>
  );
};

export default Join;
