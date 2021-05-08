import Pagination from '../pagination/Pagination';
import Results from './results/results';

const searchResults = props => {
  return (
    <div className="search-results">
      <Results />

      <Pagination />

      <p className="copyright">
        &copy; Copyright by
        <a className="twitter-link" href="https://twitter.com/jonasschmedtman">
          Jonas Schmedtmann
        </a>
        . Use for learning or your portfolio. Don't use to teach. Don't claim as
        your own.
      </p>
    </div>
  );
};

export default searchResults;
