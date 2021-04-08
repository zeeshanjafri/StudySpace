import GroupHeader from "./GroupHeader";
const Group = (props) => {
    return (
        <div className="groupContainer">
            <h1 className="text-3xl">Group Page</h1>
            <GroupHeader />
            <p>Group page body content</p>
        </div>
    );
};

export default Group;
