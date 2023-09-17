import { navLinks } from "../constants"
import { logo } from "../assets";
const NavBar = () => {
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
          <img src={logo} alt="hoobank" className="w-[124px] h-[72px]" />

          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white
                   ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
    
          <div className="sm:hidden flex flex-1 justify-end items-center">
            
          </div>
        </nav>
      );
    };
    

export default NavBar
