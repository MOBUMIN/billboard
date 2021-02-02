import React from 'react'
import { Grid, Container, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Typography component="h1" variant="h5" align="center">
					BillBoard
				</Typography>
			</Grid>
			<Grid container justify="flex-end" spacing={3}>
				<Grid item>
					<Button
						component={ Link } to="/list"
						variant="contained"
						color="secondary"
						size="small"
					>
						List
					</Button>
				</Grid>
				<Grid item>
					<Button
						component={ Link } to="/post"
						variant="contained"
						color="primary"
						size="small"
					>
						Post
					</Button>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Nav
