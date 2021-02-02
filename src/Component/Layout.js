import React from 'react'
import { Grid, Container, Typography, Button } from '@material-ui/core';
import Nav from './Nav'

function Layout({ children }) {
	return (
		<Container component="main" maxWidth="sm">
			<Nav />
			<br />
			{children}
		</Container>
	)
}

export default Layout
