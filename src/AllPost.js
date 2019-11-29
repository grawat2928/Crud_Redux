import React from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import Update from './Update'

const AllPost = (props) => {
    console.log("props.posts", props.posts)
    let value = 0;
    return (

        <div>
            <h1>All Posts </h1>

            {props.posts.length > 0 ? props.posts.map((post) => {
                value = value + 1
                return (
                    <div key={post.id}>
                        {post.editing ? <Update post={post}  /> :
                        <Post  post={post} postCount={value} />}
                    </div>                   
                )}) : <h2>Please Create Your Post</h2>}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps, null)(AllPost);
