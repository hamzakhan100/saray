import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
// import { makeStyles } from '@material-ui/core/styles';
import Modal from "@material-ui/core/Modal";

import ReactQuill from "react-quill";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import storage from "../../../firebase";

import { useHistory } from "react-router-dom";

import "react-quill/dist/quill.snow.css";
import "./style.css";
import api from "../api";

const useStylesModal = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    height: 400,
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    left: "0",
    right: "0",
    marginLeft: "auto",
    marginRight: "auto",
    top: "18%",
  },
}));

const CreateDiary = () => {
  //Modal Styles
  const classess = useStylesModal();

  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = useState({
    title: "",
    city: "",
    description: "",
    imageUrl: "",
  });

  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const SubmitForm = async (e) => {
    e.preventDefault();
    try {
      await api.postBlog({ ...state, content });
      history.push("/SearchDiaries");
    } catch (error) {
      alert("Error");
    }
  };

  const onContentChange = (value) => {
    setContent(value);
  };

  const onFileChange = async (e) => {
    setLoading(true);
    const file = e.target.files[0];
    const name = file.name + Date.now();
    const uploadTask = storage.ref("/blogs/" + name).put(file);
    uploadTask.on("state_changed", (snapshot) => {
      if (
        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100) ===
        100
      )
        alert("Image Uploaded");
    });
    try {
      await uploadTask;
      const url = await storage.ref("/blogs").child(name).getDownloadURL();
      setState((st) => ({ ...st, imageUrl: url }));
      setLoading(false);
    } catch (error) {
      alert("Error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const body = (
    <div className={classess.paper}>
      <h4 id="simple-modal-title">Add these details</h4>
      <TextField
        style={{ marginTop: "20px", marginBottom: "20px" }}
        id="standard-basic"
        label="Title"
        value={state.title}
        name="title"
        onChange={handleChange}
      />

      <TextField
        style={{ marginTop: "20px", marginBottom: "20px" }}
        id="standard-basic"
        type="text"
        label=" Short Description"
        value={state.Description}
        name="description"
        onChange={handleChange}
      />

      <div style={{ display: "flex" }}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">
            Select City
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={state.city}
            name="city"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Islamabad"}>Islamabad</MenuItem>
            <MenuItem value={"Lahore"}>Lahore</MenuItem>
            <MenuItem value={"Rawalpindi"}>Rawalpindi</MenuItem>
            <MenuItem value={"peshawar"}>Peshawar</MenuItem>
          </Select>
        </FormControl>
        <div style={{ width: "1%" }}></div>
        <TextField
          style={{ marginTop: "20px", marginBottom: "20px" }}
          id="standard-basic"
          type="file"
          value={state.picture}
          name="picture"
          onChange={onFileChange}
          className="picture"
        />
      </div>
      <Button
        style={{ marginTop: "40px", marginBottom: "20px" }}
        variant="contained"
        color="primary"
        type="submit"
        disabled={loading}
        onClick={SubmitForm}
      >
        Submit
      </Button>
    </div>
  );

  return (
    <div className="form-main">
      <div className="aaa">
        <div className="form-heading">
          <h1>Create Diary</h1>
        </div>
        <div className="form-layout">
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={SubmitForm}
          >
            <div className="editor-layout">
              <ReactQuill
                onChange={onContentChange}
                value={content}
                style={{ height: "80%" }}
                theme="snow"
              />
            </div>

            <Button
              variant="contained"
              color="primary"
              onClick={handleModalOpen}
            >
              Submit
            </Button>
            <Modal
              open={openModal}
              onClose={handleModalClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {body}
            </Modal>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreateDiary;
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      //   width: "50ch",
      display: "flex",
      flexDirection: "column",
    },
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    // width: "50ch",
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
