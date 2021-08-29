import "./SearchBar.css";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { DatePicker } from "@material-ui/pickers";
import {
  Button,
  Select,
  FormControl,
  FormHelperText,
  MenuItem,
  InputLabel,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: 1,
    width: "100%",
    height: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SearchBar = ({ handleChange, handleClick }) => {
  const classes = useStyles();
  const [date, changeDate] = useState(new Date());
  const [city, setCity] = React.useState("");

  const handleCityChange = (e) => {
    handleChange(e);
    setCity(e.target.value);
  };

  return (
    <div className="searchBarContainer">
      <form className="searchBarForm" noValidate autoComplete="off">
        {/* <TextField id="outlined-basic" label="Destination" variant="filled" className="searchInput" />
        <DatePicker
          autoOk
          variant="static"
          openTo="day"
          value={date}
          onChange={changeDate}
        /> */}
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">City</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={city}
            onChange={handleCityChange}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Islamabad"}>Islamabad</MenuItem>
            <MenuItem value={"Lahore"}>Lahore</MenuItem>
            <MenuItem value={"Rawalpindi"}>Rawalpindi</MenuItem>
            <MenuItem value={"Peshawar"}>Peshawar</MenuItem>
          </Select>
        </FormControl>
        {/* <input placeholder="Check in" className="searchBarInputs" type="date" lable="Check in" />
        <input placeholder="Check out" className="searchBarInputs" type="date" lable="Check out" />
        <input placeholder="Guests" type="number" className="searchBarInputs" lable="Guests" /> */}
        <Button className="searchBarButton" onClick={handleClick}>
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
