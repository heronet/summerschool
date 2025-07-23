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
            <p className="text-gray-300">September 1-14, 2025</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 CAM-SUST. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
