import { NavLink } from "react-router-dom";

const GroupView = (props) => {
    return (
        <div className="groupViewWrap bg-gray-100">
            <NavLink to={`/group/${props.slug}`}>
            <img
                className="groupViewImg h-40"
                src={props.image || "https://res.cloudinary.com/practicaldev/image/fetch/s--RNNNA7AE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://user-images.githubusercontent.com/69592270/101304060-72ff5b00-380d-11eb-8c58-a3172d791c9c.png"}
                alt=""
            />
            </NavLink>
            <p className="py-2">{props.title || "Group Name"}</p>
        </div>
    );
};

export default GroupView;

