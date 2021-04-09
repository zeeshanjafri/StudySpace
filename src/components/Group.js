import GroupHeader from "./GroupHeader";
import GroupDesc from "./GroupDesc";
const Group = (props) => {
    return (
        <div className="groupContainer">
            <h1 className="text-3xl">Group Page</h1>
            <GroupHeader />
            <div className="groupDescAndPostContainer">
                <GroupDesc />
            </div>
        </div>
    );
};

export default Group;
