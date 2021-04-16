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
                        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
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
