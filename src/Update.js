import React from 'react'
import { connect } from 'react-redux'
import { UpdatePost } from './redux/actions/action'

const Update = (props) => {
    console.log('propsUpdate', props)
    let getTitle = '', getMessage = ''

    const handleSubmit = (e) => {
        e.preventDefault();
        const newtitle = getTitle.value;
        const newMessage = getMessage.value;
        const data = {
            newtitle,
            newMessage
        }
        props.UPDATE_POST({id:props.post.id, data:data});
       
      }
    
    return (
        <div>
            <h1>Update Post</h1>
            <form onSubmit = {handleSubmit}>
                <input required type = 'text' defaultValue={props.post.title}
                placeholder='Enter Post Title' ref={(input)=>getTitle = input}/> <br/> <br/>
                <textarea required rows = '5' defaultValue={props.post.message}
                placeholder= 'Enter Post' ref={(input)=>getMessage = input}/>  <br/> <br/>
                <button>Update</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        UPDATE_POST: (data) => { dispatch(UpdatePost(data)) },
    }
}

export default connect(null, mapDispatchToProps)(Update);
