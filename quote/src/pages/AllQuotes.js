import QuoteList from "../component/quotes/QuoteList";

const Dummy_Quotes = [
    {id:'q1', author : 'Max', text: 'Learning React is fun!'},
    {id:'q2', author: 'Maximilian', text:'Learning React is Great!'},
];


const AllQuotes = () =>{
    return(
        <QuoteList quotes={Dummy_Quotes}/>
    )
}

export default AllQuotes;