import React from "react";

export default function CommentBtn({ post }) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button className="" type="button" onClick={() => setShowModal(true)}>
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b-2 border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{post.title}</h3>
                  <button
                    className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="pb-2">
                    <p className="text-xs">
                      <span className="uppercase font-bold text-red-400">
                        {post.author.firstName + " " + post.author.lastName}
                      </span>{" "}
                      - {post.time}
                    </p>
                  </div>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    {post.body}
                  </p>
                </div>
                {/* Post Responses */}
                <div className="border-t-2 pt-2 bg-gray-50">
                  <div className="border-b relative px-6 flex-auto">
                    <div className="pt-2">
                      <p className="text-xs">
                        <span className="uppercase font-bold text-purple-600">
                          Adam
                        </span>
                      </p>
                    </div>
                    <p className="my-2 text-blueGray-500 text-md leading-relaxed">
                      This is a cool piece of news. Any reason that caused this?
                    </p>
                  </div>
                  <div className="border-b relative px-6 flex-auto">
                    <div className="pt-2">
                      <p className="text-xs">
                        <span className="uppercase font-bold text-purple-600">
                          Ann
                        </span>
                      </p>
                    </div>
                    <p className="my-2 text-blueGray-500 text-md leading-relaxed">
                      Elon Musk is a real cool dude.
                    </p>
                  </div>
                </div>

                {/*footer*/}
                <div className="flex items-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <label className="block w-full">
                    <input
                      type="text"
                      className="block w-full"
                      placeholder="Comment"
                    ></input>
                  </label>
                  <button
                    className="bg-red-500 text-white border font-bold uppercase px-6 py-2 ml-2 text-sm ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
