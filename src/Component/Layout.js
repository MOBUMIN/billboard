import React from 'react'
import { Container } from '@material-ui/core';
import Nav from './Nav'

function Layout({ children }) {
	return (
		<>
			<Container component="main" maxWidth="sm">
				<Nav />
				<br />
			</Container>
			<Container maxWidth="sm">
				{children}
			</Container>
		</>
	)
}

export default Layout
