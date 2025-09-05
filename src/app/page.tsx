"use client";
import React, { useState } from "react";
import {
  Calendar,
  Users,
  FileText,
  Settings,
  Home,
  MapPin,
  X,
  Video,
  HelpCircle,
  UserCheck,
} from "lucide-react";
import LogisticsContent from "@/sections/logistics-content";
import RegistrationContent from "@/sections/registration-content";
import OverviewContent from "@/sections/overview-content";
import ScheduleContent from "@/sections/schedule-content";
import SessionsContent from "@/sections/sessions-content";
import SpeakersContent from "@/sections/speakers-content";
import Footer from "@/sections/footer";
import Header from "@/sections/header";
import FAQContent from "@/sections/faq-content";
import ParticipantsContent from "@/sections/participants-content";

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
  {
    id: "faq",
    label: "FAQ",
    icon: <HelpCircle className="w-4 h-4" />,
  },
  {
    id: "participants",
    label: "Participants",
    icon: <UserCheck className="w-4 h-4" />,
  },
];

const contentMap = {
  overview: <OverviewContent />,
  schedule: <ScheduleContent />,
  sessions: <SessionsContent />,
  speakers: <SpeakersContent />,
  logistics: <LogisticsContent />,
  registration: <RegistrationContent />,
  faq: <FAQContent />,
  participants: <ParticipantsContent />,
};

export default function CAMSUSTSummerSchool() {
  const [activeSection, setActiveSection] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuToggle={toggleMobileMenu} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 sticky top-32">
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

          {/* Mobile Sidebar with Smooth Animations */}
          <div
            className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            {/* Backdrop with fade animation */}
            <div
              className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
                isMobileMenuOpen ? "bg-opacity-50" : "bg-opacity-0"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sidebar with slide animation */}
            <aside
              className={`relative bg-white w-80 h-full shadow-xl transform transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              {/* Header with close button */}
              <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gradient-to-r from-indigo-600 to-indigo-900 text-white">
                <h2 className="font-semibold">Navigation</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-md hover:bg-indigo-700 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation items with stagger animation */}
              <nav className="p-2">
                {navigationItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => handleSectionChange(item.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 mb-1 transform ${
                      activeSection === item.id
                        ? "bg-purple-100 text-purple-700 border border-purple-200 scale-[0.98]"
                        : "text-gray-700 hover:bg-gray-100 hover:scale-[0.98]"
                    } ${
                      isMobileMenuOpen
                        ? `opacity-100 translate-x-0 transition-delay-[${
                            index * 50
                          }ms]`
                        : "opacity-0 -translate-x-4"
                    }`}
                    style={{
                      transitionDelay: isMobileMenuOpen
                        ? `${index * 50}ms`
                        : "0ms",
                    }}
                  >
                    <span className="flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 mr-3">
                      {item.icon}
                    </span>
                    <span className="flex-1 text-left">{item.label}</span>
                  </button>
                ))}
              </nav>

              {/* Footer info in mobile sidebar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50">
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center text-gray-600 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>September 3-12, 2025</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600 text-sm">
                    <Video className="w-4 h-4 mr-2" />
                    <span>Hybrid Format Available</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-4 sm:p-6 lg:p-8">
                {contentMap[activeSection as keyof typeof contentMap]}
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
