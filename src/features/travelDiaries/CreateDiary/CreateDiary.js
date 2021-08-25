import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { Editor, EditorState } from "draft-js";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import "draft-js/dist/Draft.css";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      //   width: "50ch",
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

const CreateDiary = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [state, setState] = useState({
    title: "",
    city: "",
    Description: "",
    picture: "",
  });

  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  const editor = React.useRef(null);

  function focusEditor() {
    editor.current.focus();
  }

  React.useEffect(() => {
    focusEditor();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const SubmitForm = (e) => {
    e.preventDefault();
    alert("You have submitted the form.");
    console.log("aaa");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
      // [e.target.city]: value
    });
  };

  {
    console.log("stateeee", state);
  }
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
            <TextField
              id="standard-basic"
              label="Title"
              value={state.title}
              name="title"
              onChange={handleChange}
            />

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
                <MenuItem value={"rawalpindi"}>rawalpindi</MenuItem>
                <MenuItem value={"peshawar"}>peshawar</MenuItem>
              </Select>
            </FormControl>

            <div onClick={focusEditor} className="editor-layout">
              <Editor
                ref={editor}
                editorState={editorState}
                onChange={(editorState) => setEditorState(editorState)}
              />
            </div>
            <TextField
              id="standard-basic"
              type="text"
              label=" Short Description"
              value={state.Description}
              name="Description"
              onChange={handleChange}
            />

            <TextField
              id="standard-basic"
              type="file"
              value={state.picture}
              name="picture"
              onChange={handleChange}
              className="picture"
            />
            <hr />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreateDiary;
