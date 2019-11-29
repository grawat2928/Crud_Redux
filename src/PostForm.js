import React from 'react'
import { connect } from 'react-redux'
import { Create } from './redux/actions/action'

const PostForm = (props) => {
    let getTitle = '', getMessage = ''

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = getTitle.value;
        const message = getMessage.value;
        const data = {
          id: new Date(),
          title,
          message,
          editing: false
        }
        props.CREATE_POST(data);
        getTitle.value = '';
        getMessage.value = ''
      }
    
    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit = {handleSubmit}>
                <input required type = 'text' placeholder='Enter Post Title' ref={(input)=>getTitle = input}/> <br/> <br/>
                <textarea required rows = '5' placeholder= 'Enter Post' ref={(input)=>getMessage = input}/>  <br/> <br/>
                <button>Post</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        
        CREATE_POST: (data) => { dispatch(Create(data)) },
        // UPDATE_POST: () => { dispatch(Update()) },
        
    }
}

export default connect(null, mapDispatchToProps)(PostForm);
