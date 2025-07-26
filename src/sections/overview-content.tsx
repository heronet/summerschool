import React from "react";
import {
  Calendar,
  Users,
  MapPin,
  Clock,
  Star,
  Telescope,
  BookOpen,
  Laptop,
  GraduationCap,
  Target,
} from "lucide-react";

export default function OverviewContent() {
  const topics = [
    "Star formation processes",
    "Galaxy distribution in the Universe",
    "Cosmic Web and largest structures in the Universe",
    "Galaxy clusters and galaxy evolution",
    "Stellar mass functions and density profiles",
    "Black Hole Collisions",
    "Space-time curvature near black holes",
    "Type Ia Supernovae (SNe Ia) and their use in cosmology",
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Welcome to CAM-SUST Summer School on Astrophysics 2025
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          The CAM-SUST Summer School on Astrophysics 2025 is a two-week-long
          program for undergraduate students and early-career researchers from
          Bangladesh, organized by the Copernicus Astronomical Memorial of SUST
          (CAM-SUST). The program is a hybrid summer school scheduled for
          September 3-14, 2025, designed for motivated undergraduate students in
          Physics, Astronomy, Engineering, and related fields from across
          Bangladesh.
        </p>
      </div>

      {/* Poster */}
      <div>
        <img src="/images/poster.webp" alt="poster" className="rounded-2xl" />
      </div>

      {/* Key Information Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
          <div className="flex items-center mb-3">
            <Calendar className="w-6 h-6 text-purple-600 mr-3" />
            <h3 className="font-semibold text-gray-900">Duration</h3>
          </div>
          <p className="text-gray-700">September 3-14, 2025</p>
          <p className="text-sm text-gray-600 mt-1">
            2 weeks intensive program
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
          <div className="flex items-center mb-3">
            <Users className="w-6 h-6 text-blue-600 mr-3" />
            <h3 className="font-semibold text-gray-900">Target Audience</h3>
          </div>
          <p className="text-gray-700">Undergraduate Students</p>
          <p className="text-sm text-gray-600 mt-1">
            & Early-career researchers
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
          <div className="flex items-center mb-3">
            <MapPin className="w-6 h-6 text-green-600 mr-3" />
            <h3 className="font-semibold text-gray-900">Format</h3>
          </div>
          <p className="text-gray-700">Hybrid Program</p>
          <p className="text-sm text-gray-600 mt-1">
            Online + In-person sessions
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
          <div className="flex items-center mb-3">
            <GraduationCap className="w-6 h-6 text-orange-600 mr-3" />
            <h3 className="font-semibold text-gray-900">Organizer</h3>
          </div>
          <p className="text-gray-700">CAM-SUST</p>
          <p className="text-sm text-gray-600 mt-1">
            Copernicus Astronomical Memorial of SUST
          </p>
        </div>
      </div>

      {/* Program Structure */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Clock className="w-6 h-6 mr-3 text-indigo-600" />
          Program Structure
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-2 rounded-lg mr-3">
                <BookOpen className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Week 1: Online Lectures
                </h4>
                <p className="text-sm text-gray-600">September 3-7, 2025</p>
              </div>
            </div>
            <p className="text-gray-700">
              Comprehensive lecture sessions covering fundamental astrophysical
              topics and modern techniques delivered by expert astronomers and
              researchers.
            </p>
            <div className="mt-3 px-3 py-2 bg-purple-50 rounded-md">
              <p className="text-sm text-purple-700 font-medium">
                📡 Virtual/Remote Sessions
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-2 rounded-lg mr-3">
                <Laptop className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Week 2: Hands-on Training
                </h4>
                <p className="text-sm text-gray-600">September 11-14, 2025</p>
              </div>
            </div>
            <p className="text-gray-700">
              Intensive hands-on sessions focusing on data analysis, simulation
              tools, and modeling techniques used in current astronomical
              research.
            </p>
            <div className="mt-3 px-3 py-2 bg-green-50 rounded-md">
              <p className="text-sm text-green-700 font-medium">
                🏛️ SUST Campus, Sylhet (In-person)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Topics Covered */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Telescope className="w-6 h-6 mr-3 text-indigo-600" />
          Astrophysical Topics & Techniques
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="flex items-start p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <Star className="w-4 h-4 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-800">{topic}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Target Participants */}
      <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <Target className="w-6 h-6 mr-3 text-indigo-600" />
          Who Should Apply?
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">
              Eligible Participants:
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                Undergraduate students (1st to 4th year) from Bangladesh
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                Early-career researchers in Bangladesh
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                Students from Physics, Astronomy, Engineering, and related
                fields
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                Motivated individuals pursuing research careers in astronomy
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                Basic familiarity with programming (preferably Python)
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                Personal laptop with working internet browser
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                Readiness for coding-based hands-on sessions
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                Porgramming experience, motivation, and how they may benefit
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Selection Criteria */}
      <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Selection Process
        </h3>
        <p className="text-gray-700">
          Participants will be selected based on{" "}
          <strong>Porgramming experience</strong>, <strong>motivation</strong>,
          and how they may <strong>benefit from the summer school</strong>. We
          encourage applications from all motivated students who are passionate
          about pursuing research in astronomy and astrophysics.
        </p>
      </div>
    </div>
  );
}
