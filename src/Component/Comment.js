import React, { Component } from 'react';
import { Grid, Button, TextField } from '@material-ui/core';

class Comment extends Component {
	constructor(){
		super();
		this.state = {
			value: "",
			commentList: [],
		}
	}
	onCommentHandler = (event) =>{
		this.setState({
			value: event.target.value,
		})
	}
	onsubmitHandler = () =>{
		this.setState({
			commentList: this.state.commentList.concat([this.state.value]),
			value: "",
		})
	}
	render(){
		return(
			<Grid container>
				<Grid container>
					{this.state.commentList.map((comm,index)=>{
						return <Grid item xs={12}><li key={index}>{comm}</li></Grid>
					})}
				</Grid>
				<Grid container>
					<Grid item xs={9}>
						<form noValidate>
							<TextField
								variant="outlined"
								multiline
								fullWidth
								id="comment"
								label="Comment"
								value={Comment}
								onChange={this.onCommentHandler}
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</form>
					</Grid>
					<Grid item xs={3}>
						<Button variant="contained" onClick={this.onsubmitHandler}>Submit</Button>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

export default Comment
