import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import './style.css';
import post from '../../../post.json';
import Eachpost from './search/eachpost';
import api from '../api';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({

  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
  },
 
}));

const SearchDiaries = () => {
	const classes = useStyles();
	const history = useHistory();
	const [city, setCity] = React.useState('');
	const [open, setOpen] = React.useState(false);
	const [posts, setPosts] = React.useState([]);

	useEffect(() => {
		(async () => {
			try {
				const result = await api.getBlogs();
				setPosts(result.data.blogs);
			} catch (error) {
				alert('Error');
			}
		})();
	}, []);

	let handleOpen;
	let handleChange;
	let handleClose;
	let dropdataSearch;

	const handleOnClick = (blogId) => {
		history.push('/viewDiary/' + blogId);
	};

	if (post == null) {
		return (
			<div className="spin">
				<CircularProgress />
			</div>
		);
	} else {
		handleChange = (event) => {
			setCity(event.target.value);
		};

    dropdataSearch = posts.filter((item) => {
      return Object.keys(item).some((key) =>
        item[key]
          .toString()
          .toLowerCase()
          .includes(city.toString().toLowerCase())
      );
    });
  }
  return (
    <div>
      {posts.length != null ? (
        <div>
          <div style={{display:"flex",justifyContent:"center"}}className="searchdiary-main">
            <Button className="button" onClick={handleOpen}></Button>
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
                value={city}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Islamabad"}>Islamabad</MenuItem>
                <MenuItem value={"Lahore"}>Lahore</MenuItem>
                <MenuItem value={"Rawalpindi"}>rawalpindi</MenuItem>
                <MenuItem value={"Peshawar"}>peshawar</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="eachpostmain">
            {dropdataSearch.map((post) => {
              return <Eachpost post={post} onClick={handleOnClick} />
            })}
          </div>
        </div>
      ) : (
        <div className="spin">
          <CircularProgress />
        </div>
      )}
    </div>
  );

};

export default SearchDiaries;
