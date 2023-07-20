import './QuoteItem.css'
import { Link } from 'react-router-dom';


const QuoteItem =(props)=>{
    return(
        <li className="item">
            <figure >
                <blockquote>
                    <p>{props.text}</p>
                </blockquote>
                <figcaption>{props.author}</figcaption>
            </figure>
            <Link className="btn" to={`/quotes/${props.id}`}>
                View Fullscreen
            </Link>
        </li>
    )
}

export default QuoteItem;