import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	title: {
	  padding: '5% 0 0 0 '
	},
  }));

function Nav() {
	const classes = useStyles();
	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Typography className={classes.title} component="h1" variant="h5" align="center">
					BillBoard
				</Typography>
			</Grid>
			<Grid container justify="flex-end" spacing={3}>
				<Grid item>
					<Button
						component={ Link } to="/list"
						variant="outlined"
						color="secondary"
						size="medium"
					>
						List
					</Button>
				</Grid>
				<Grid item>
					<Button
						component={ Link } to="/post"
						variant="outlined"
						color="primary"
						size="medium"
					>
						Post
					</Button>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Nav
