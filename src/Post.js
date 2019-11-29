import React from 'react'
import { connect } from 'react-redux'
import { Delete, Edit } from './redux/actions/action'

const Post = (props) => {
    console.log('props:',props)
    
    return (
        <div>            
            <h4>Post No: {props.postCount}</h4>
            <h4>Date : {props.post.id.toString()}</h4>
            <h4>Title: {props.post.title}</h4>
            <h4>Message: {props.post.message}</h4>
            <button onClick = {() => props.EDIT_POST(props.post.id)}>Edit</button>
            <button onClick = {() => props.DELETE_POST(props.post.id)}>Delete</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        DELETE_POST: (data) => { dispatch(Delete(data)) },
        EDIT_POST: (data) => { dispatch(Edit(data)) }
    }
    
}

export default connect(null, mapDispatchToProps)(Post)