import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import QuoteForm from "../component/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
import { useEffect } from "react";


const NewQuotes = () =>{
    const {sendRequest , status} = useHttp(addQuote);
    const history = useHistory();

    useEffect(()=>{
        if(status === 'completed'){
            history.push('/quotes');
        }
    },[status, history])

    const addQuoteHandler = quoteData =>{
        sendRequest(quoteData);
        
       
    }

    return(
        <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}/>
    )
}

export default NewQuotes;