// import "./NavBar.css";
// import { Link } from "react-router-dom";
// const NavBar = () => {
//   return (
//     <div className="navBarContainer">
// 		<div className="NavMenu">
//       <Link className="navlink" to="/">
//         Home
//       </Link>
//       <Link className="navlink" to="/newListing">
//         NewListing
//       </Link>
//       <Link className="navlink" to="/myListings">
//         MyListings
//       </Link>
//       <Link className="navlink" to="/listing">
//         Listing
//       </Link>
//       <Link className="navlink" to="/SearchDiaries">
//         SearchDiaries
//       </Link>
//       <Link className="navlink" to="/viewDiary">
//         ViewDiary
//       </Link>
//       <Link className="navlink" to="/createDiary">
//         createDiary
//       </Link>
// 	  <Link className="navlink" to="/profile">
//         profile
//       </Link>
//       <Link className="" to="/register">
//         Singup
//       </Link>
//       <Link className="navlink" to="/login">
//         Login
//       </Link>
// 	  </div>
//     </div>
//   );
// };

// export default NavBar;
import {
	AppBar,
	Toolbar,
	Typography,
	makeStyles,
	Button,
	IconButton,
	Drawer,
	Link,
	MenuItem,
  } from "@material-ui/core";
  import MenuIcon from "@material-ui/icons/Menu";
  import React, { useState, useEffect } from "react";
  import { Link as RouterLink } from "react-router-dom";
  
  const headersData = [
	{
	  label: "Home",
	  href: "/",
	},
	{
	  label: "newListing",
	  href: "/newListing",
	},
	{
	  label: "MyListing",
	  href: "/myListings",
	},
	{
	  label: "Listing",
	  href: "/listing",
	},
	{
	  label: "SearchDiaries",
	  href: "/SearchDiaries",
	},
	{
	  label: "viewDiary",
	  href: "/viewDiary",
	},
	// {
	//   label: "createDiary",
	//   href: "/createDiary",
	// },
	// {
	//   label: "profile",
	//   href: "/profile",
	// },
	// {
	//   label: "register",
	//   href: "/register",
	// },
	// {
	//   label: "login",
	//   href: "/login",
	// },
  ];
  
  const useStyles = makeStyles(() => ({
	header: {
	  backgroundColor: "white",
	  paddingRight: "79px",
	  paddingLeft: "118px",
	  "@media (max-width: 900px)": {
		paddingLeft: 0,
	  },
	},
	logo: {
	  fontFamily: "Work Sans, sans-serif",
	  fontWeight: 600,
	  color: "black",
	  textAlign: "left",
	},
	menuButton: {
	  fontFamily: "Open Sans, sans-serif",
	  fontWeight: 700,
	  size: "18px",
	  marginLeft: "38px",
	},
	toolbar: {
	  display: "flex",
	  justifyContent: "space-between",
	},
	drawerContainer: {
	  padding: "20px 30px",
	},
  }));
  
  export default function NavBar() {
	const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();
  
	const [state, setState] = useState({
	  mobileView: false,
	  drawerOpen: false,
	});
  
	const { mobileView, drawerOpen } = state;
  
	useEffect(() => {
	  const setResponsiveness = () => {
		return window.innerWidth < 900
		  ? setState((prevState) => ({ ...prevState, mobileView: true }))
		  : setState((prevState) => ({ ...prevState, mobileView: false }));
	  };
  
	  setResponsiveness();
  
	  window.addEventListener("resize", () => setResponsiveness());
  
	  return () => {
		window.removeEventListener("resize", () => setResponsiveness());
	  };
	}, []);
  
	const displayDesktop = () => {
	  return (
		<Toolbar className={toolbar}>
		  {femmecubatorLogo}
		  <div>{getMenuButtons()}</div>
		</Toolbar>
	  );
	};
  
	const displayMobile = () => {
	  const handleDrawerOpen = () =>
		setState((prevState) => ({ ...prevState, drawerOpen: true }));
	  const handleDrawerClose = () =>
		setState((prevState) => ({ ...prevState, drawerOpen: false }));
  
	  return (
		<Toolbar>
		  <IconButton
			{...{
			  edge: "start",
			  color: "black",
			  "aria-label": "menu",
			  "aria-haspopup": "true",
			  onClick: handleDrawerOpen,
			}}
		  >
			<MenuIcon />
		  </IconButton>
  
		  <Drawer
			{...{
			  anchor: "left",
			  open: drawerOpen,
			  onClose: handleDrawerClose,
			}}
		  >
			<div className={drawerContainer}>{getDrawerChoices()}</div>
		  </Drawer>
  
		  <div>{femmecubatorLogo}</div>
		</Toolbar>
	  );
	};
  
	const getDrawerChoices = () => {
	  return headersData.map(({ label, href }) => {
		return (
		  <Link
			{...{
			  component: RouterLink,
			  to: href,
			  color: "black",
			  style: { textDecoration: "none" },
			  key: label,
			}}
		  >
			<MenuItem>{label}</MenuItem>
		  </Link>
		);
	  });
	};
  
	const femmecubatorLogo = (
	  <Typography variant="h6" component="h1" className={logo}>
		Rentals
	  </Typography>
	);
  
	const getMenuButtons = () => {
	  return headersData.map(({ label, href }) => {
		return (
		  <Button
			{...{
			  key: label,
			  color: "black",
			  to: href,
			  component: RouterLink,
			  className: menuButton,
			}}
		  >
			{label}
		  </Button>
		);
	  });
	};
  
	return (
	  <header>
		<AppBar className={header}>
		  {mobileView ? displayMobile() : displayDesktop()}
		</AppBar>
	  </header>
	);
  }
