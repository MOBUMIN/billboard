import React from 'react'
import { Container } from '@material-ui/core';
import Nav from './Nav'

function Layout({ children }) {
	return (
		<>
			<Container component="main" maxWidth="sm">
				<Nav />
				{/* <br /> 코드 안에 br을 잘 안 씀  */}
			</Container>
			<Container maxWidth="sm">
				{children}
			</Container>
		</>
	)
}

export default Layout
