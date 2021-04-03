const PostView = ({ post }) => {
  
  return (
    <div className="flex flex-col w-full bg-white p-4 shadow-md">
      <div className="py-1">
        <p className="text-xs">
            <span className="uppercase font-bold text-red-400">{post.author}</span> - {post.time} ago
        </p>
      </div>
      <div className="border-t-2 py-1 pb-6">
        <h1 className="text-md font-bold">{post.title}</h1>
        <p>{post.text}</p>
      </div>
    </div>
  );
};

export default PostView;

// Other named Exports:
export const demoPosts = [
  {
    title: "$TSLA Trend",
    text: "Tesla stock is up 20% this week reversing past 5 day trend",
    author: "Mark",
    time: "12 minutes", // TODO: add moment.js integration
  },
  {
    title: "$SQ Trend",
    text: "Square stock is up 20% this week reversing past 5 day trend",
    author: "Bill",
    time: "13 minutes", // TODO: add moment.js integration
  },
  {
    title: "Something is wrong!",
    text: "Tesla stock is up 20% this week reversing past 5 day trend",
    author: "Skywalker",
    time: "10 minutes", // TODO: add moment.js integration
  },
];
