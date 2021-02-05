import React, { useState } from 'react'
import { Grid, TextField, Button } from '@material-ui/core';
import Layout from '../Component/Layout'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
	container: {
	  margin:'5% 0 0 0'
	},
  }));

function PostPage(props) {
	const classes = useStyles();

	const [Title, setTitle] = useState("")
	const [Nickname, setNickname] = useState("")
	const [Content, setContent] = useState("")

	const onTitleHandler=(event)=>{
		setTitle(event.currentTarget.value)
	}
	const onNicknameHandler=(event)=>{
		setNickname(event.currentTarget.value)
	}
	const onContentHandler=(event)=>{
		setContent(event.currentTarget.value)
	}

	const onsubmitHandler=(event)=>{
		event.preventDefault();
		let body = {
			title: Title,
			nickname: Nickname,
			content: Content
		}
		axios.post('api/post', body)
		.then(response => {
			alert('포스팅 성공')
			console.log('포스팅 성공')
			props.history.push('/list')
		})
	}
	return (
		<Layout>
			<Grid container className={classes.container} spacing={3}>
				<Grid 
					container
					spacing={3}
					direction="row">
					<Grid item xs={8}>
						<form noValidate>
							<TextField 
								fullWidth
								placeholder="제목을 입력하세요."
								id="title"
								label="Title"
								value={Title}
								onChange={onTitleHandler}
								InputLabelProps={{
									shrink: true,
								  }} />
						</form>
					</Grid>
					<Grid item xs>
						<form noValidate>
							<TextField
								placeholder="닉네임을 입력하세요."
								id="nickname"
								label="Nickname"
								value={Nickname}
								onChange={onNicknameHandler}
								InputLabelProps={{
									shrink: true,
								  }} />
						</form>
					</Grid>
					<Grid item xs={12}>
						<form noValidate>
							<TextField
								variant="outlined"
								multiline
								fullWidth
								id="postcontent"
								label="Post Content"
								value={Content}
								onChange={onContentHandler}
								InputLabelProps={{
									shrink: true,
								}} />
						</form>
					</Grid>
					<Grid item>
						<Button variant="contained" onClick={onsubmitHandler}>Submit</Button>
					</Grid>
				</Grid>
			</Grid>
		</Layout>
	)
}

export default PostPage
