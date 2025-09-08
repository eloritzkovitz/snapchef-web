export const metadata = {
  title: "About - SnapChef",
  description: "Learn more about the SnapChef team and our mission.",
};

import Image from "next/image";
import teamMembers from "../../data/teamMembers";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* About Content Section */}
      <section className="w-full px-4 py-10 md:py-16 flex flex-col items-center">
        <div className="w-full max-w-5xl xl:max-w-7xl flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-[#ff8a6a] mb-20 font-berlin text-center">
              Our Mission
            </h1>                     
            <div className="flex-shrink-0 flex justify-center md:justify-center mb-6 md:mb-8">
              <Image
                src="/images/features/about.png"
                alt="SnapChef Mission"
                width={560}
                height={560}
                className="rounded-2xl object-cover"
              />
            </div>
            <p className="text-base md:text-lg text-gray-800 mb-4 font-inter">
              SnapChef was created to solve a common problem: figuring out what
              to cook with the ingredients you already have at home. Our mission
              is to reduce food waste, save money, and make cooking more
              accessible and enjoyable for everyone.
            </p>
            <p className="text-base md:text-lg text-gray-800 mb-8 font-inter">
              By combining advanced image recognition technology with AI-powered
              recipe generation, we&apos;ve built an app that helps you create
              delicious meals from whatever is in your fridge or pantry.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="w-full max-w-6xl xl:max-w-7xl mt-10 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#ff8a6a] mb-20 font-berlin text-center">
            Meet the Team
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center items-stretch">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center bg-white/70 rounded-xl shadow-lg p-6 mx-auto h-full"
              >
                <div className="w-24 h-24 mb-4 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover border-4 border-[#ff8a6a]"
                    style={{ aspectRatio: "1/1" }}
                  />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-[#ff8a6a] mb-1 font-berlin">
                  {member.name}
                </h3>
                <p className="text-base text-gray-600 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-base text-gray-700 text-center font-inter">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Project Info Section */}
        <div className="w-full max-w-5xl xl:max-w-7xl mt-16 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#ff8a6a] mb-8 font-berlin text-center">
            Academic Project
          </h1>
          <p className="text-sm md:text-lg text-gray-800 mb-2 font-inter text-center mb-8">
            This project was developed as part of our studies at The College of
            Management Academic Studies, under the supervision of Dr. Gal
            Badishi.
          </p>
          <Image
            src="/images/branding/college_logo.png"
            alt="College Logo"
            width={100}
            height={100}
            className="mb-2"
          />         
        </div>
      </section>
    </div>
  );
}
