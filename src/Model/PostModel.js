import React, { useState, useContext } from 'react'

const PostContext = React.createContext();
const PostContextDispatch = React.createContext(() => {});

function PostModel({children}) {
	const [post, setPost] = useState();
	return (
		<PostContext.Provider value={post}>
			<PostContextDispatch.Provider value={setPost}>
				{children}
			</PostContextDispatch.Provider>
		</PostContext.Provider>
	)
}

export default PostModel

export function usePostState(){
	const context = useContext(PostContext);
	return context;
}

export function usePostDispatch(){
	const context = useContext(PostContextDispatch);
	return context;
}