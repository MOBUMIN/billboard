import React, { useEffect, useContext, createContext } from 'react';
import axios from 'axios';
import { usePostState, usePostDispatch } from './PostModel';

const GetPostContext = createContext(()=>{});

function PostViewModel({children}) {
	const postDispatch = usePostDispatch();

	useEffect(() => {
		axios.get('/api/post')
		.then(res => {
			postDispatch(res.data.post);
		})
	}, [])

	const getPost = () => {
		axios.get('/api/post')
		.then(res => {
			postDispatch(res.data.post);
		})
	}

	return (
		<GetPostContext.Provider value={getPost}>
			{children}
		</GetPostContext.Provider>
	)
}

export default PostViewModel;
export function useGetPost() {
	const context = useContext(GetPostContext);
	return context;
}