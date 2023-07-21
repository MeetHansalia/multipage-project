import {Fragment} from 'react'
import './QuoteList.css'
import QuoteItem from './QuoteItem.js';
import { useHistory, useLocation } from 'react-router-dom';


const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
      if (ascending) {
        return quoteA.id > quoteB.id ? 1 : -1;
      } else {
        return quoteA.id < quoteB.id ? 1 : -1;
      }
    });
};



const QuoteList = (props) =>{
    const history = useHistory();
    const location = useLocation()
    
    const queryParams = new URLSearchParams(location.search)

    const isSortingAscending = queryParams.get('sort') === 'asc';

    const sortedQuotes = sortQuotes(props.quotes, isSortingAscending)

    const changeSortingHandler =()=>{
        // history.push('/quotes?sort=' + (isSortingAscending ? 'desc' : 'asc'))
        history.push({
            pathname: location.pathname,
            search:`?sort=${ (isSortingAscending ? 'desc' : 'asc')}`
        })
        // history.push(`${location.pathname}?sort=${ (isSortingAscending ? 'desc' : 'asc')}`)
    }

    return(
        <Fragment>
            <div className="sorting">
                <button onClick={changeSortingHandler}>
                    Sort {isSortingAscending ? 'Descending' : 'Ascending'}
                </button>
            </div>
            <ul className="list"> 
                {sortedQuotes.map((quote)=>(
                    <QuoteItem
                        key={quote.id}
                        id={quote.id}
                        author = {quote.author}
                        text = {quote.text}
                    />

                ))}
            </ul>
      
        </Fragment>
    )
}

export default QuoteList;