import {Fragment} from 'react'
import './QuoteList.css'
import QuoteItem from './QuoteItem.js';

const QuoteList = (props) =>{
    return(
        <Fragment>
            <ul className="list"> 
                {props.quotes.map((quote)=>(
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