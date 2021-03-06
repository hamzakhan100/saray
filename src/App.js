import Home from './Home/Home';
import NavBar from './NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import {
	Login,
	Profile,
	SignUp,
	NewListing,
	MyListings,
	Listing,
	SearchDiaries,
	ViewDiary,
	CreateDiary
} from './features';

function App() {
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Router>
				<NavBar />
				<Switch>
					<Route path="/" exact component={Home}></Route>
					<Route exact path="/register" component={SignUp} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/newListing" component={NewListing} />
					<Route exact path="/myListings" component={MyListings} />
					<Route
						exact
						path="/listing/:listingId"
						component={Listing}
					/>
					<Route path="/SearchDiaries" component={SearchDiaries} />
					<Route
						exact
						path="/viewDiary/:blogId"
						component={ViewDiary}
					/>
					<Route path="/createDiary" component={CreateDiary} />
					{/* <Route exact path="/chat" component={AllChats} /> */}
				</Switch>
			</Router>
		</MuiPickersUtilsProvider>
	);
}

export default App;
