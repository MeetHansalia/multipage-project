import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import QuoteForm from "../component/quotes/QuoteForm";


const NewQuotes = () =>{

    const history = useHistory();

    const addQuoteHandler = quoteData =>{
        console.log(quoteData);
        
        history.push('/quotes')
    }

    return(
        <QuoteForm onAddQuote={addQuoteHandler}/>
    )
}

export default NewQuotes;