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
            // `http://studyspace-backend.herokuapp.com${props.image}` ||
            "https://res.cloudinary.com/practicaldev/image/fetch/s--RNNNA7AE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://user-images.githubusercontent.com/69592270/101304060-72ff5b00-380d-11eb-8c58-a3172d791c9c.png"
          }
          alt=""
        />
        <p>{props.title || "Name here"}</p>
      </div>
    </NavLink>
  );
};

export default JoinedGroupAndFriendView;
