import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ListPage, PostPage, LandingPage } from "./pages"

function App() {
  return (
	<div>
		<Router>
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/post" component={PostPage} />
				<Route exact path="/list" component={ListPage} />
				{/* <Route exact path="/edit" component={} /> */}
			</Switch>
		</Router>
	</div>
  );
}

export default App;
