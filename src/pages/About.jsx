import { AwardIcon, Briefcase, BrushCleaning, Globe2 } from "lucide-react";
import PagesLayout from "../layouts/PagesLayout";

const About = () => {
  return (
    <PagesLayout>
      <div className=" flex flex-col md:flex md:flex-row p-8 gap-x-10 items-center justify-center">
        <div className="md:w-1/2 ">
          <h2 className="text-xl text-gray-700 md:text-3xl font-bold text-center">
            About KYA
          </h2>
          <p className="text-sm md:text-l md:max-w-[450px] md:mt-8 text-center">
            Kintampo Youth Association (KYA) is a grassroots youth organization
            committed to promoting peace, unity, and development in Kintampo.{" "}
            <br />
            <br />
            We bring together young people from all ethnic, religious, and
            social backgrounds to work collaboratively for the betterment of our
            community.
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col mt-5 md:gap-2 ">
          <h2 className="text-xl text-gray-700 md:text-3xl font-bold text-center mb-4">
            &#10003; Serving Kintampo
          </h2>
          <div className="grid grid-cols-2 gap-2 md:gap-4 justify-center items-center ">
            <div className="flex flex-col items-center justify-center text-center shadow p-2 md:p-4 text-sm md:text-l">
              <span>
                <BrushCleaning className="mb-2 text-orange-500" />
              </span>
              <span>Clean-Up Exercises</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center shadow p-2 md:p-4 text-sm md:text-l">
              <span>
                <AwardIcon className="mb-2 text-orange-500" />
              </span>
              <span>Leadership Training</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center shadow p-2 md:p-4 text-sm md:text-l">
              <span>
                <Globe2 className="mb-2 text-orange-500" />
              </span>
              <span>Peace Forums</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center shadow p-2 md:p-4 text-sm md:text-l">
              <span>
                <Briefcase className="mb-2 text-orange-500" />
              </span>
              <span>Business Support</span>
            </div>
          </div>
        </div>
      </div>
    </PagesLayout>
  );
};

export default About;
