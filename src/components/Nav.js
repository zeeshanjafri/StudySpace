import JoinedGroupAndFriendView from "./JoinedGroupAndFriendView";
import { demoGroups } from "../data/demoGroups";
import { demoFriends } from "../data/demoFriends";
import { connect } from "react-redux";
import { fetchJoinedGroups } from "../actions";
import React, { useEffect } from "react";
const groups = demoGroups;
const friends = demoFriends;

const CURRENT_USER_ID = 1;
const Sidebar = (props) => {
  console.log("hi", props.authStatus);
  useEffect(() => {
    // props.fetchJoinedGroups(props.authStatus.authenticated);
    props.fetchJoinedGroups(1);
  }, []);

  const renderContent = () => {
    if (!props.joinedGroups) {
      return <h1>Loading</h1>;
    } else {
      console.log("test", props.joinedGroups);
      return (
        <div className="border p-4 flex flex-col bg-gray-100 flex-shrink-0">
          {/* Joined Groups Section */}
          <div className="mx-2 mt-8">
            <h1 className="text-xl mb-3 font-bold">Joined Groups</h1>

            <div className="flex flex-col space-y-3">
              {/* {groups.map((group) => (
                                <JoinedGroupAndFriendView
                                    key={group.slug}
                                    title={group.title}
                                    image={group.image}
                                    slug={`/group/${group.slug}`}
                                />
                            ))} */}
              {props.joinedGroups.map((data, index) => (
                <JoinedGroupAndFriendView
                  key={index}
                  title={data.group_id.groupName}
                  // image={data.group_id.picture}
                  slug={`/group/${data.group_id.slug}`}
                />
              ))}
            </div>
          </div>
          {/* Friend Online Section */}
          <div className="mx-2 mt-6">
            <h1 className="text-xl mb-3 font-bold">Friends Online</h1>
            <div className="flex flex-col space-y-2">
              {friends.map((friend) => (
                <JoinedGroupAndFriendView
                  isFriend={true}
                  key={friend.name}
                  title={friend.name}
                  image={friend.avatar}
                  slug={friend.profileLink} // need to think more about this
                />
              ))}
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
    joinedGroups: state.joinedGroups.data,
    authStatus: state.authStatus.data,
  };
};
export default connect(mapStateToProps, { fetchJoinedGroups })(Sidebar);
