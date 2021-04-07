import JoinedGroupAndFriendView from "./JoinedGroupAndFriendView";
import { demoGroups } from "../data/demoGroups";
import { demoFriends } from "../data/demoFriends"

const groups = demoGroups;
const friends = demoFriends;

const Sidebar = () => {
  return (
    <div className="border p-4 flex flex-col bg-gray-100 flex-shrink-0">
      {/* Joined Groups Section */}
      <div className="mx-2 mt-8">
        <h1 className="text-xl mb-3 font-bold">Joined Groups</h1>

        <div className="flex flex-col space-y-3">
          {groups.map((group) => (
            <JoinedGroupAndFriendView
              key={group.slug}
              title={group.title}
              image={group.image}
              slug={`/group/${group.slug}`}
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
};

export default Sidebar;
