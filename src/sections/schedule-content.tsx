import React from "react";
import {
  Calendar,
  Clock,
  User,
  Monitor,
  MapPin,
  Laptop,
  Users,
  Star,
  BookOpen,
  Globe,
  Presentation,
} from "lucide-react";

interface Session {
  date: string;
  time: string;
  speaker: string;
  title: string;
  mode: "Online" | "Offline";
  handsOn: boolean;
  isSpecial?: boolean;
  category?: string;
}

export default function ScheduleContent() {
  const sessions: Session[] = [
    {
      date: "TBA",
      time: "TBA",
      speaker: "Dr. Tabassum Shahriar Tanvir",
      title: "Star formation",
      mode: "Online",
      handsOn: false,
    },
    {
      date: "05.09.2025",
      time: "7-9 PM (GMT+6)",
      speaker: "Dr. Tabassum Shahriar Tanvir",
      title: "Star formation",
      mode: "Online",
      handsOn: true,
    },
    {
      date: "TBA",
      time: "TBA",
      speaker: "Dr. Syeda Lammim Ahad",
      title: "The Largest Structures in the Universe",
      mode: "Online",
      handsOn: false,
    },
    {
      date: "07.09.2025",
      time: "8 - 9:30 PM (GMT+6)",
      speaker: "Dr. Tonima Tasnim Ananna",
      title: "How astronomers today find exciting cosmic phenomena",
      mode: "Online",
      handsOn: false,
    },
    {
      date: "11.09.2025",
      time: "TBA",
      speaker: "Dr. Syed Ashraf Uddin",
      title: "Supernova Cosmology",
      mode: "Offline",
      handsOn: true,
    },
    {
      date: "12.09.2025",
      time: "TBA",
      speaker: "K M Shariat Ullah",
      title: "Simulating the Early Universe using 21cmFAST",
      mode: "Offline",
      handsOn: true,
    },
    {
      date: "13.09.2025",
      time: "TBA",
      speaker: "Ahmad Al-Imtiaz",
      title: "NIRSpec (JWST) Data Reduction",
      mode: "Offline",
      handsOn: true,
    },
    {
      date: "14.09.2025",
      time: "TBA",
      speaker: "Tanmoy Bhowmik",
      title:
        "Galaxy SED Fitting: From Photometric Data to Physical Parameter Modeling",
      mode: "Offline",
      handsOn: true,
    },
    {
      date: "21.09.2025",
      time: "TBA",
      speaker: "Participants",
      title: "Group Presentation",
      mode: "Online",
      handsOn: true,
      isSpecial: true,
      category: "Hands-On session-based Group Presentation",
    },
  ];

  const getWeekLabel = (date: string) => {
    if (date === "TBA") return "TBA";
    const day = parseInt(date.split(".")[0]);
    if (day >= 1 && day <= 7) return "Week 1";
    if (day >= 10 && day <= 14) return "Week 2";
    if (day >= 21) return "Follow-up";
    return "";
  };

  const getModeIcon = (mode: string) => {
    return mode === "Online" ? (
      <Monitor className="w-4 h-4" />
    ) : (
      <MapPin className="w-4 h-4" />
    );
  };

  const getModeColor = (mode: string) => {
    return mode === "Online"
      ? "bg-blue-50 text-blue-700 border-blue-200"
      : "bg-green-50 text-green-700 border-green-200";
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Session Schedule
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Two weeks of intensive learning featuring expert lectures and hands-on
          training sessions from leading astronomers and researchers.
        </p>
      </div>

      {/* Schedule Legend */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4">Schedule Overview</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <Monitor className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Online Sessions</p>
              <p className="text-sm text-gray-600">Week 1 & Follow-up</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-green-100 p-2 rounded-lg mr-3">
              <MapPin className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Offline Sessions</p>
              <p className="text-sm text-gray-600">Week 2 at SUST Campus</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-purple-100 p-2 rounded-lg mr-3">
              <Laptop className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Hands-On Included</p>
              <p className="text-sm text-gray-600">Practical sessions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Timeline */}
      <div className="space-y-6">
        {sessions.map((session, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow ${
              session.isSpecial
                ? "border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50"
                : "border-gray-200"
            }`}
          >
            <div className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                {/* Left side: Date, Time, and Week info */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        session.isSpecial
                          ? "bg-purple-100 text-purple-700"
                          : getWeekLabel(session.date) === "Week 1"
                          ? "bg-blue-100 text-blue-700"
                          : getWeekLabel(session.date) === "Week 2"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {getWeekLabel(session.date)}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="font-medium">{session.date}</span>
                    </div>
                  </div>

                  {session.time !== "TBA" && (
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{session.time}</span>
                    </div>
                  )}
                </div>

                {/* Right side: Mode and Hands-on indicators */}
                <div className="flex items-center gap-3">
                  <div
                    className={`flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getModeColor(
                      session.mode
                    )}`}
                  >
                    {getModeIcon(session.mode)}
                    <span className="ml-2">{session.mode}</span>
                  </div>

                  {session.handsOn && (
                    <div className="flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-200">
                      <Laptop className="w-3 h-3 mr-1" />
                      <span>Hands-On</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Session content */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="flex items-center text-gray-700 min-w-0">
                    <User className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" />
                    <span className="font-medium truncate">
                      {session.speaker}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start">
                      {session.isSpecial ? (
                        <Presentation className="w-4 h-4 mr-2 text-purple-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <BookOpen className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0 mt-0.5" />
                      )}
                      <div>
                        <h4 className="font-semibold text-gray-900 leading-tight">
                          {session.title}
                        </h4>
                        {session.category && (
                          <p className="text-sm text-purple-600 mt-1">
                            {session.category}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Group Presentation Details */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
        <div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Participants Group Presentation
            </h3>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <div className="flex items-center mb-2">
                  <Calendar className="w-4 h-4 text-purple-600 mr-2" />
                  <span className="font-semibold text-gray-900">Date</span>
                </div>
                <p className="text-gray-700">September 21, 2025</p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <div className="flex items-center mb-2">
                  <Clock className="w-4 h-4 text-purple-600 mr-2" />
                  <span className="font-semibold text-gray-900">Time</span>
                </div>
                <p className="text-gray-700">TBA</p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <div className="flex items-center mb-2">
                  <Monitor className="w-4 h-4 text-purple-600 mr-2" />
                  <span className="font-semibold text-gray-900">Mode</span>
                </div>
                <p className="text-gray-700">Online</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-purple-200 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <BookOpen className="w-4 h-4 text-purple-600 mr-2" />
                Presentation Requirements
              </h4>
              <p className="text-gray-700 mb-3">
                Participants will give a group presentation based on their
                understanding of the topics and tasks covered during the
                mentor's hands-on sessions. This presentation will be held after
                the conclusion of the Summer School program.
              </p>
              <div className="bg-purple-50 p-3 rounded-md">
                <p className="text-purple-800 font-medium text-sm">
                  <strong>Task:</strong> Students have to plan a project and
                  work on it.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200">
              <div className="flex items-center mb-2">
                <Star className="w-5 h-5 text-yellow-600 mr-2" />
                <span className="font-semibold text-gray-900">
                  Best Presenter Award
                </span>
              </div>
              <p className="text-gray-700 text-sm">
                The <strong>Best Presenter Group</strong> will be selected based
                on their performance during the presentation, recognizing
                excellence in understanding, project execution, and presentation
                skills.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Important Notes */}
      <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
        <div className="flex items-start">
          <Star className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Important Notes
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>
                • <strong>TBA sessions:</strong> Dates and times will be
                announced soon
              </li>
              <li>
                • <strong>All times are in GMT+6</strong> (Bangladesh Standard
                Time)
              </li>
              <li>
                • <strong>Online sessions:</strong> Access links will be shared
                via email
              </li>
              <li>
                • <strong>Offline sessions:</strong> Held at SUST Campus, Sylhet
              </li>
              <li>
                • <strong>Hands-on sessions:</strong> Bring your laptop with
                required software
              </li>
              <li>
                • <strong>Group presentation:</strong> Based on hands-on session
                learnings
              </li>
              <li>
                • <strong>Project planning:</strong> Students must plan and
                execute their own projects
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Weekly Summary */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
            <Globe className="w-5 h-5 text-blue-600 mr-2" />
            Week 1: Online Foundation
          </h3>
          <p className="text-gray-700 text-sm mb-3">
            Comprehensive lecture series covering fundamental astrophysical
            concepts and modern observational techniques.
          </p>
          <div className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded">
            September 1-7, 2025 • Virtual Sessions
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-6 border border-green-200">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
            <MapPin className="w-5 h-5 text-green-600 mr-2" />
            Week 2: Hands-On Practice
          </h3>
          <p className="text-gray-700 text-sm mb-3">
            Intensive practical sessions with real astronomical data, simulation
            tools, and advanced analysis techniques.
          </p>
          <div className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded">
            September 10-14, 2025 • SUST Campus, Sylhet
          </div>
        </div>
      </div>
    </div>
  );
}
