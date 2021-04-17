import { NavLink } from "react-router-dom";

const JoinedGroupAndFriendView = (props) => {
  const slug = props.slug;
  if (props.isFriend) {
    return (
        <NavLink to={slug}>
          <div className="joinedGroupAndFriendViewWrap">
            <img
              src={
                `${props.image}` ||
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
              }
              alt=""
            />
            <p>{props.title || "Name here"}</p>
          </div>
        </NavLink>
      );
  }
  return (
    <NavLink to={slug}>
      <div className="joinedGroupAndFriendViewWrap">
        <img
          src={
            `http://studyspace-backend.herokuapp.com${props.image}` ||
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
          }
          alt=""
        />
        <p>{props.title || "Name here"}</p>
      </div>
    </NavLink>
  );
};

export default JoinedGroupAndFriendView;
