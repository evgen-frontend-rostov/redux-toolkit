import { IPost } from "../models/IPost";
import { postAPI, useCreatePostMutation, useDeletePostMutation, useFetchAllPostsQuery, useUpdatePostMutation } from "../services/postService";
import { PostItem } from "./PostItem";

export const PostBlock = () => {
  const { data: posts, error, isLoading } = useFetchAllPostsQuery(100);
  const [createPost, {}] = useCreatePostMutation();
  const [updatePost, {}] = useUpdatePostMutation();
  const [removePost, {}] = useDeletePostMutation();

  const handleCreate = async () => {
    const title = prompt('Введите название поста');
    await createPost({title, body: title} as IPost)
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };

  const handleRemove = (post: IPost) => {
    removePost(post);
  };

  return (
    <div>
      {isLoading && <h1>loading posts...</h1>}
      {error && <h1>ошибка загрузки постов!</h1>}
      <button onClick={handleCreate}>Add post</button>
      {posts?.map((post) => <PostItem key={post.id} post={post} update={handleUpdate} remove={handleRemove}/>)}
    </div>
  );
};
