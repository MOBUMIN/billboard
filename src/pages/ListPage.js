import React, { useState, useEffect } from 'react'
import { List, ListItem, ListItemText, Divider } from '@material-ui/core';
import Layout from '../Component/Layout'
import axios from 'axios'
import {Link} from "react-router-dom"

function ListPage() {
	const [Post, setPost] = useState([]);

	useEffect(() => {
		axios.get('/api/post')
		.then(response =>{ 
			setPost(response.data.post)
		})
	}, [])
	// [] 안에 없으면 그냥 한 번만 받아옴 = > useEffect 참고
	// 두번째 인자가 아예 없으면 그냥 계속 실행 ?
	
	const postCard = Post.map((post,index)=>{
		return(
			<ListItem
				button component={Link} to={`/post/${index+1}`}
				key={index}
				alignItems="center"
			>
				<ListItemText primary={index+1} />
				<ListItemText primary={post.title} />
				<ListItemText primary= {post.nickname} />
			</ListItem>
		)
	})
	return (
		<Layout>
			<List>
				<ListItem alignItems="center">
					<ListItemText primary="id" />
					<ListItemText primary= "title" />
					<ListItemText primary= "nickname" />
				</ListItem>
				<Divider />
				{postCard}
			</List>
		</Layout>
	)
}

export default ListPage
