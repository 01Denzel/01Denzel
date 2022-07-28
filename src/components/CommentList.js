import React from 'react'
import Comment from './Comment'

const CommentList = ({commentsData}) => {


const commentsToBeDispalyed = commentsData.map((comment) => {
    return(
        <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
    )

})



    return (
        <>
        <h2>I am the comment List component!</h2>
        {commentsToBeDispalyed}
        </>
    )

}

export default CommentList