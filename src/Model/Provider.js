import React from 'react'
import PostModel from './PostModel';
import Routers from '../routes';
import PostViewModel from './PostViewModel';

function Provider() {
	return (
		<PostModel>
			<PostViewModel>
				<Routers />
			</PostViewModel>
		</PostModel>
	)
}

export default Provider;
