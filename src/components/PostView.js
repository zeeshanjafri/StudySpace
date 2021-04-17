import CommentBtn from "./CommentBtn";

const PostView = ({ post }) => {
    console.log(post);
    return (
        <div className="flex flex-col w-full bg-white p-4 shadow-md">
            <div className="py-1">
                <p className="text-xs">
                    <span className="uppercase font-bold text-red-400">
                        {post.author.firstName} {post.author.lastName}
                    </span>{" "}
                    - {post.time}
                </p>
            </div>
            <div className="border-t-2 py-1 pb-6 border-b-2">
                <h1 className="text-md font-bold">{post.title}</h1>
                <p>{post.body}</p>
            </div>
            <div className="pt-2 flex flex-row items-center">
                <button className="">
                    <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                </button>

                <span className="mx-2">{post.upvotes || 0}</span>
                {/* Comment button */}
                <CommentBtn post={post} />
            </div>
        </div>
    );
};

export default PostView;

// This takes the following Props:
/*
        "upvotes": 4,
        "title": "Hello",
        "time": "2021-04-05T01:24:41Z",
        "body": "THis is a post",
        "picture": "http://127.0.0.1:8000/posts/mc12.PNG"
*/
