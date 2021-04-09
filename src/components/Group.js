import GroupHeader from "./GroupHeader";
import GroupDesc from "./GroupDesc";
import PostView from "./PostView";

import { demoPosts } from "../data/demoPosts";
import { demoGroups } from "../data/demoGroups";
import NewPostHeader from "./NewPostHeader";

// This limits the posts to the top 3
const posts = demoPosts.slice(0, 3);
const groups = demoGroups;

const Group = (props) => {
  const pathName = props.location.pathname;
  const groupSlug = pathName.slice(7);
  console.log(groupSlug); // this chooses the slug after '/group/' i.e financial-markets etc.

  const mainGroup = groups.find(function (group, index) {
    if (group.slug === groupSlug) return true;
  });

  console.log(mainGroup);

  return (
    <div className="flex flex-col w-full">
      <GroupHeader title={mainGroup.title} />
      <div className="groupDescAndPostContainer space-x-4 flex-row">
        <div className="flex flex-col space-y-6 w-1/2">
          <GroupDesc title={mainGroup.title} />
          {/* Placeholder for Desks or empty space */}
          <div className="border rounded-lg h-10 w-full p-8">
            <p>Desks?</p>
          </div>
        </div>

        {/* The new post container: */}
        <div className="flex flex-col border w-1/2 rounded-lg p-4 bg-gray-50">
          <NewPostHeader />

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

export default Group;
