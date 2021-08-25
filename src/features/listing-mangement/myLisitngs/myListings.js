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

const MyListings = (props) => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      minWidth: 275,
      margin: "20px",
    },
  });

  const [listings, setListings] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await api.fetchListings();
        setListings(result.data.listings);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  const classes = useStyles();
  let arr = [
    {
      title: "James Carly an amazing view and dinner",
      desc: "It is amazing proerty with city views and beautiful vibes in the night where you feel close to nature",
      img: "../listings/assets/images/houses.jpg",
    },
    {
      title: "James Carly an amazing view and dinner",
      desc: "It is amazing proerty with city views and beautiful vibes in the night where you feel close to nature",
      img: "../listings/assets/images/house.jpg",
    },
    {
      title: "James Carly an amazing view and dinner",
      desc: "It is amazing proerty with city views and beautiful vibes in the night where you feel close to nature",
      img: "../listings/assets/images/house.jpg",
    },
    {
      title: "James Carly an amazing view and dinner",
      desc: "It is amazing proerty with city views and beautiful vibes in the night where you feel close to nature",
      img: "../listings/assets/images/house.jpg",
    },
    {
      title: "James Carly an amazing view and dinner",
      desc: "It is amazing proerty with city views and beautiful vibes in the night where you feel close to nature",
      img: "../listings/assets/images/house.jpg",
    },
    {
      title: "James Carly an amazing view and dinner",
      desc: "It is amazing proerty with city views and beautiful vibes in the night where you feel close to nature",
      img: "../listings/assets/images/house.jpg",
    },
    {
      title: "James Carly an amazing view and dinner",
      desc: "It is amazing proerty with city views and beautiful vibes in the night where you feel close to nature",
      img: "../listings/assets/images/house.jpg",
    },
    {
      title: "James Carly an amazing view and dinner",
      desc: "It is amazing proerty with city views and beautiful vibes in the night where you feel close to nature",
      img: "../listings/assets/images/house.jpg",
    },
    {
      title: "James Carly an amazing view and dinner",
      desc: "It is amazing proerty with city views and beautiful vibes in the night where you feel close to nature",
      img: "../listings/assets/images/house.jpg",
    },
  ];

  return (
    <div className="myListingsContainer">
      <div className="myListingsTopGraphic"></div>
      <h3 style={{}}>Usernames's listings</h3>
      <div className="myListingsCardsContainer">
        {listings.map((element, k) => {
          console.log(element.title);
          return (
            <Card className={classes.root} key={k}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={pic}
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
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default MyListings;
