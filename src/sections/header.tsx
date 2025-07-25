import { Menu, Calendar, Video } from "lucide-react";

export default function Header({ onMenuToggle }: { onMenuToggle: () => void }) {
  return (
    <header
      className="bg-indigo-900 text-white shadow-lg sticky top-0"
      style={{
        backgroundImage: "url('/images/header-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              onClick={onMenuToggle}
              className="lg:hidden mr-3 sm:mr-4 p-2 rounded-md hover:bg-indigo-700 transition-colors"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <div>
              {/* Minimal title on mobile, full on desktop */}
              <h1 className="text-lg sm:text-xl lg:text-3xl font-bold">
                <span className="sm:hidden">CAM-SUST Summer School</span>
                <span className="hidden sm:inline">
                  CAM-SUST Summer School on Astrophysics 2025
                </span>
              </h1>
              <p className="text-purple-100 mt-1 text-xs sm:text-sm lg:text-base">
                <span className="sm:hidden">Astrophysics Training</span>
                <span className="hidden sm:inline">
                  Advanced Training in Modern Astrophysical Techniques
                </span>
              </p>
            </div>
          </div>

          <div className="hidden md:block text-right">
            <div className="flex items-center text-purple-100 mb-1">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm lg:text-base">September 1-14, 2025</span>
            </div>
            <div className="flex items-center text-purple-100">
              <Video className="w-4 h-4 mr-2" />
              <span className="text-sm lg:text-base">Hybrid Format</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
