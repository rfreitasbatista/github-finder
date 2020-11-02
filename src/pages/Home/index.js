import React, { useContext } from 'react';
import { UserInfoContext } from '../../contexts/UserContext';
import RepoCard from '../../components/Repository/RepoCard';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footers';
import EmptyResults from '../../components/EmptyResults/EmptyResults';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Home.scss';

function Home() {
  const { resultSuccess, userToSearch, repoData, warning, userName } = useContext(UserInfoContext);

  return (
    <div>
      <Header />
      <div className="home">
        <div className="home-body">
          {!resultSuccess && !warning && (
            <div className="initial-structure">
              <p className="instructions-text">
                Insert a Github's user name to check out his repositories and other informations
              </p>
              <SearchBar formClass="home-search-form" />
            </div>
          )}

          {resultSuccess && (
            <p className="found-information">
              {`Found `}
              <span className="important-user-information">{repoData.length}</span>{' '}
              {` repositories at `}
              <span className="important-user-information">{userName}</span> {`'s account.`}
            </p>
          )}
          {warning && <EmptyResults searchText={userToSearch} />}
          {resultSuccess &&
            repoData.map((repository) => (
              <RepoCard repoInfo={repository} key={repository.full_name} />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
