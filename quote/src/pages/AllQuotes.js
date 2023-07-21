import { useEffect } from "react";
import QuoteList from "../component/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes  } from "../lib/api";
import LoadingSpinner from "../component/UI/LoadingSpinner";
import NoQuotesFound from "../component/quotes/NoQuotesFound";

// const Dummy_Quotes = [
//     {id:'q1', author : 'Max', text: 'Learning React is fun!'},
//     {id:'q2', author: 'Maximilian', text:'Learning React is Great!'},
// ];


const AllQuotes = () =>{
    const {sendRequest, status, data: loadingQuotes, error} =  useHttp(
        getAllQuotes, 
        true
    );
    useEffect(()=>{
        sendRequest();
    },[sendRequest])

    if(status === 'pending'){
        return<div className="centered">
            <LoadingSpinner></LoadingSpinner>
        </div>
    }
    if(error){
        return <p className="centered focused">{error}</p>
    }

    if(status === 'completed' && (!loadingQuotes || loadingQuotes.length === 0)){
        return <NoQuotesFound/>
    }

    return(
        <QuoteList quotes={loadingQuotes}/>
    )
}

export default AllQuotes;