import Layout from "@/components/layout/Layout";
import profileImage from "/public/images/shadow.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe as solidGlobe, faMoon as solidMoon, faSun as solidSun } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Home() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang).then(() => {
      router.push(router.pathname, router.asPath, { locale: lang });
    });
  };

  if (!mounted) return null; 
  return (
    <Layout>
      <div className="py-4">
        <h1 className="text-3xl font-bold mb-4">{t('my_portfolio')}</h1>
      </div>
      <div className="flex justify-around items-center relative top-[100px]">
        <div className="item-center flex flex-col items-center justify-center">
          <h2 className="text-5xl font-bold text-purple-500 neon-flicker">Riyaz</h2>
          <p className="mt-4 font-bold text-2xl">{t('react_developer')}</p>
          <div className="mt-4 flex items-center">
            <a href="https://github.com/LuvyRiyaz/POC-Portfolio" target="_blank" rel="noopener noreferrer" className="mr-4">
              <FontAwesomeIcon icon={faGithub} size="2x" className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/riyazath-ali-s-9201b5213/" target="_blank" rel="noopener noreferrer" className="mr-4">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="social-icon" />
            </a>
          </div>
        </div>
        <div className="mb-4">
          <Image className="h-52 w-72 rounded-lg" src={profileImage} alt="Profile" />
        </div>
      </div>
      <div className="fixed bottom-4 right-4 ">
        <div className="fixed bottom-16 right-4">
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="p-2 bg-gray-800 text-white rounded-full"
        >
          <FontAwesomeIcon icon={theme === 'light' ? solidMoon : solidSun} size="2x" />
        </button>
        </div>
        <div>     
             <select
          onChange={(e) => changeLanguage(e.target.value)}
          value={locale}
          className="px-4 py-2 bg-gray-800 text-white rounded"
        >
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="ar">العربية</option>
        </select>
        </div>

      </div>
    </Layout>
  );
}
