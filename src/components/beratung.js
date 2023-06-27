import { Outlet, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Beratung = () => {
  return (
    <>
      <h2>Beratung Beratung</h2>
      <nav>
        <ul>
          <li>
            <HashLink to="/#beratung">Home</HashLink>
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
          <li>
            <Link to="/impressum">Impressum</Link>
          </li>
          <li>
          	<Link to="/datenschutz">Datenschutz</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Beratung;
