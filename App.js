import {
BrowserRouter as Router,
Switch,
Route,
Redirect,
} from "react-router-dom";

import Home from "./components/Home";
import Base from "./components/Base";

function App() {
return (
	<>
	<Router>
		<Switch>
		<Route exact path="/" component={Base} />
    <Route path="/home" component={Home}></Route>
		<Redirect to="/" />
		</Switch>
	</Router>
	</>
);
}

export default App;
