import { HeartHandshake, Home, ToolCaseIcon, Users } from "lucide-react";
import PagesLayout from "../layouts/PagesLayout";

const Programs = () => {
  return (
    <PagesLayout>
      <h2 className="text-xl md:text-3xl font-bold text-center mt-6 mb-2 bg-gradient-to-r from-orange-700 via-gray-800 to-gray-900 bg-clip-text text-transparent">
        Our Programs
      </h2>
      <div className="flex flex-col md:grid md:grid-cols-2 justify-center items-center px-6 py-4 md:gap-x-6 gap-y-6 ">
        <div className="shadow hover:shadow-lg p-6 transition-shadow duration-300 ease-in-out">
          <div className="flex flex-col items-center justify-center">
            <span>
              <Users className="bg-orange-500 text-white size-10 rounded-full mb-2 p-2" />
            </span>
            <span className="font-semibold">
              Unity Forums & Cultural Festivals
            </span>
          </div>
          <p className="text-center mt-3">
            Annual events and dialogues that promote understanding among ethnic
            groups in the municipality.
          </p>
        </div>

        <div className="shadow hover:shadow-lg p-6 transition-shadow duration-300 ease-in-out">
          <div className="flex flex-col items-center justify-center ">
            <span>
              <ToolCaseIcon className="bg-orange-500 text-white size-10 rounded-full mb-2 p-2" />
            </span>
            <span className="font-semibold">Youth Empowerment Workships</span>
          </div>
          <p className="text-center mt-3">
            Trainings in entrepreneurship, ICT, leadership, and vocational
            skills.
          </p>
        </div>

        <div className="shadow hover:shadow-lg p-6 transition-shadow duration-300 ease-in-out">
          <div className="flex flex-col items-center justify-center">
            <span>
              <HeartHandshake className="bg-orange-500 text-white size-10 rounded-full mb-2 p-2" />
            </span>
            <span className="font-semibold">Peace Advocacy Campaigns</span>
          </div>
          <p className="text-center mt-3">
            Sensitization programs in schools, communities, and on radio to
            promote nonviolence and tolerance.
          </p>
        </div>

        <div className="shadow hover:shadow-lg p-6 transition-shadow duration-300 ease-in-out">
          <div className="flex flex-col items-center justify-center">
            <span>
              <Home className="bg-orange-500 text-white size-10 rounded-full mb-2 p-2" />
            </span>
            <span className="font-semibold text-center">
              Community Development Projects
            </span>
          </div>
          <p className="text-center mt-3">
            Volunteering in sanitation, school improvement, and tree planting
            initiatives.
          </p>
        </div>
      </div>
    </PagesLayout>
  );
};

export default Programs;
