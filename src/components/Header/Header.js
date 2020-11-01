import { useContext } from 'react';
import { Link } from 'react-router-dom';
import githubLogo from '../../assets/images/github-icon-white.jpg';
import { UserInfoContext } from '../../contexts/UserContext';
import SearchBar from '../SearchBar/SearchBar';
import './header.scss';

function Header() {
  const { resultSuccess } = useContext(UserInfoContext);

  return (
    <header className="header">
      <Link to="/" className="link-to-home">
        <div className="header-center">
          <img src={githubLogo} className="github-logo" alt="Github Logo"></img>
          <h1>
            Github <span className="finder-text">Finder</span>
          </h1>
        </div>
      </Link>
      {resultSuccess && <SearchBar formClass="header-search-form" />}
    </header>
  );
}

export default Header;
