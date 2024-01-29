import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo">
        <h3>Chiangmai Travel</h3>
      </Link>
      <Link to="/">หน้าแรก</Link>
      <Link to="/blogs">ค้นหาสถานที่ท่องเที่ยว</Link>
      <Link to="/about">เกี่ยวกับเรา</Link>
    </nav>
  );
}
