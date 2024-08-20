import ScrollIntoView from "react-scroll-into-view";
import TeamgetherLogo from "./assets/teamgether-logo-2.png";

function Navbar() {
  return (
    <div className="bg-white/80 items-center sticky top-0 flex justify-between w-full h-20 ">
      <img
        className="h-20 w-44 sm:block sm:h-24 sm:w-auto hover:cursor-pointer"
        src={TeamgetherLogo}
      ></img>
      <ul className="inline-flex space-x-4 sm:space-x-12">
        <li className="font-semibold hover:cursor-pointer hover:text-blue-800">
          About Us
        </li>
        <ScrollIntoView selector="#form">
          <li className="pr-4 font-semibold hover:cursor-pointer hover:text-blue-800">
            Contact Us
          </li>
        </ScrollIntoView>
      </ul>
    </div>
  );
}

export default Navbar;
