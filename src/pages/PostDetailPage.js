import React, { useEffect, useState } from 'react';
import Layout from '../Component/Layout';
import { Grid, Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
	container: {
	  margin:'5% 0 0 0'
	},
	paperTitle: {
		padding: theme.spacing(2),
		color: theme.palette.text,
		fontSize: '1.5rem'
	  },
	paperContent: {
		padding: theme.spacing(2),
		fontSize: '1.1rem'
	}
  }));

function PostDetailPage(props) {
	const classes = useStyles();
	const postId = props.match.params.postId;
	const variable = { postId: postId };
	const [PostDetail, setPostDetail] = useState("");

	const onDeleteHandler=(event)=>{
		event.preventDefault();
		axios.delete('/api/post', {data:{postId}})
		.then(response => {
			alert('포스트 삭제!')
			props.history.push('/list')
		})
	}

	useEffect(() => {
		axios.post('/api/postDetail', variable)
		.then(response=>{
			setPostDetail(response.data)
		})
	}, [])

	return (
		<Layout>
			<Grid container className={classes.container} spacing={3}>
				<Grid 
					container
					spacing={3}
					direction="row">
					<Grid item xs={12}>
						<Paper className={classes.paperTitle}>
							{PostDetail.title}
						</Paper>
					</Grid>
					<Grid item xs={12}>
						<Paper className={classes.paperContent}>
							{PostDetail.content}
						</Paper>
					</Grid>
					<Grid container spacing={2}>
						<Grid item>
							<Button
								variant="contained"
								color="primary"
								component={Link} to={`/edit/${postId}`}>
								EDIT
							</Button>
						</Grid>
						<Grid item>
							<Button variant="contained" color="secondary" onClick={onDeleteHandler}>DELETE</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Layout>
	)
}

export default PostDetailPage
