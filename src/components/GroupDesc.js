import { NavLink } from "react-router-dom";

const GroupDesc = (props) => {
    return (
        <div className="groupDescContainer bg-gray-50 border">
            <h1>{props.title || "Group Title"}</h1>
            <div className="underline"></div>
            <p>{props.description || "Group Description"}</p>
        </div>
    );
};

export default GroupDesc;
