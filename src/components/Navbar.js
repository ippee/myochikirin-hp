import { Link } from 'react-router-dom';

import '../assets/css/Navbar.css';

function Navbar() {
  return(
    <div className="navbar">
      <ul>
        <li><Link to="/">トップ</Link></li>
        <li><Link to="/news">お知らせ</Link></li>
        <li><Link to="/worldview">世界観</Link></li>
        <li><Link to="/download">ダウンロード</Link></li>
        <li><Link to="/spec">スペック</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
