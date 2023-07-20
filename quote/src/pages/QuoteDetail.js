import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Comments from "../component/commnets/Comments";
import HighlightedQuote from "../component/quotes/HighLightedQuote";


const Dummy_Quotes = [
    {id:'q1', author : 'Max', text: 'Learning React is fun!'},
    {id:'q2', author: 'Maximilian', text:'Learning React is Great!'},
];

const QuoteDetail = () =>{
    const params = useParams();

    const quote = Dummy_Quotes.find(quote => quote.id === params.quoteId)

    if(!quote){
        return<p>No Quote found</p>
    }

    return(
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <h1>Quote Detail Page</h1>
            <p>{params.quoteId}</p>
            <Route path = {`/quotes/${params.quoteId}/comments`}>
                <Comments></Comments>
            </Route>
        </Fragment>
    );
};

export default QuoteDetail;