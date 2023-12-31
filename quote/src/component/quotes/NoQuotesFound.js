import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './NoQuoteFound.css'

const NoQuotesFound = () => {
  return (
    <div className="noquotes">
      <p>No quotes found!</p>
      <Link className="btn" to='/new-quote'>
        Add a Quote
      </Link>
    </div>
  );
};

export default NoQuotesFound;