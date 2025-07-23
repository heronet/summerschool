"use client";
import React, { useState } from "react";
import {
  Calendar,
  Users,
  FileText,
  Settings,
  Home,
  MapPin,
  Mail,
  ExternalLink,
  Video,
} from "lucide-react";
import LogisticsContent from "@/sections/logistics-content";
import RegistrationContent from "@/sections/registration-content";
import OverviewContent from "@/sections/overview-content";
import ScheduleContent from "@/sections/schedule-content";
import SessionsContent from "@/sections/sessions-content";
import SpeakersContent from "@/sections/speakers-content";
import Footer from "@/sections/footer";
import Header from "@/sections/header";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const navigationItems: NavItem[] = [
  { id: "overview", label: "Overview", icon: <Home className="w-4 h-4" /> },
  {
    id: "schedule",
    label: "Schedule",
    icon: <Calendar className="w-4 h-4" />,
  },
  {
    id: "sessions",
    label: "Sessions",
    icon: <FileText className="w-4 h-4" />,
  },
  {
    id: "speakers",
    label: "Speakers",
    icon: <Users className="w-4 h-4" />,
  },
  { id: "logistics", label: "Logistics", icon: <MapPin className="w-4 h-4" /> },
  {
    id: "registration",
    label: "Registration",
    icon: <Settings className="w-4 h-4" />,
  },
];

const contentMap = {
  overview: <OverviewContent />,
  schedule: <ScheduleContent />,
  sessions: <SessionsContent />,
  speakers: <SpeakersContent />,
  logistics: <LogisticsContent />,
  registration: <RegistrationContent />,
};

export default function CAMSUSTSummerSchool() {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 sticky top-8">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-semibold text-gray-800">Navigation</h2>
              </div>
              <nav className="p-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "bg-purple-100 text-purple-700 border border-purple-200"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {item.icon}
                    <span className="ml-3">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 min-h-[600px]">
              <div className="p-8">
                {contentMap[activeSection as keyof typeof contentMap]}
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
