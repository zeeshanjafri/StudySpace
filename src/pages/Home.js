import React, { useEffect } from "react";
import PostView from "../components/PostView";
import GroupView from "../components/GroupView";
// import { demoGroups } from "../data/demoGroups";
import { demoPosts } from "../data/demoPosts";
import { fetchGroups } from "../actions";
import { connect } from "react-redux";
// This limits the posts to the top 3
const posts = demoPosts.slice(0, 3);
// const groups = demoGroups.slice(0, 4);

const Home = (props) => {
    useEffect(() => {
        props.fetchGroups();
    }, []);

    const renderContent = () => {
        if (!props.groups) {
            return <h1>Loading...</h1>;
        } else {
            return (
                <div className="flex flex-col w-full">
                    {/* This is the top banner */}
                    <div className="flex flex-col border px-5 h-32 justify-center items-center m-4 bg-gray-50 rounded-lg">
                        <p className="font-bold">Welcome to StudySpace</p>
                        <p className="">
                            Connect with Friends | Create Groups | Chat in Desks
                        </p>
                    </div>
                    {/* This is the container for the two bottom columns */}
                    <div className="flex flex-row flex-grow px-5 py-2 space-x-5">
                        {/* Top Groups Section */}
                        <div className="groupSection w-1/2 border rounded-lg p-4">
                            <h1 className="text-lg font-bold">Top Groups</h1>
                            <div className="groupViewContainer mt-2">
                                {props.groups.map((group, index) => (
                                    <GroupView
                                        key={index}
                                        title={group.groupName}
                                        // image={group.picture}
                                        slug={group.slug}
                                    />
                                ))}
                            </div>
                        </div>
                        {/* Top Posts Section */}
                        <div className="flex flex-col border w-1/2 rounded-lg p-4 bg-gray-50">
                            <h1 className="text-lg font-bold mb-3">
                                Top Posts
                            </h1>
                            <div className="flex flex-col mt-3 space-y-4">
                                {posts.map((post) => (
                                    <PostView
                                        key={post.title + post.time}
                                        post={post}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return <React.Fragment>{renderContent()}</React.Fragment>;
};

const mapStateToProps = (state) => {
    return {
        groups: state.groups.data,
    };
};
export default connect(mapStateToProps, { fetchGroups })(Home);
