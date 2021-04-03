import PostView, {demoPosts} from "../components/PostView"

// This limits the posts to the top 3
const posts = demoPosts.slice(0,3);

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* This is the top banner */}
      <div className="flex flex-col border px-5 h-32 justify-center items-center m-4 bg-gray-50 rounded-lg">
        <p className="font-bold">Welcome to StudySpace</p>
        <p className="">Connect with Friends | Create Groups | Chat in Desks</p>
      </div>
      {/* This is the container for the two bottom columns */}
      <div className="flex flex-row flex-grow px-5 py-2 space-x-5 ">
        {/* Top Groups Section */}
        <div className="flex border w-1/2 rounded-lg">
          <h1 className="text-lg font-bold">Top Groups</h1>
        </div>
        {/* Top Posts Section */}
        <div className="flex flex-col border w-1/2 rounded-lg p-4 bg-gray-50">
          <h1 className="text-lg font-bold mb-3">Top Posts</h1>
          <div className="flex flex-col mt-3 space-y-4">
            {posts.map((post) => (
              <PostView key={post.title + post.time} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
