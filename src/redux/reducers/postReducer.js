const initialstate = []

const postReducer = (state=initialstate, action) => {
    switch(action.type) {
        case 'CREATE_POST':
                // ...state, posts:[...state.posts,action.payload]
                return state.concat([action.payload])
        
        case 'EDIT_POST' :
                
            return state.map((post) => post.id === action.payload ? {...post,editing:!post.editing}: post)
            
        case 'DELETE_POST' :
           
            return state.filter((post)=>post.id !== action.payload);
        
        case 'UPDATE_POST' :
        console.log('UpateDAta',action )
            return state.map((post)=>{
                if(post.id === action.payload.id) {
                  return {
                     ...post,
                     title:action.payload.data.newtitle,
                     message:action.payload.data.newMessage,
                     editing: !post.editing
                  }
                } else return post;
              })

        default:
            return state
    }
}

export default postReducer;