import "./Home.css";

import SearchBar from "../SearchBar/SearchBar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "./api";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
let obj = {};

const Home = () => {
  const classes = useStyles();
  const [searched, setSearched] = useState([]);
  const [city, setCity] = useState("");
  const history = useHistory();

  const onListingClick = (listingId) => {
    history.push("/listing/" + listingId);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    try {
      const result = await api.getBookingsByCity(city);
      setSearched(result.data.listings);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="homeContainer">
      <SearchBar handleChange={handleCityChange} handleClick={handleSearch} />
      <div className="homeContent">
        <div className="homeContentWrapper">
          <hr style={{ borderBottom: "0" }} />
          <h3>Search results for {`${"Islamabad"}`}</h3>
          <div>
            {searched.map((listing) => (
              <Card
                className={classes.root}
                onClick={() => onListingClick(listing._id)}
              >
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={listing.imagesUrl[0]}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {listing?.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {listing?.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
