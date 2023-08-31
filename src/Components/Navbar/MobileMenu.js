import { AiFillHome } from 'react-icons/ai';
import { BiSolidContact } from 'react-icons/bi';
import { MdRoundaboutRight } from 'react-icons/md';
import { TiGroup, TiNews } from 'react-icons/ti';
import { GiHamburgerMenu } from "react-icons/gi";
import { RiGalleryFill } from "react-icons/ri";
import { MdEventSeat } from "react-icons/md";
import { Link } from "react-router-dom";

export default function MobileMenu() {
  return (
    <div>

      <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <GiHamburgerMenu className=" fs-1 text-main"></GiHamburgerMenu>
        </Link>
        <ul className="dropdown-menu navDropdownMenu navMobileDropdown">
          <li><Link className=" navDropdownbtn  w-full  d-flex align-items-center " to="/"><AiFillHome className="navDropdownIcon   me-2" />Home </Link></li>
          <li><Link className=" navDropdownbtn   w-full my-1 d-flex   align-items-center" to="/about"><MdRoundaboutRight className="navDropdownIcon   me-2" />About</Link></li>
          <li><Link className="navDropdownbtn   w-full my-1 d-flex   align-items-center" to="/committee"><TiGroup className="navDropdownIcon   me-2" />Committee</Link></li>
          <li><Link className="navDropdownbtn   w-full my-1 d-flex   align-items-center" to="/news"><TiNews className="navDropdownIcon   me-2" />News</Link></li>
          <li><Link className="navDropdownbtn   w-full my-1 d-flex   align-items-center" to="/gallery"><RiGalleryFill className="navDropdownIcon text-white  me-2" />Gallery</Link></li>
          <li><Link className="navDropdownbtn   w-full my-1 d-flex   align-items-center" to="/events"><MdEventSeat className="navDropdownIcon   me-2" />Events</Link></li>
          <li><Link className="navDropdownbtn   w-full my-1 d-flex   align-items-center" to="/contact"><BiSolidContact className="navDropdownIcon   me-2" />Contact</Link></li>
        </ul>
      </li>

    </div>
  );
}
