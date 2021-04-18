import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ListPage, PostPage, LandingPage, PostDetailPage, EditPage } from "../pages"

function Routers() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/post" component={PostPage} />
				<Route exact path="/list" component={ListPage} />
				<Route exact path="/post/:postId" component={PostDetailPage} />
				<Route exact path="/edit/:postId" component={EditPage} />
			</Switch>
		</Router>
	)
}

export default Routers;
