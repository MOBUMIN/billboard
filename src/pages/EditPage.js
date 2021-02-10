import React, { useState, useEffect } from 'react'
import { Grid, TextField, Button } from '@material-ui/core';
import Layout from '../Component/Layout'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
	container: {
	  margin:'5% 0 0 0'
	},
  }));

function EditPage(props) { // Edit + Post 해서 하나의 페이지로 구성하는 방식 ? = > 조건부 렌더링 검색
	const postId = props.match.params.postId;
	const variable = { postId: postId };
	const [Title, setTitle] = useState("");
	const [Nickname, setNickname] = useState("");
	const [Content, setContent] = useState("");

	useEffect(() => {
		axios.post('/api/postDetail', variable)
		.then(response=>{
			setTitle(response.data.title)
			setNickname(response.data.nickname)
			setContent(response.data.content)
		})
	}, [])

	const classes = useStyles();

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
			id: postId,
			title: Title,
			nickname: Nickname,
			content: Content
		}
		axios.patch('/api/post', body)
		.then(response => {
			if(response.data.editSuccess){
				alert('포스트 수정 성공')
			} else alert('포스트 수정 실패 이유 : '+response.data.message)
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

export default EditPage;
