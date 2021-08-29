import "./myListings.css";


import pic from "../newListing/assets/images/houses.jpg";
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  CardActionArea,
  CardActions,
  Typography,
  makeStyles,
} from "@material-ui/core";
import api from "./api";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const MyListings = (props) => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      minWidth: 275,
      margin: "20px",
    },
  });

  const [listings, setListings] = useState([]);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        const result = await api.fetchListings();
        console.log(result.data.listings,"myListing");
        setListings(result.data.listings);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  const handleClick = (id) => {
    history.push("/listing/" + id);
  };
  const classes = useStyles();

  return (
    <div className="myListingsContainer">
      <h3 style={{ paddingTop: "2%" }}>Usernames's listings</h3>
      <div style={{}} className="myListingsTopGraphic"></div>

      <div className="myListingsCardsContainer">
        {listings.map((element, k) => {
          console.log(element.title);
          return (
            <Card
              className={classes.root}
              key={k}
              onClick={() => handleClick(element._id)}
            >
              <CardActionArea>
                {console.log(element, "element")}
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  style={{ objectFit: "center" }}
                  image={element.images.length ? element.images[0] : pic}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {element.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {element.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default MyListings;
