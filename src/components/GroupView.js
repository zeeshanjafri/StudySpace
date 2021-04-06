import { NavLink } from "react-router-dom";

const GroupView = (props) => {
    return (
        <div className="groupViewWrap bg-gray-100">
            <NavLink to={`/group/${props.slug}`}>
            <img
                className="groupViewImg h-40"
                src={props.image || "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"}
                alt=""
            />
            </NavLink>
            <p className="py-2">{props.title || "Group Name"}</p>
        </div>
    );
};

export default GroupView;

