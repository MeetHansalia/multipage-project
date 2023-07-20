import './Comments.css';
import {useState} from 'react'
import NewCommentFrom from './NewCommentForm.js';

const Comments = ()=>{

    const [isAddingComment, setIsAddingComment]= useState(false);

    const startAddCommentHandler=()=>{
        setIsAddingComment(true);
    }

    return(
        <section className="comments">
            <h2>User Comments</h2>
            {!isAddingComment && (
                <button className='btn' onClick={startAddCommentHandler}>
                    Add a comment
                </button>
            )}
            {isAddingComment && <NewCommentFrom/>}
            <p>Comments...</p>
        </section>
    )
}

export default Comments;