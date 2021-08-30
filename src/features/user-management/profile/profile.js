import "./profile.css";
import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { axios } from "axios";
import api from "./api";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { Chat } from "../../chat";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Profile = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await api.getBlogs();
        setPosts(result.data.blogs);
      } catch (error) {
        alert("Error");
      }
    })();
  }, []);
  const classes = useStyles();

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="profileContainer">
      <div className="left">
        <div className="profileSection">
          <div className="avatarContainer">
            <Avatar id="avatarProfile" src={user?.imageUrl}></Avatar>
            <div className="nameContainer">
              <h2 style={{ marginBottom: "0px" }}>{user?.name}</h2>
              <h5
                style={{
                  color: "grey",
                  margin: "0px",
                  width: "auto",
                }}
              >
                {user.email}
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
          <Button variant="contained" id="profileButton">
            Book
          </Button>
        </div>
      </div>
      <div className="mid">
        {posts?.map((post) => {
          return (
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={post.imageUrl}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                  ></Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                 {post?.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
             
            </Card>
          );
        })}
      </div>
      <div className="right">
        <Chat />
      </div>
    </div>
  );
};

export default Profile;
