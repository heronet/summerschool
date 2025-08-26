import { MapPin, MapPinIcon } from "lucide-react";

const LogisticsContent = () => (
  <div className="space-y-8">
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
        <MapPin className="w-6 h-6 mr-2 text-red-600" />
        Event Logistics
      </h2>
      <div className="space-y-4">
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-gray-800 mb-2">Hybrid Format</h3>
          <ul className="space-y-1 text-gray-700">
            <li>• First week (September 3-7): Online lecture sessions</li>
            <li>
              • Second week (September 10-12): In-person hands-on training
            </li>
            <li>• Group presentations: September 21, 2025</li>
            <li>• All times in GMT+6 (Bangladesh Standard Time)</li>
          </ul>
        </div>
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <h3 className="font-semibold text-gray-800 mb-2">
            Technical Requirements
          </h3>
          <ul className="space-y-1 text-gray-700">
            <li>• Stable internet connection for online sessions</li>
            <li>• Python programming environment</li>
            <li>• Laptop with working internet browser</li>
            <li>• Ready for coding-based hands-on sessions</li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
        <MapPinIcon className="w-6 h-6 mr-2 text-green-600" />
        Travel & Accommodation Information
      </h2>

      <div className="space-y-6">
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-gray-800 mb-3">
            How to Reach the University
          </h3>
          <p className="text-gray-700 mb-3">
            Participants can reach Sylhet by both train and bus. The train
            station and bus terminal are located close to each other.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-gray-800 mb-2">By Bus</h4>
              <p className="text-sm text-gray-600">
                Arrive at Sylhet Kadamtoli Bus Stand. CNGs (auto-rickshaws)
                available. Fare to university gate: ~250–300 BDT (reserved)
              </p>
            </div>
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-gray-800 mb-2">By Train</h4>
              <p className="text-sm text-gray-600">
                Railway Station to university gate: ~250–300 BDT by CNG
              </p>
            </div>
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-gray-800 mb-2">By Air</h4>
              <p className="text-sm text-gray-600">
                Arrive at Osmani International Airport, Sylhet. CNGs
                (auto-rickshaws) available. Fare to university gate: ~250–300
                BDT (reserved)
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <h3 className="font-semibold text-gray-800 mb-3">
            Accommodation Options
          </h3>
          <p className="text-gray-700 mb-3">
            There are no hotels directly beside the university gate, but several
            are available within 1.5–3 km:
          </p>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-gray-800">
                Hotel Grand Akhtar (Modina Market)
              </h4>
              <p className="text-sm text-gray-600">
                1.5 km from university gate • Local CNG fare: ~10 BDT
              </p>
            </div>
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-gray-800">
                Hotel Noorjahan (Dorga Gate, Ambarkhana)
              </h4>
              <p className="text-sm text-gray-600">
                ~3 km from university • CNG to Ambarkhana (~20 BDT) + Rickshaw
                to Dorga Gate (20 BDT) or 10min walk
              </p>
            </div>
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-gray-800">
                Hotel Bahrain (Dorga Gate)
              </h4>
              <p className="text-sm text-gray-600">
                Same directions and distance as Hotel Noorjahan
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <h3 className="font-semibold text-gray-800 mb-2">
            Need Further Help?
          </h3>
          <p className="text-gray-700">
            If anyone faces difficulty finding a place to stay, feel free to
            contact us. We&apos;ll be happy to assist you with proper guidance.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default LogisticsContent;
