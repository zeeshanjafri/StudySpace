import { NavLink } from "react-router-dom";

const JoinedGroupAndFriendView = (props) => {
    const slug = props.slug;
    return (
        <NavLink to={slug}>
            <div className="joinedGroupAndFriendViewWrap">
                <img src={props.image} alt="" />
                <p>{props.title || "Name here"}</p>
            </div>
        </NavLink>
    );
};

export default JoinedGroupAndFriendView;
