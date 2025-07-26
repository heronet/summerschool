import { Users } from "lucide-react";

const SpeakersContent = () => (
  <div className="space-y-6">
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
        <Users className="w-6 h-6 mr-2 text-purple-600" />
        Distinguished Speakers & Instructors
      </h2>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Speaker List
        </h3>
        <div className="grid md:grid-cols-1 gap-4">
          {[
            {
              name: "Dr. Syed Ashraf Uddin",
              affiliation: "Faculty at American Public University System, USA",
              role: "Speaker & Hands-on Instructor",
            },
            {
              name: "Dr. Tonima Tasnim Ananna",
              affiliation:
                "Assistant Professor of Physics and Astronomy at Wayne State University, USA",
              role: "Speaker",
            },
            {
              name: "Dr. Syeda Lammim Ahad",
              affiliation:
                "WCA Postdoctoral Fellow, Waterloo Centre for Astrophysics, University of Waterloo, Canada",
              role: "Speaker & Hands-on Instructor",
            },
            {
              name: "Dr. Tabassum Shahriar Tanvir",
              affiliation:
                "Postdoc Research Associate, Iowa State University, USA",
              role: "Speaker",
            },
          ].map((speaker, index) => (
            <div
              key={index}
              className="flex items-start p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-200"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold mr-4 flex-shrink-0">
                {speaker.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{speaker.name}</h4>
                <p className="text-sm text-gray-600 mb-1">
                  {speaker.affiliation}
                </p>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {speaker.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Hands-on Instructor List
        </h3>
        <div className="grid md:grid-cols-1 gap-4">
          {[
            {
              name: "K M Shariat Ullah",
              affiliation:
                "Undergraduate student, Dept. of EEE, SUST, Bangladesh",
              role: "Hands-on Instructor",
            },
            {
              name: "Ahmad Al-Imtiaz",
              affiliation:
                "Research Student, ICTP-PWF Bangladesh Collaboration",
              role: "Hands-on Instructor",
            },
            {
              name: "Tanmoy Bhowmik",
              affiliation:
                "Undergraduate student, Dept. of Physics, SUST, Bangladesh",
              role: "Hands-on Instructor",
            },
          ].map((instructor, index) => (
            <div
              key={index}
              className="flex items-start p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border border-green-200"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold mr-4 flex-shrink-0">
                {instructor.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">
                  {instructor.name}
                </h4>
                <p className="text-sm text-gray-600 mb-1">
                  {instructor.affiliation}
                </p>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {instructor.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Organizing Committees
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              SOC (Scientific Organizing Committee)
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>
                • Tanmoy Bhowmik, Undergraduate student, Dept. of Physics, SUST
              </li>
              <li>
                • Ahmad Al-Imtiaz, Research Student, ICTP-PWF Bangladesh
                Collaboration
              </li>
              <li>
                • K M Shariat Ullah, Undergraduate student, Dept. of EEE, SUST
              </li>
              <li>
                • Akib Hasan Shihab, Undergraduate student, Dept. of Physics,
                SUST
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              LOC (Local Organizing Committee)
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>
                • Foysal Hasan Badhon (Undergraduate student, Dept. of Physics,
                SUST)
              </li>
              <li>
                • Shahidullah Kaisar Shamim (Undergraduate student, Dept. of
                Physics, SUST)
              </li>
              <li>
                • Mim Akter Maya (Undergraduate student, Dept. of Physics, SUST)
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              Program Coordinator
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>
                • Tanmoy Bhowmik, Undergraduate student, Dept. of Physics, SUST
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">IT Coordinator</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>
                • Siratul Islam, Undergraduate student, Dept. of Physics, SUST
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SpeakersContent;
