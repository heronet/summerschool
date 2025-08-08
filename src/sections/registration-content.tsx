import { Calendar, ExternalLink, Mail, Settings } from "lucide-react";

export const RegistrationContent = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
      <Settings className="w-6 h-6 mr-2 text-indigo-600" />
      Registration Information
    </h2>

    <div className="space-y-4">
      <div className="p-4 bg-red-50 rounded-lg border border-red-200">
        <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-red-600" />
          Application Timeline
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-3 bg-white rounded border">
            <h4 className="font-medium text-gray-800">Application Opens</h4>
            <p className="text-red-600 font-semibold">27 July 2025</p>
          </div>
          <div className="p-3 bg-white rounded border">
            <h4 className="font-medium text-gray-800">Application Closes</h4>
            <p className="text-red-600 font-semibold">12 August 2025</p>
          </div>
        </div>
        <div className="mt-3 p-3 bg-yellow-100 rounded border">
          <p className="text-sm text-gray-700">
            <strong>Results:</strong> Successful applicants will be notified via
            email by <strong>13 August 2025</strong>
          </p>
          <p className="text-sm text-gray-700">
            <strong>Registration Fee: BDT 1000</strong> (includes snacks and
            lunch; applicable after primary selection)
          </p>
        </div>
      </div>

      <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <h3 className="font-semibold text-gray-800 mb-2">Who Should Apply</h3>
        <ul className="space-y-1 text-gray-700">
          <li>• Undergraduate students (1st to 4th year) from Bangladesh</li>
          <li>• Early-career researchers in Bangladesh</li>
          <li>
            • Students in Physics, Astronomy, Engineering, and related fields
          </li>
          <li>• Motivated individuals pursuing astronomy research careers</li>
        </ul>
      </div>

      <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
        <h3 className="font-semibold text-gray-800 mb-2">
          Prerequisites & Requirements
        </h3>
        <ul className="space-y-1 text-gray-700">
          <li>• Basic familiarity with programming (preferably Python)</li>
          <li>• Must bring own laptop with working internet browser</li>
          <li>• Ready for coding-based hands-on sessions</li>
          <li>
            • Programming experience, motivation, and how they may benefit
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-center p-6 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg text-white">
        <a
          className="flex items-center space-x-2 text-lg font-semibold w-full h-full text-center justify-center"
          href="https://forms.gle/FPaTnfjbHPWqxwvv5"
          target="_blank"
        >
          <ExternalLink className="w-5 h-5" />
          <span>Apply Now</span>
        </a>
      </div>

      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-gray-800 mb-2">Selection Process</h3>
        <p className="text-gray-700 mb-3">
          Selection will be based on academic merit, motivation, and how
          participants may benefit from the summer school.
        </p>
        <div className="p-3 bg-white rounded border">
          <p className="text-sm text-gray-600">
            <strong>Important:</strong> Submitting this form does NOT guarantee
            a spot in the program. There will be a selection process by the SOC
            (Scientific Organizing Committee).
          </p>
        </div>
      </div>

      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
        <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
          <Mail className="w-5 h-5 mr-2 text-green-600" />
          Contact Information
        </h3>
        <p className="text-gray-700">
          <strong>Email:</strong> researchandproject.camsust@gmail.com
        </p>
      </div>

      <div className="text-center text-sm text-gray-600 mt-4">
        <p>
          This is an application form for CAM-SUST Summer School on Astrophysics
          2025
        </p>
      </div>
    </div>
  </div>
);

export default RegistrationContent;
