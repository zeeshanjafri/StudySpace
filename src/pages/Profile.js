let tags = ["Computer Science", "Data Science", "Laurier"];

const Profile = (props) => {
  if (props.tags) {
    tags = props.tags;
  }

  return (
    <div className="flex flex-col w-full px-5 m-4">
      <div className="flex flex-row">
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
          <p className="text-2xl font-bold">{props.name || "Mackenzie Van Zanden"}</p>
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

      <div className="flex flex-row my-4 justify-between">
        {/* User Posts */}
        <div className="flex flex-col border w-3/5 sm:rounded-3xl p-4 bg-gray-50 mr-2">
          <a href="/" className="text-xl text-gray font-bold px-5 pb-5">
            {" "}
            Posts{" "}
          </a>
          <div class="border-t-2 py-1 px-5 font-bold">
            {" "}
            Accounting
            <p className="pb-5 font-normal">
              {" "}
              Is anyone taking accounting right now
            </p>
          </div>
          <div class="border-t-2 py-1 px-5 font-bold">
            {" "}
            This weeks recap
            <p className="pb-5 font-normal">
              {" "}
              I am going to make a desk for 5pm tonight
            </p>
          </div>
          <div class="border-t-2 py-1 px-5 font-bold">
            {" "}
            Apple down trend
            <p className="pb-5 font-normal">
              {" "}
              Apple keeps falling! What do you guys think will be the move for
              tom?
            </p>
          </div>
        </div>
        {/* User Interests */}
        <div className="flex flex-col border w-2/5 sm:rounded-3xl p-4 bg-gray-50 ml-2">
          <div className="px-2">
            <div
              href="/"
              className="flex flex-row justify-between text-xl text-gray font-bold px-2 pb-5"
            >
              {" "}
              Interests
              <div className="">
                <button className="">
                  <svg
                    className="w-8 h-8"
                    fill="#dc332e"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="inline-flex space-x-5">
              <div className="pb-5">
                <a
                  href="/"
                  className="flex flex-col border rounded-full py-2 px-5 text-center bg-white"
                >
                  Business{" "}
                </a>
              </div>

              <div className="pb-5">
                <a
                  href="/"
                  className="flex flex-col border rounded-full py-2 px-5 text-center bg-white"
                >
                  Science{" "}
                </a>
              </div>
            </div>

            <div className="inline-flex space-x-5">
              <div className="pb-5">
                <a
                  href="/"
                  className="flex flex-col border rounded-full py-2 px-5 text-center bg-white"
                >
                  Advertising{" "}
                </a>
              </div>

              <div className="pb-5">
                <a
                  href="/"
                  className="flex flex-col border rounded-full py-2 px-5 text-center bg-white"
                >
                  Finance{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
