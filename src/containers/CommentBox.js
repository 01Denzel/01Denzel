import React, {useState} from 'react'
import CommentForm from '../components/CommentForm'
import CommentList from '../components/CommentList'


const CommentBox = () => {
    const [comments,setComments]  = useState([
        {
          id: 1,
          author: "Rick Henry",
          text: "React is such a great framework!"
        },
        {
          id: 2,
          author: "Valerie Gibson",
          text: "I'm dreaming in React..."
        }
      ])

      const addComment = (comment) => {
        const copyOfComments =  [...comment,commenData]
        detComments(copyOfComments)
      }
    return(
        <>
        <h2> Hello I am the comment box</h2>
        <CommentList/>
        <CommentForm/>
        </>
    )

}


export default CommentBox
