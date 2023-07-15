import React from "react";
import { navLinksdata } from "../../components/constants/index";
import { Link } from "react-scroll";



function Navbar() {
  return (
    <div className="w-full h-24 flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className="flex items-center justify-start">
        <img  src="./profile-back.png" alt="olatoy profile template" className="w-20" />
        <h1 className="text-[#9696a4]">
          OLATOY
        </h1>
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {navLinksdata.map(({ id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 font-titleFont"
              key={id}>
              <Link
                activeClass="active"
                to={link}
                offset={-70}
                spy={true}
                smooth={true}
                duration={500}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
