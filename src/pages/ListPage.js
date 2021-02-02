import React from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import Layout from '../Component/Layout'

function tempData(id, title, date){
	return { id, title, date };
}

const rows = [
	tempData('1', 'hello', '2021-01-31'),
	tempData('2', 'Beautiful Days', '2021-02-01'),
	tempData('3', 'One Hundred is so funny', '2021-02-02')
];

function ListPage() {
	return (
		<Layout>
			<TableContainer component={Paper}>
				<Table aria-label="post list">
					<TableHead>
						<TableRow>
							<TableCell>Id</TableCell>
							<TableCell>title</TableCell>
							<TableCell>Date</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row)=>(
							<TableRow key={row.id}>
								<TableCell component="th" scope="row">
									{row.id}
								</TableCell>
								<TableCell>{row.title}</TableCell>
								<TableCell>{row.date}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Layout>
	)
}

export default ListPage
