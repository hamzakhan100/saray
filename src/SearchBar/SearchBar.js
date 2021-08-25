

import "./SearchBar.css";
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { DatePicker } from "@material-ui/pickers";
import { Button } from '@material-ui/core'





const SearchBar = () => {


  const [date, changeDate] = useState(new Date());

  let handleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
  }


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
        <input placeholder="Location" className="searchBarInputs" lable="Location" />
        <input placeholder="Check in" className="searchBarInputs" type="date" lable="Check in" />
        <input placeholder="Check out" className="searchBarInputs" type="date" lable="Check out" />
        <input placeholder="Guests" type="number" className="searchBarInputs" lable="Guests" />
        <Button className="searchBarButton" onClick={handleClick}>Search</Button>


      </form>

    </div>
  )
}

export default SearchBar;