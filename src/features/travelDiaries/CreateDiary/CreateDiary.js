import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import ReactQuill from 'react-quill';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import storage from '../../../firebase';

import { useHistory } from 'react-router-dom';

import 'react-quill/dist/quill.snow.css';
import './style.css';
import api from '../api';

const CreateDiary = () => {
	const [open, setOpen] = React.useState(false);
	const classes = useStyles();
	const history = useHistory();
	const [state, setState] = useState({
		title: '',
		city: '',
		description: '',
		imageUrl: ''
	});

	const [content, setContent] = useState('');
	const [loading, setLoading] = useState(false);

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
			history.push('/SearchDiaries');
		} catch (error) {
			alert('Error');
		}
	};

	const onContentChange = (value) => {
		setContent(value);
	};

	const onFileChange = async (e) => {
		setLoading(true);
		const file = e.target.files[0];
		const name = file.name + Date.now();
		const uploadTask = storage.ref('/blogs/' + name).put(file);
		uploadTask.on('state_changed', (snapshot) => {
			if (
				Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				) === 100
			)
				alert('Image Uploaded');
		});
		try {
			await uploadTask;
			const url = await storage
				.ref('/blogs')
				.child(name)
				.getDownloadURL();
			setState((st) => ({ ...st, imageUrl: url }));
			setLoading(false);
		} catch (error) {
			alert('Error');
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setState({
			...state,
			[name]: value
		});
	};

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
								<MenuItem value={'Islamabad'}>
									Islamabad
								</MenuItem>
								<MenuItem value={'Lahore'}>Lahore</MenuItem>
								<MenuItem value={'Rawalpindi'}>
									Rawalpindi
								</MenuItem>
								<MenuItem value={'peshawar'}>Peshawar</MenuItem>
							</Select>
						</FormControl>

						<div className="editor-layout">
							<ReactQuill
								onChange={onContentChange}
								value={content}
							/>
						</div>

						<TextField
							id="standard-basic"
							type="text"
							label=" Short Description"
							value={state.Description}
							name="description"
							onChange={handleChange}
						/>

						<TextField
							id="standard-basic"
							type="file"
							value={state.picture}
							name="picture"
							onChange={onFileChange}
							className="picture"
						/>
						<hr />
						<Button
							variant="contained"
							color="primary"
							type="submit"
							disabled={loading}
						>
							Submit
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};
export default CreateDiary;
const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1)
			//   width: "50ch",
		}
	},
	button: {
		display: 'block',
		marginTop: theme.spacing(2)
	},
	formControl: {
		// width: "50ch",
		margin: theme.spacing(1),
		minWidth: 120
	}
}));
