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
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const Listing = () => {
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
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="listingContainer">
      <div className="listingTitleSection">
        <h2 className="listingTitle">{`${obj.title}`}</h2>
        <div className="listingTitleDetails">
          <p className="listingTitleDesc">
            <LocationOn style={{ fontSize: "1em" }} />
            {`${obj.address}`} . <Home style={{ fontSize: "1em" }} />
            {`${obj.guests} guests . ${obj.bedrooms} bedrooms . ${obj.beds} beds . ${obj.baths} baths`}
          </p>
        </div>
      </div>
      <div className="listingImageContainer">
        <img src={pic} id="listingImages" className="bgInbonx1"></img>
        <img src={pic} id="listingImages" className="bgInbonx2"></img>
        <img src={pic} id="listingImages" className="bgInbonx3"></img>
        <img src={pic} id="listingImages" className="bgInbonx4"></img>
        <img src={pic} id="listingImages" className="bgInbonx5"></img>
      </div>
      <div className="listingContentContainer">
        <div className="listingContentHost">
          <div className="listingContentHostImageContainer">
            <img className="listingContentHostImage" src={pic} />
          </div>
          <div className="listingContentHostDetails">
            <p style={{ fontWeight: "500" }}>
              Meet Your Host,<b>{obj.hostName}</b>
            </p>
          </div>
          {/* <vr /> */}
        </div>

        <div className="listingContentContainerRight">
          <div className="listingContentContainerRightLayout">
            <div className="d-flex">
              <div className="startday">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justifyContent="space-around">
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Start Date"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </div>

              <div className="endday">
                {" "}
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justifyContent="space-around">
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="End Date"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </div>
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
      <div
        ClassName="listingBottom"
        style={{ padding: "10px 150px 40px 150px" }}
      >
        <div className="listingBottomLeft">
          <div className="listingBottomLeft-layout">
            <div className="listingBottomLeft-desc">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </div>
            <hr />
            <div className="amenities">
              <div className="amenities-heading">
                <h3>what this listing offers</h3>
              </div>
              <div className="listingLeftAmenities">
                <div className="d-flex">
                  {" "}
                  {obj.amenities.pool ? <PoolIcon /> : ""}{" "}
                  <p className="p">Swimming Pool</p>
                </div>
                <div className="d-flex">
                  {" "}
                  {obj.amenities.garden ? <LocalFlorist /> : ""}{" "}
                  <p className="p">Garden</p>
                </div>
                <div className="d-flex">
                  {" "}
                  {obj.amenities.patio ? <Deck /> : ""}{" "}
                  <p className="p">Patio</p>
                </div>
                <div className="d-flex">
                  {" "}
                  {obj.amenities.securityCam ? <VideocamIcon /> : ""}{" "}
                  <p className="p">Security camera</p>
                </div>
                <div className="d-flex">
                  {" "}
                  {obj.amenities.barbeque ? <OutdoorGrill /> : ""}{" "}
                  <p className="p">Barbeque</p>
                </div>
                <div className="d-flex">
                  {" "}
                  {obj.amenities.parking ? <LocalParking /> : ""}{" "}
                  <p className="p">Private Property</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="listingBottomRight"></div>
      </div>
    </div>
  );
};
export default Listing;
