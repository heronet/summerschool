import React, { useState, useMemo } from "react";
import { Search, Users, GraduationCap } from "lucide-react";

const participantsData = [
  { name: "Md. Hasan Mahmud Sajib", university: "University of Chittagong" },
  { name: "Anindya Biswas", university: "University of Dhaka" },
  { name: "Fariba Nehreen Binti", university: "University of Chittagong" },
  { name: "Mariem Absar", university: "University of Chittagong" },
  { name: "Nishat Nabilah Ahmed", university: "University of Dhaka" },
  { name: "Redwan Rahman", university: "Daffodil International University" },
  {
    name: "Chayon Golder",
    university: "Shahjalal University of Science and Technology",
  },
  {
    name: "Chowdhury Md. Monsur Elahi",
    university: "University of Chittagong",
  },
  { name: "Tasnim Mahfuz Nafis", university: "University of Dhaka" },
  {
    name: "Ahnaf Rahman Nabil",
    university: "Shahjalal University of Science and Technology",
  },
  {
    name: "Tonima Tasnim Satu",
    university: "Independent University, Bangladesh",
  },
  { name: "MD MUNEM SHAHRIAR", university: "National University, Gazipur" },
  { name: "Pretam Das", university: "University of Chittagong" },
  {
    name: "Abu Sayam Sadik",
    university: "Shahjalal University of Science and Technology",
  },
  { name: "Rownok Shahariar", university: "Govt. Edward College, Pabna" },
  {
    name: "MD SHORIFUL ISLAM",
    university: "Daffodil International University",
  },
  { name: "Radit Raian", university: "Adamjee Cantonment College, Dhaka-1206" },
  { name: "Most. Atia Sanjida", university: "University of Dhaka" },
  { name: "Shuvam Majumder", university: "Bangladesh Agricultural University" },
  {
    name: "Debdip Das Dipto",
    university: "Shahjalal University of Science and Technology",
  },
  {
    name: "Md Shahadat Hossain Shahal",
    university: "Independent University, Bangladesh",
  },
  { name: "Mst. Tajmin Akter", university: "North East University Bangladesh" },
  { name: "Rukaiya Binte Rashid", university: "RUET" },
  { name: "Sanjida Akter", university: "Chittagong College" },
  {
    name: "Shishir Debnath",
    university: "Shahjalal University of Science and Technology",
  },
  {
    name: "Uma roy",
    university: "Shahjalal University of Science and Technology",
  },
  {
    name: "Mehedi Hasan Shamim",
    university: "Chittagong University of Engineering and Technology",
  },
  {
    name: "Md Adib Abrar",
    university: "Shahjalal University of Science and Technology",
  },
  { name: "Saidul Hossain Al Amin", university: "North South University" },
  { name: "Nafia Wahid Nirjhor", university: "Khulna University" },
];

export default function ParticipantsContent() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredParticipants = useMemo(() => {
    if (!searchTerm.trim()) {
      return participantsData;
    }

    const search = searchTerm.toLowerCase();
    return participantsData.filter(
      (participant) =>
        participant.name.toLowerCase().includes(search) ||
        participant.university.toLowerCase().includes(search)
    );
  }, [searchTerm]);

  const universityStats = useMemo(() => {
    const stats = participantsData.reduce(
      (acc: Record<string, number>, participant) => {
        acc[participant.university] = (acc[participant.university] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );
    return Object.entries(stats)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5);
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <Users className="w-8 h-8 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-900">
            Registered Participants
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Meet the talented students and researchers who will be joining us for
          the CAM-SUST Summer School 2025. Our diverse community represents
          institutions from across Bangladesh.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-r border border-purple-200 from-purple-50 to-indigo-50 rounded-xl p-6">
          <div className="flex items-center space-x-3">
            <Users className="w-8 h-8 text-indigo-600" />
            <div>
              <p className="text-2xl font-bold text-gray-700">
                {participantsData.length}
              </p>
              <p className="text-gray-600">Total Participants</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r border border-emerald-200 from-emerald-50 to-teal-50 rounded-xl p-6">
          <div className="flex items-center space-x-3">
            <GraduationCap className="w-8 h-8 text-emerald-600" />
            <div>
              <p className="text-2xl font-bold text-gray-700">
                {new Set(participantsData.map((p) => p.university)).size}
              </p>
              <p className="text-gray-600">Universities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Universities */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <GraduationCap className="w-5 h-5 mr-2 text-indigo-600" />
          Top Participating Universities
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {universityStats.map(([university, count]) => (
            <div
              key={university}
              className="bg-white rounded-lg p-4 text-center"
            >
              <div className="text-2xl font-bold text-indigo-600">{count}</div>
              <div className="text-sm text-gray-600 mt-1">{university}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md mx-auto">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search by name or university..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block w-full pl-10 pr-3 py-3 border text-gray-700 border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Participants Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-800">
            Participants List ({filteredParticipants.length})
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredParticipants.map((participant, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
            >
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 text-sm">
                  {participant.name}
                </h4>
                <p className="text-xs text-gray-600 flex items-start">
                  <GraduationCap className="w-3 h-3 mr-1 mt-0.5 flex-shrink-0 text-gray-400" />
                  {participant.university}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredParticipants.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No participants found
            </h3>
            <p className="text-gray-600">Try adjusting your search terms</p>
          </div>
        )}
      </div>
    </div>
  );
}
