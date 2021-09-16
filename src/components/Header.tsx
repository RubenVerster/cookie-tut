import { FaCookieBite } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="sticky-top bg-primary text-white text-center p-3 d-flex justify-content-center align-items-center">
      <h1 className="d-flex flex-row">
        <FaCookieBite />
        ookie Crumble
      </h1>
    </div>
  );
};

export default Header;
