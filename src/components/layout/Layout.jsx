import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Layout = ({ children }) => {
  const { t } = useTranslation('common');


  return(
  <div className='container mx-auto '>
    <nav className='flex justify-end items-center	'>
      <Link className='mr-4 relative top-[43px]' href="/">
      {t('home')}
      </Link>
      <Link className='mr-4 relative top-[43px]' href="/about">
      {t('about')}
      </Link> 
      <Link className='mr-4 relative top-[43px]' href="/contact">
      {t('contact')}
      </Link>
    </nav>
    <main>{children}</main>
  </div>
)};

export default Layout;





