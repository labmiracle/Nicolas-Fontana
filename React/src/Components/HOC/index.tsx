import { withDataFetched } from "./hoc";
import { Posts } from "./hoc";

const ListOfPosts = ({ posts }: { posts: Posts[] }) => {
    return (
        <>
            {posts.map(post => (
                <ul>
                    <li>User: {post.userId}</li>
                    <li>ID: {post.id}</li>
                    <li>Title: {post.title}</li>
                    <li>Body: {post.body}</li>
                </ul>
            ))}
        </>
    );
};

const ListOfPostsWithDataFetched = withDataFetched(ListOfPosts);

export default ListOfPostsWithDataFetched;
