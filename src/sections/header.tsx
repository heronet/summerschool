import { Calendar, Video } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-indigo-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              CAM-SUST Summer School on Astrophysics 2025
            </h1>
            <p className="text-purple-100 mt-1">
              Advanced Training in Modern Astrophysical Techniques
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center text-purple-100 mb-1">
              <Calendar className="w-4 h-4 mr-2" />
              <span>September 1-14, 2025</span>
            </div>
            <div className="flex items-center text-purple-100">
              <Video className="w-4 h-4 mr-2" />
              <span>Hybrid Format</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
