import "./newListing.css";
import {
  TextField,
  Button,
  Accordion,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper,
  Typography,
  makeStyles,
  CircularProgress,
} from "@material-ui/core";
import { useState } from "react";
import api from "../api";
import newListingBg from "./assets/images/roof_red_house.jpg";
import { useHistory } from "react-router-dom";
import storage from "../../../firebase";
import Dropzone from "react-dropzone";
import { set } from "date-fns";
import amenitiesPic from "./assets/images/amenities.jpg";
import guestsPic from "./assets/images/invite.jpg";
import ratePic from "./assets/images/rate.jpg";
import uploadPic from "./assets/images/uploadImage.jpg";
const NewListing = () => {
  /////DropZone Styles
  /////Styles

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  }));
  const classes = useStyles();
  /////States
  const [preview, setPreview] = useState([]);
  const [listing, setListing] = useState({
    title: "",
    description: "",
    rate: 0,
    guestsLimit: 0,
    amenities: [],
  });
  const [urlsImages, setUrlsImages] = useState([]);
  const [images, setImages] = useState([]);
  const [imageUpload, setUpload] = useState(false);
  const [amenity, setAmenity] = useState({
    patio: false,
    garden: false,
    barbeque: false,
    securityCam: false,
    pool: false,
    parking: false,
  });
  const [address, setAddress] = useState({
    address: "",
    province: "",
    city: "",
    zipCode: "",
  });

  const [buttonStyle, setButtonStyle] = useState({
    backgroundColor: "none",
    border: "1px black solid",
  });

  /////////////////////////////StepperState//////////////////
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const history = useHistory();

  /////////////////////////////StepperState/////////////////

  // const onLisitingChange = (e) => {
  //   const { name, value } = e.target;
  //   setListing((prev) => ({ ...prev, [name]: value }));
  // };
  /////Functions
  const onImageUpload = async () => {
    console.log(preview, "preview");
    if (images == null) return;
    console.log("heeh", images);
    setUpload(true);
    const imageUrls = await Promise.all(
      images.map(async (image) => {
        const task = storage.ref(`/listings/${image.name}`).put(image);

        task.on("state_change", (snapshot) => {
          // console.log((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          console.log(snapshot);
        });

        await task;
        const downloadUrl = await storage
          .ref("/listings")
          .child(image.name)
          .getDownloadURL();
        return downloadUrl;
      })
    );
    setUpload(false);

    setUrlsImages(imageUrls);
    return;
  };
  const onAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };
  const onListingChange = (e) => {
    const { name, value } = e.target;
    setListing((listing) => ({
      ...listing,
      [name]: value,
    }));
  };

  const onAddClick = async () => {
    onImageUpload();
    try {
      await api.addListing({
        ...listing,
        address,
        amenities: [amenity],
        imagesUrls: [urlsImages],
      });
      history.push("/myListings");
    } catch (error) {
      console.log(error);
    }
  };
  const onAmenityChange = (e) => {
    const { name } = e.target;
    setAmenity((prev) => ({ ...prev, [name]: !prev[name] }));
    console.log(amenity);
    console.log("sunni");
  };
  // const { name , value } = e.target;
  // setAmenity()
  //////////////////////////////////////////StepperFunctions////////////////////////////
  function getSteps() {
    return [
      "An awesome title & Description",
      "Where is your property located?",
      "Amenities",
      "How many guests would you like to welcome?",
      "Set a competitive rate....",
      "Add minimum 5 images",
    ];
  }
  function getStepContentLeft(step) {
    switch (step) {
      case 0:
        return (
          <div>
            <img src={newListingBg} className="newListingBg"></img>
          </div>
        );
      case 1:
        return (
          <div style={{ width: "100%" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7455.3382287493705!2d73.0256762757664!3d33.65779081860695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1629838602801!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        );
      case 2:
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img style={{ height: "70%" }} src={amenitiesPic} />
          </div>
        );

      case 3:
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img style={{ height: "70%" }} src={guestsPic} />
          </div>
        );
      case 4:
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img style={{ height: "70%" }} src={ratePic} />
          </div>
        );
      case 5:
        return (
          <div className="newListingImagesGridLeft">
            {images.length ? (
              preview.length ? (
                preview.map((x, index) => {
                  return (
                    <div className={`newListingUploadedImages${index}Left`}>
                      {imageUpload ? (
                        <CircularProgress
                          style={{ position: "relative", margin: "auto" }}
                        />
                      ) : (
                        <img
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "5px",
                          }}
                          src={x}
                          className={"newListingImageLeft"}
                        />
                      )}
                    </div>
                  );
                })
              ) : null
            ) : (
              <div>
                <img style={{  }} src={uploadPic} />
              </div>
            )}
          </div>
        );

      default:
        return <div>Nothing set yet on step {`${activeStep + 1}`}</div>;
    }
  }
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <div>
            <div className="newListingInputWrapper">
              <h3>Property:</h3>
              <TextField
                name="title"
                onChange={onListingChange}
                variant="outlined"
                placeholder="Title"
                label="Title"
                value={listing.title}
                size="small"
              />
            </div>
            <div className="newListingInputWrapper">
              <TextField
                name="description"
                onChange={onListingChange}
                variant="outlined"
                placeholder="Description"
                label="Description"
                value={listing.description}
                multiline={true}
                rows={4}
                size="small"
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <div className="newListingInputWrapper">
              <h3>Address:</h3>
              <TextField
                name="address"
                onChange={onAddressChange}
                variant="outlined"
                placeholder="Address"
                label="Address"
                value={address.address}
                size="small"
              />
            </div>
            <div className="newListingInputWrapperGroup">
              <TextField
                name="city"
                onChange={onAddressChange}
                variant="outlined"
                placeholder="City"
                type="dropdown"
                label="City"
                value={address.city}
                size="small"
              />
              <div className="newListingpacer" style={{ width: "5%" }}></div>
              <TextField
                name="zipCode"
                onChange={onAddressChange}
                variant="outlined"
                placeholder="Zip-Code"
                label="Zip-Code"
                value={address.zipCode}
                size="small"
              />
            </div>
            <div className="newListingInputWrapper">
              <TextField
                name="province"
                onChange={onAddressChange}
                variant="outlined"
                placeholder="Provice"
                label="Province"
                value={address.province}
                size="small"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="newListingAmenitiesWrapper">
            <button
              name="pool"
              id={amenity.pool ? "amenitiesButtonAlternate" : "amenitiesButton"}
              onClick={onAmenityChange}
              styles={{ ...buttonStyle }}
            >
              Pool
            </button>
            <button
              name="patio"
              id={
                amenity.patio ? "amenitiesButtonAlternate" : "amenitiesButton"
              }
              onClick={onAmenityChange}
            >
              Patio
            </button>
            <button
              name="barbeque"
              id={
                amenity.barbeque
                  ? "amenitiesButtonAlternate"
                  : "amenitiesButton"
              }
              onClick={onAmenityChange}
              styles={{ width: "10%", height: "10%" }}
            >
              BBQ
            </button>
            <button
              name="garden"
              id={
                amenity.garden ? "amenitiesButtonAlternate" : "amenitiesButton"
              }
              onClick={onAmenityChange}
              styles={{ width: "10%", height: "10%" }}
            >
              Garden
            </button>
            <button
              name="parking"
              id={
                amenity.parking ? "amenitiesButtonAlternate" : "amenitiesButton"
              }
              onClick={onAmenityChange}
              styles={{ width: "10%", height: "10%" }}
            >
              Parking
            </button>
            <button
              name="securityCam"
              id={
                amenity.securityCam
                  ? "amenitiesButtonAlternate"
                  : "amenitiesButton"
              }
              onClick={onAmenityChange}
              styles={{ width: "10%", height: "10%" }}
            >
              Security Cams
            </button>
          </div>
        );
      case 3:
        return (
          <div>
            <div className="newListingInputWrapper">
              <h3>Select:</h3>
              <TextField
                name="guestsLimit"
                onChange={onListingChange}
                variant="outlined"
                placeholder="Guests"
                label="Guests"
                value={listing.guestsLimit}
                type="number"
                size="small"
                InputProps={{
                  inputProps: {
                    type: "number",
                    min: 1,
                    max: 16,
                  },
                }}
              />
            </div>
            <div className="newListingInputWrapper">
              <TextField
                name="bedrooms"
                // onChange={onListingChange}
                variant="outlined"
                placeholder="Bedrooms"
                label="Bedrooms"
                // value={listing.rate}
                type="number"
                size="small"
                InputProps={{
                  inputProps: {
                    type: "number",
                    min: 1,
                    max: 50,
                  },
                }}
              />
            </div>
            <div className="newListingInputWrapper">
              <TextField
                name="bathrooms"
                // onChange={onListingChange}
                variant="outlined"
                placeholder="Bathrooms"
                label="Bathrooms"
                // value={listing.rate}
                type="number"
                size="small"
                InputProps={{
                  inputProps: {
                    type: "number",
                    min: 1,
                    max: 50,
                  },
                }}
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <div className="newListingInputWrapper">
              <h3>$$$</h3>
              <TextField
                name="rate"
                onChange={onListingChange}
                variant="outlined"
                placeholder="Rate"
                label="$"
                value={listing.rate}
                type="number"
                size="small"
                InputProps={{
                  inputProps: {
                    type: "number",
                    min: 1,
                    max: 1000,
                  },
                }}
              />
            </div>
          </div>
        );
      case 5:
        return (
          <div>
            <Dropzone
              onDrop={(acceptedFiles) => {
                const arr = [];
                acceptedFiles.forEach(async (file) => {
                  const reader = new FileReader();

                  reader.onabort = () =>
                    console.log("file reading was aborted");
                  reader.onerror = () => console.log("file reading has failed");
                  reader.onload = () => {
                    // Do whatever you want with the file contents
                    const binaryStr = reader.result;
                    arr.push(binaryStr);
                    setPreview((prev) => [...prev, binaryStr]);
                  };

                  reader.readAsDataURL(file);
                });
                setImages(acceptedFiles);
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p className="newListingDropZone">
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
            {/* <input type="file" onChange={(e)=>{setImages(e.target.files[0])}}></input>
            <Button onClick={onImageUpload}>Upload</Button> */}
          </div>
        );
      default:
        return "Unknown step";
    }
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  ////////////////////////////////////////////StepperFunction////////////////////////////

  return (
    <div className="newListingContainer">
      <div className="newListingLeft">{getStepContentLeft(activeStep)}</div>
      <div className="newListingRight">
        <div className={classes.root}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        disabled={
                          activeStep == steps.length - 1 && images == []
                            ? true
                            : false
                        }
                        onClick={
                          activeStep === steps.length - 1
                            ? onAddClick
                            : handleNext
                        }
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? "Upload" : "Next"}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </Paper>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewListing;

{
  /* Next Section */
}
{
  /* Title Description Quantity; */
}
{
  /* 
        <div className="newListingInputWrapperGroup">
          <TextField
            name="rate"
            onChange={onListingChange}
            variant="outlined"
            placeholder="Rate"
            label="Rate"
            value={listing.rate}
            type="number"
            size="small"
          />
          <div className="newListingpacer" style={{ width: "5%" }}></div>
          <TextField
            name="guestsLimit"
            onChange={onListingChange}
            variant="outlined"
            placeholder="Guests"
            label="Guests"
            value={listing.guestsLimit}
            type="number"
            size="small"
            InputProps={{
              inputProps: {
                type: "number",
                min: 1,
                max: 5,
              },
            }}
          />
        </div>

        
        <div className="newListingInputWrapperGroup">
          <TextField
            name="lat"
            variant="outlined"
            placeholder="Latitude"
            label="Latitude"
            size="small"
          />
          <div className="newListingpacer" style={{ width: "5%" }}></div>
          <TextField
            name="long"
            variant="outlined"
            placeholder="Longitude"
            label="Longitude"
            size="small"
          />
        </div>

        <div className="newListingInputWrapper">
          <Button onClick={onAddClick} variant="contained">
            Add Listing
          </Button>
        </div> */
}
