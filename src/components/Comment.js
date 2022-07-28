import React from 'react'

const Comment = ({author, children}) => {
    return(
        <>
        <h3>{author}</h3>
        <p>/{children}</p>
        </>
    )


}

export default Comment