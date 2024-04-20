import Layout from "@/components/layout/Layout";
import profileImage from "/public/images/shadow.jpg";
import Image from "next/image"; // Import next/image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <Layout>
      <div className="py-4">
        <h1 className="text-3xl font-bold mb-4">My Portfolio</h1>
      </div>
      <div className="flex justify-around items-center">
      <div className="item-center flex flex-col items-center justify-center">
  <h2 className="text-5xl font-bold text-purple-500 neon-flicker">Riyaz</h2>
  <p className="mt-4 font-bold text-2xl">React Developer</p>
  <div className="mt-4 flex items-center">
    <a href="https://github.com/LuvyRiyaz/POC-Portfolio" target="_blank" rel="noopener noreferrer" className="mr-4">
      <FontAwesomeIcon icon={faGithub} size="2x" className="text-gray-700 hover:text-gray-900" />
    </a>
    <a href="https://www.linkedin.com/in/riyazath-ali-s-9201b5213/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-gray-700 hover:text-gray-900" />
    </a>
  </div>
</div>

        
        <div className="mb-4">
          <Image
            className="h-52 w-72 rounded-lg"
            src={profileImage}
            alt="Profile"
          />
        </div>
      </div>
    </Layout>
  );
}
