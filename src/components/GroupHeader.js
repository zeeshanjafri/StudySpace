// import { NavLink } from "react-router-dom";

const GroupHeader = (props) => {
    console.log(props.tags.split(","));
    return (
        <div className="groupHeader">
            <div className="headerImageAndJoinWrap">
                <img
                    className="groupViewImg h-40"
                    src={
                        props.image ||
                        "https://res.cloudinary.com/practicaldev/image/fetch/s--RNNNA7AE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://user-images.githubusercontent.com/69592270/101304060-72ff5b00-380d-11eb-8c58-a3172d791c9c.png"
                    }
                    alt=""
                />

                <p className="groupTitle py-2">{props.title || "Group Name"}</p>

                {/* <button className="joinGroup">Join Group</button> */}
            </div>
            <div className="tagsWrap">
                {props.tags.split(",").map((tag, index) => {
                    return <p key={index}>{tag}</p>;
                })}
            </div>
        </div>
    );
};

export default GroupHeader;
