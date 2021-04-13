import React, { useEffect } from "react";

import GroupHeader from "./GroupHeader";
import GroupDesc from "./GroupDesc";
import PostView from "./PostView";

import { demoPosts } from "../data/demoPosts";
import { demoGroups } from "../data/demoGroups";
import NewPostHeader from "./NewPostHeader";

import { fetchGroups, fetchPosts } from "../actions";
import { connect } from "react-redux";

// This limits the posts to the top 3
const posts = demoPosts.slice(0, 3);
const groups = demoGroups;

function createPost() {
    console.log("Post created!");
}

const Group = (props) => {
    const pathName = props.location.pathname;
    const groupSlug = pathName.slice(7);
    // console.log(groupSlug); // this chooses the slug after '/group/' i.e financial-markets etc.

    useEffect(() => {
        props.fetchGroups();
        props.fetchPosts();
    }, []);

    const renderContent = () => {
        if (props.groups && props.posts) {
            // console.log("the prop is a", typeof(props.groups[0].id));
            // console.log("but the slug is a ",typeof(groupSlug))

            function slugMatches(group) {
                return group.id === parseInt(groupSlug, 10);
            }

            const mainGroup = props.groups.find(slugMatches);

            // console.log(mainGroup);

            return (
                <div className="flex flex-col w-full">
                    <GroupHeader
                        title={mainGroup.groupName}
                        tags={mainGroup.tags}
                    />
                    <div className="groupDescAndPostContainer space-x-4 flex-row">
                        <div className="flex flex-col space-y-6 w-1/2">
                            <GroupDesc
                                title={mainGroup.groupName}
                                description={mainGroup.description}
                            />

                            {/* NewPost Form */}
                            <div className="border rounded-lg w-full p-8">
                                <div className="p-4" id="postForm">
                                    <h1 className="mb-4 text-md font-bold">
                                        Create a New Post
                                    </h1>
                                    <div className="grid grid-cols-1 gap-6">
                                        <label className="block">
                                            <span className="text-gray-700">
                                                Title
                                            </span>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="Post Title"
                                            ></input>
                                        </label>
                                        <label className="block">
                                            <span className="text-gray-700">
                                                Body
                                            </span>
                                            <textarea
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="Post Body"
                                                rows="3"
                                            ></textarea>
                                        </label>
                                        <label className="block">
                                            <button
                                                onClick={createPost}
                                                className="border bg-red-600 rounded-full px-6 py-2 text-white"
                                            >
                                                Post
                                            </button>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* The new post container: */}
                        <div className="flex flex-col border w-1/2 rounded-lg p-4 bg-gray-50">
                            <NewPostHeader />

                            <div className="flex flex-col mt-3 space-y-4">
                                {props.posts.map((post, index) => {
                                    return <PostView key={index} post={post} />;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <h1>Loading...</h1>;
        }
    };

    return <React.Fragment>{renderContent()}</React.Fragment>;
};

// export default Group;
const mapStateToProps = (state) => {
    return {
        groups: state.groups.data,
        posts: state.posts.data,
    };
};
export default connect(mapStateToProps, { fetchGroups, fetchPosts })(Group);
