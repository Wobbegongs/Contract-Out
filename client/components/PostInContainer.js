import React from 'react';

const PostInContainer = (props) => {
  return (
    <div>
      {props.posts.map(((post, key) => {
        return (
          <div key={`post${key}`}>
          
          </div>
        )
      }))}
    </div>
  )
}

export default PostInContainer;