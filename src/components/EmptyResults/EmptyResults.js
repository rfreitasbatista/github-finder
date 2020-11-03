import React from 'react';
import notFound from '../../assets/gifs/notFound.gif';
import './EmptyResults.scss';

function EmptyResults({ searchText }) {
  return (
    <section className="not-found">
      <h4 className="not-found-text">{`No results were found for '${searchText}'`}</h4>
      <h4 className="not-found-text">
        {'Please, try again with another username'}
      </h4>
      <img className="not-found-gif" src={notFound} alt="Not found animation" />
    </section>
  );
}

export default EmptyResults;
