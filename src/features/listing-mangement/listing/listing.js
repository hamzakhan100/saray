import "./listing.css";
import pic from "../newListing/assets/images/house.jpg";
import {
  LocationOn,
  Home,
  LocalParking,
  Deck,
  LocalFlorist,
  OutdoorGrill,
} from "@material-ui/icons";
import VideocamIcon from "@material-ui/icons/Videocam";
import { Button, TextField } from "@material-ui/core";
import PoolIcon from "@material-ui/icons/Pool";

import "date-fns";
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useParams } from "react-router-dom";
import api from "../myLisitngs/api";

const Listing = () => {
  const { listingId } = useParams();
  const [listing, setListing] = useState({});
  const [amenities, setAmenities] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await api.listingDetail(listingId);
        setListing(result.data.listing);
        console.log(result, "listing");
        const am = JSON.parse(result.data.listing.amenities);
        console.log(am, "AM");
        setAmenities(am);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);
  let obj = {
    title: "Amazing villa with family privacy oriented layout",
    address: "Jhelum,Gul-Afshan Colonoy",
    guests: "12",
    bedrooms: "5",
    beds: "5",
    baths: "5",
    hostName: "Sunni the stannis",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    amenities: {
      pool: true,
      garden: true,
      patio: true,
      securityCam: true,
      barbeque: true,
      parking: true,
    },
    rate: "44",
  };
  const [checkinDate, setcheckinDate] = React.useState(() => new Date());
  const [checkoutDate, setcheckoutDate] = useState(() => checkinDate);

  const handleDateCheckIn = (date) => {
    setcheckinDate(date);
  };
  //   import { useHistory } from "react-router-dom";
  const handleDateCheckOut = (date) => {
    setcheckoutDate(date);
  };
  //   import { useHistory } from "react-router-dom";
  // import { Link } from "react-router-dom";

  return (
    <div className="listingContainer">
      <div className="qqq">
        <div className="listingTitleSection">
          <h2 className="listingTitle">{`${listing?.title}`}</h2>
          <div className="listingTitleDetails">
            <p className="listingTitleDesc">
              <LocationOn style={{ fontSize: "1em" }} />
              {`${listing?.address?.city},${listing?.address?.address}`} .{" "}
              <Home style={{ fontSize: "1em" }} />
              {`${listing.guestsLimit} guests . ${obj.bedrooms} bedrooms . ${obj.baths} baths`}
            </p>
          </div>
        </div>
        <div className="listingImageContainer">
          {listing?.images?.map((image, index) => (
            <img src={image} className={"bgInbonx" + (index + 1)} key={index} />
          ))}
          {/* {listing?.images?.map((image, index) => {
            return `<img src={${image}} id="listingImages" className="bgInbonx${index}"></img>`;
          })} */}
          {/* <img src={pic} id="listingImages" className="bgInbonx1"></img>
          <img src={pic} id="listingImages" className="bgInbonx2"></img>
          <img src={pic} id="listingImages" className="bgInbonx3"></img>
          <img src={pic} id="listingImages" className="bgInbonx4"></img>
          <img src={pic} id="listingImages" className="bgInbonx5"></img> */}
        </div>
      </div>
      <div className="listingContentContainer">
        <div className="listingCCLeft">
          {}
          <div className="listingContentHost">
            <div className="listingContentHostImageContainer">
              <img
                className="listingContentHostImage"
                src={listing?.host?.imageUrl}
              />
            </div>
            <div className="listingContentHostDetails">
              <p style={{ fontWeight: "500" }}>
                Meet Your Host,<b>{listing?.host?.name}</b>
              </p>
            </div>
            {/* <vr /> */}
          </div>
          <hr
            style={{
              marginTop: "80px",
              marginBottom: "40px",
              borderBottom: "0px",
              borderColor: "rgb(221, 221, 221)",
            }}
          />
          <div className="listingBottomLeft-layout">
            <div className="listingBottomLeft-desc">
              <h3>All about {`${listing?.host?.name}'s place`}</h3>
              <p style={{ fontSize: "14px", marginBottom: "40px" }}>
                {listing?.description}
              </p>
            </div>
            <hr
              style={{ borderBottom: "0px", borderColor: "rgb(221, 221, 221)" }}
            />
            <div className="amenities">
              <div
                style={{ margin: "40px 0 40px 0" }}
                className="amenities-heading"
              >
                <h3>what this listing offers</h3>
              </div>
              <div className="listingLeftAmenities">
                {amenities?.pool ? (
                  <div className="d-flex">
                    {" "}
                    <PoolIcon />
                    <p className="p">Swimming Pool</p>
                  </div>
                ) : (
                  ""
                )}
                {amenities?.patio ? (
                  <div className="d-flex">
                    {" "}
                    <Deck />
                    <p className="p">Patio</p>
                  </div>
                ) : (
                  ""
                )}
                {amenities?.garder ? (
                  <div className="d-flex">
                    {" "}
                    <LocalFlorist />
                    <p className="p">Garden</p>
                  </div>
                ) : (
                  ""
                )}
                {amenities?.barbeque ? (
                  <div className="d-flex">
                    {" "}
                    <OutdoorGrill />
                    <p className="p">BBQ</p>
                  </div>
                ) : (
                  ""
                )}
                {amenities?.parking ? (
                  <div className="d-flex">
                    {" "}
                    <LocalParking />
                    <p className="p">Parking</p>
                  </div>
                ) : (
                  ""
                )}
                {amenities?.camSecurity ? (
                  <div className="d-flex">
                    {" "}
                    <VideocamIcon />
                    <p className="p">Security Cameras</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="listingCCRight">
          <div className="listingContentContainerRight">
            <div className="listingContentContainerCardRight">
              <div className="startday">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justifyContent="space-around">
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline1"
                      label="Check in"
                      value={checkinDate}
                      onChange={handleDateCheckIn}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </div>
              <br />
              <div className="endday">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justifyContent="space-around">
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline2"
                      label="Check out"
                      value={checkoutDate}
                      onChange={handleDateCheckOut}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </div>

              <div className="price">
                <p>$44</p>
              </div>
              <div className="listingButton">
                <Button id="listingbutton" variant="contained">
                  Confirm Booking
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="listingBottom">
        <div className="listingBottomLeft "></div>

        <div className="listingBottomRight">.</div>
      </div>
    </div>
  );
};
export default Listing;
