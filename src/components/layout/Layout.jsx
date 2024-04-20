import Link from 'next/link';

const Layout = ({ children }) => (
  <div className='container mx-auto '>
    <nav className='py-4 float-right'>
      <Link className='mr-4 text-white' href="/">
        Home
      </Link>
      <Link className='mr-4 text-white' href="/about">
        About
      </Link> 
      <Link className='mr-4 text-white' href="/contact">
        Contact
      </Link>
    </nav>
    <main>{children}</main>
  </div>
);

export default Layout;





