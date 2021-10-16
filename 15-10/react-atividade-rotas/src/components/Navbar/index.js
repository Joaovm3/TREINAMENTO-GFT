import { Link } from 'react-router-dom';
import './style.css';

import { FaHome, FaPhone, FaInfo } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="Navbar">
      <ul className="List">
        <li className="Item" >
          <Link to="/home"> <FaHome className="Icon" /> Home </Link>
        </li>
        <li className="Item" >
          <Link to="/sobre"> <FaPhone className="Icon" /> Sobre </Link>
        </li>
        <li className="Item" >
          <Link to="/contato"> <FaInfo className="Icon" /> Contato </Link>
        </li>
      </ul>
    </nav>
  );
}
