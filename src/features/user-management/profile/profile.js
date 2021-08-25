import "./profile.css";
import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";

const Profile = () => {
  return (
    <div className="profileContainer">
      <div className="left">
        <div className="profileSection">
          <div className="avatarContainer">
            <Avatar id="avatarProfile"></Avatar>
            <div className="nameContainer">
              <h2 style={{ marginBottom: "0px" }}>Username</h2>
              <h5 style={{ color: "grey", margin: "0px", width: "auto" }}>
                @userhandle
              </h5>
            </div>
            
          </div>
          <div className></div>
        </div>
        <div className="profileNavLinks">
              <div className="profileAnchorWrapper">
                <a className="profileAnchorLinks">Home</a>
              </div>
              <div className="profileAnchorWrapper">
                <a className="profileAnchorLinks">Rent</a>
              </div>
              <div className="profileAnchorWrapper">
                <a className="profileAnchorLinks">Listings</a>
              </div>
              <div className="profileAnchorWrapper">
                <a className="profileAnchorLinks">Experiences</a>
              </div>
              <div className="profileAnchorWrapper">
                <a className="profileAnchorLinks">Property</a>
              </div>
              <Button variant="contained" id="profileButton" >Book</Button>
            </div>
      </div>
      <div className="mid">
        <div className="profileCreatePost">
          
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Profile;
