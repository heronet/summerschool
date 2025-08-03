import { Users } from "lucide-react";

const SpeakersContent = () => {
  const speakers = [
    {
      name: "Dr. Syed Ashraf Uddin",
      affiliation: "Faculty at American Public University System, USA",
      role: "Speaker & Hands-on Instructor",
      description:
        "Dr. Syed Ashraf Uddin is an observational cosmologist specializing in supernovae, cosmic distance scales, and transient astronomy. He is currently an Adjunct Faculty at the Centre for Space Studies, American Public University System, USA. He is working in collaboration with the Carnegie Supernova Project. His research focuses on supernova cosmology, cosmic distance scales, and transient phenomena.",
    },
    {
      name: "Dr. Tonima Tasnim Ananna",
      affiliation:
        "Assistant Professor of Physics and Astronomy at Wayne State University, USA",
      role: "Speaker",
      description:
        "Dr. Tonima Tasnim Ananna is an Assistant Professor in the Department of Physics and Astronomy at Wayne State University. Professor Ananna is an astronomer who applies machine learning techniques to large surveys to understand the population of supermassive black holes in the Universe and the rates at which they grow.",
    },
    {
      name: "Dr. Syeda Lammim Ahad",
      affiliation:
        "WCA Postdoctoral Fellow, Waterloo Centre for Astrophysics, University of Waterloo, Canada",
      role: "Speaker & Hands-on Instructor",
      description:
        "Dr. Syeda Lammim Ahad is working as a WCA Postdoctoral Fellow at the Waterloo Centre for Astrophysics. Her research is focused on understanding the formation and evolution of the largest structures in the Universe: galaxy clusters. She uses cosmological hydrodynamic simulations and large sky survey data to combine theory and observations in her work.",
    },
    {
      name: "Dr. Tabassum Shahriar Tanvir",
      affiliation: "Postdoc Research Associate, Iowa State University, USA",
      role: "Speaker",
      description:
        "Dr. Tabassum Shahriar Tanvir is a Postdoctoral Researcher in Astrophysics at Iowa State University. He is working in collaboration with the STARFORGE (STAR FORmation in Gaseous Environments) project. His research focuses on star and planet formation, galaxy formation.",
    },
  ];

  const instructors = [
    {
      name: "K M Shariat Ullah",
      affiliation: "Undergraduate student, Dept. of EEE, SUST, Bangladesh",
      role: "Hands-on Instructor",
      description:
        "K M Shariat Ullah is a senior year undergraduate student pursuing a degree in Electrical and Electronic Engineering at Shahjalal University of Science and Technology, Sylhet. He is also working as a research intern at the Center for Astronomy, Space Science, and Astrophysics at the Independent University of Bangladesh. His research areas include 21cm cosmology, the cosmic reionization era, galaxy foregrounds, and exoplanet detection and characterization.",
    },
    {
      name: "Ahmad Al-Imtiaz",
      affiliation: "Research Student, ICTP-PWF Bangladesh Collaboration",
      role: "Hands-on Instructor",
      description:
        "Ahmad Al-Imtiaz is a research intern at the ICTP PWF Bangladesh Collaboration. He completed his B.Sc. and M.Sc. in Physics from Shahjalal University of Science and Technology, Sylhet. Ahmad has worked on galaxy-galaxy strong lens modeling using Lenstronomy, image reduction of GSAOI and JWST datasets, and photometric analysis. He recently co-authored a paper published in Astronomy & Astrophysics and aims to pursue a PhD focusing on the formation and evolution of galaxies in the early universe.",
    },
    {
      name: "Tanmoy Bhowmik",
      affiliation: "Undergraduate student, Dept. of Physics, SUST, Bangladesh",
      role: "Hands-on Instructor",
      description:
        "Tanmoy Bhowmik is a junior undergraduate student in Physics at Shahjalal University of Science and Technology, Sylhet. As a research intern, he worked at the Institute of Astrophysics and Space Sciences, Portugal and the University of California, Berkeley. He is currently involved in a research group with PRIMA, JPL/Caltech. His research areas and interests include galaxy formation and evolution, LRDs, and high-energy gamma-ray emission from supernovae.",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <Users className="w-6 h-6 mr-2 text-purple-600" />
          Distinguished Speakers & Instructors
        </h2>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Speaker List
          </h3>
          <div className="grid md:grid-cols-1 gap-4">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="flex items-start p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-200"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold mr-4 flex-shrink-0">
                  {speaker.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {speaker.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-1">
                    {speaker.affiliation}
                  </p>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {speaker.role}
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed my-3">
                    {speaker.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Hands-on Instructor List
          </h3>
          <div className="grid md:grid-cols-1 gap-4">
            {instructors.map((instructor, index) => (
              <div
                key={index}
                className="flex items-start p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border border-green-200"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold mr-4 flex-shrink-0">
                  {instructor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {instructor.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-1">
                    {instructor.affiliation}
                  </p>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {instructor.role}
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed my-3">
                    {instructor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakersContent;
