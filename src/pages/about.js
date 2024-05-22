import Layout from "@/components/layout/Layout";
import Image from "next/image";
import profileImage from "/public/images/shadow.jpg";
import { useTranslation } from 'next-i18next';

export default function About() {
  const { t } = useTranslation('common');
  
  return (
    <Layout>
      <div className="py-8 px-4 md:px-0">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-center">{t('about_me')}</h1>
          <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:w-1/3">
              <div className="p-6">
                <Image
                  src={profileImage}
                  alt={t('profile')}
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="text-black md:w-2/3 p-6">
              <p className="text-lg mb-4">
                {t('about_description')}
              </p>
              <p className="text-lg">{t('expertise_includes')}</p>
              <ul className="list-disc pl-6">
                <li className="text-lg">{t('react_next_development')}</li>
                <li className="text-lg">{t('responsive_design')}</li>
                <li className="text-lg">{t('frontend_optimization')}</li>
                <li className="text-lg">{t('api_integration')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
