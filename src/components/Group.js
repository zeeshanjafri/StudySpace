import GroupHeader from "./GroupHeader";
import GroupDesc from "./GroupDesc";
const Group = (props) => {
    return (
        <div className="groupContainer">
            <GroupHeader />
            <div className="groupDescAndPostContainer">
                <GroupDesc />
            </div>
        </div>
    );
};

export default Group;
