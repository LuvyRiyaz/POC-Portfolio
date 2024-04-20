import Layout from "@/components/layout/Layout";
import Image from "next/image";
import profileImage from "/public/images/shadow.jpg";

export default function About() {
  return (
    <Layout>
      <div className="py-8 px-4 md:px-0">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-center">About Me</h1>
          <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:w-1/3">
              <div className="p-6">
                <Image
                  src={profileImage}
                  alt="Profile"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="text-black md:w-2/3 p-6">
              <p className="text-lg mb-4">
                I am Riyaz, a passionate React developer with 2 years of
                experience. I specialize in building modern and responsive web
                applications using the latest technologies.
              </p>
              <p className="text-lg">My expertise includes:</p>
              <ul className="list-disc pl-6">
                <li className="text-lg">React.js and Next.js development</li>
                <li className="text-lg">Responsive and mobile-first design</li>
                <li className="text-lg">
                  Frontend optimization and performance tuning
                </li>
                <li className="text-lg">
                  API integration and backend interaction
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
