import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'services' },
    { id: 3, link: 'classes' },
    { id: 4, link: 'trainers' },
    { id: 5, link: 'pricing' },
  ];

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY >= 50 ? setShadow(true) : setShadow(false);
    });
  }, []);

  return (
    <div className={`fixed w-full h-20 z-[100] ${shadow ? 'bg-black/90' : 'bg-transparent'} transition-nav`}>
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto px-4">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-white">FitLife</h1>
        </div>

        <div className="hidden md:flex">
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li key={id} className="px-4 cursor-pointer text-white capitalize font-medium hover:text-red-500 duration-200">
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden cursor-pointer text-white" onClick={() => setNav(!nav)}>
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      <div className={`${nav ? 'flex' : 'hidden'} md:hidden absolute top-20 w-full bg-black/90 flex-col`}>
        <ul>
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 py-4 text-white capitalize cursor-pointer">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
