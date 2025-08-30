import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-3">Organized by</h3>
            <p className="text-gray-300">
              CAM-SUST (Copernicus Astronomical Memorial of SUST)
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Format</h3>
            <p className="text-gray-300">Hybrid: Online & Offline Sessions</p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Duration</h3>
            <p className="text-gray-300">September 3-12, 2025</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              &copy; 2025 CAM-SUST. All rights reserved.
            </p>
            <a
              href="https://github.com/heronet/summerschool"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
