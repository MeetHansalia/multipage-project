import './Comments.css';
import {useEffect, useState} from 'react'
import NewCommentFrom from './NewCommentForm.js';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from './CommentList';

const Comments = ()=>{

    const [isAddingComment, setIsAddingComment]= useState(false);
    const params = useParams();
    
    
    const {sendRequest, status, data: loadedComments}= useHttp(getAllComments)
    

    const {quoteId}= params;
    useEffect(()=>{
        sendRequest(quoteId);
    },[sendRequest, quoteId])

    const startAddCommentHandler=()=>{
        setIsAddingComment(true);
    }
    
    const addedCommentHandler = ()=>{}

    let comments;
     
    if(status === 'pending'){
        comments = (<div className='centered'>
            <LoadingSpinner/>
        </div>
        )
    }

    if(status === 'completed' && (loadedComments && loadedComments.length > 0)){
       comments = <CommentsList comments={loadedComments}/>
    }

    if(status === 'completed' && (!loadedComments || loadedComments.length === 0)){
        comments =<p className='centered'> No comments were added yet!</p>
    }

   

    return(
        <section className="comments">
            <h2>User Comments</h2>
            {!isAddingComment && (
                <button className='btn' onClick={startAddCommentHandler}>
                    Add a comment
                </button>
            )}
            {isAddingComment && <NewCommentFrom quoteId={quoteId} onAddedComment={addedCommentHandler}/>}
            {comments}
        </section>
    )
}

export default Comments;