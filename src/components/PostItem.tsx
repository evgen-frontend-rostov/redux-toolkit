import React, { FC } from "react"
import { IPost } from "../models/IPost"


interface PostItemProps {
  post: IPost
  remove: (post: IPost) => void
  update: (post: IPost) => void
}

export const PostItem: FC<PostItemProps> = ({post, remove, update}) => {
  const handleUpdate = () => {
    const title = prompt() || '';
    update({...post, title});
  }

  const handleRemove = () => {
    remove(post);
  }

  return (
    <div style={{border: '2px solid green', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px'}}>
      <p><strong>{post.id}</strong> {post.title}</p>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleRemove}>Delete</button>
    </div>
  )
}