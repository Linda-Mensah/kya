import { HeartHandshake, Home, ToolCaseIcon, Users } from "lucide-react";
import PagesLayout from "../layouts/PagesLayout";

const Programs = () => {
  return (
    <PagesLayout>
      <h2 className="text-xl text-gray-700 md:text-3xl font-bold text-center mb-4 md:mt-6">
        Our Programs
      </h2>
      <div className="flex flex-col md:grid md:grid-cols-2 justify-center items-center px-6 py-4 md:gap-x-6 gap-y-6">
        <div className="shadow p-6">
          <div className="flex flex-col items-center justify-center">
            <span>
              <Users className="mb-2 text-orange-500" />
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

        <div className="shadow p-6">
          <div className="flex flex-col items-center justify-center">
            <span>
              <ToolCaseIcon className="mb-2 text-orange-500" />
            </span>
            <span className="font-semibold">Youth Empowerment Workships</span>
          </div>
          <p className="text-center mt-3">
            Trainings in entrepreneurship, ICT, leadership, and vocational
            skills.
          </p>
        </div>

        <div className="shadow p-6">
          <div className="flex flex-col items-center justify-center">
            <span>
              <HeartHandshake className="mb-2 text-orange-500" />
            </span>
            <span className="font-semibold">Peace Advocacy Campaigns</span>
          </div>
          <p className="text-center mt-3">
            Sensitization programs in schools, communities, and on radio to
            promote nonviolence and tolerance.
          </p>
        </div>

        <div className="shadow p-6">
          <div className="flex flex-col items-center justify-center">
            <span>
              <Home className="mb-2 text-orange-500" />
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
