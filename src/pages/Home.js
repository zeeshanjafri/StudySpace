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
        <div className="flex border w-1/2 rounded-lg">
          <h1 className="text-lg font-bold">Top Posts</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
