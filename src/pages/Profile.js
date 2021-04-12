let tags = ["Computer Science", "Professor", "Laurier"];

const Profile = (props) => {
  if (props.tags) {
    tags = props.tags;
  }

  return (
    <div className="flex flex-col w-full px-5 m-4">
      <div className="flex flex-row border">
        <div className="rounded-full h-40 w-40">
          <img
            className="w-full h-full object-cover rounded-full"
            src={
              props.image ||
              "https://www.unyp.cz/sites/default/files/pietro.jpg"
            }
            alt=""
          />
        </div>
        <div className="flex flex-col ml-6 p-4 justify-center">
          <p className="text-2xl font-bold">{props.name || "David Brown"}</p>
          {/* Tags go here */}
          <div className="flex flex-row mt-2 space-x-4">
            {tags.map((tag) => (
              <span className="bg-gray-100 rounded-full py-3 px-6 my-2">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
