import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ListPage, PostPage } from "./pages"

function App() {
  return (
	<div>
		<Router>
			<Switch>
			<Route exact path="/" component={ListPage} />
			<Route exact path="/post" component={PostPage} />
			{/* <Route exact path="/edit" component={} /> */}
			</Switch>
		</Router>
	</div>
  );
}

export default App;
