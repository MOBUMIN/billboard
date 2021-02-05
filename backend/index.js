const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const fs = require('fs');
const dbFile = 'postData.json';
const dbDataBuffer = fs.readFileSync(dbFile);
const dbJSON = dbDataBuffer.toString();
const data = JSON.parse(dbJSON);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, () => console.log(`app listening on port ${port}!`))

app.get('/api/hello', (req, res) => res.send('hello'));

app.get('/api/post', (req,res) => {
	// POST 내용 보기 전체 
	return res.status(200).json(data);
})

app.post('/api/postDetail', (req,res) => {
	// POST 내용 보기 
	return res.status(200).json(data.post[req.body.postId-1]);
})

app.post('/api/post', (req,res) => {
	// POST
	// 포스트 내용 받아오기 => 디비저장
	const inputData = req.body;
	// invalid input
	if(!inputData["title"] || !inputData["nickname"] || !inputData["content"] ){
		return res.json({ postSuccess:false, message:"내용 부족" })
	}
	var i = Object.keys(data.post).length;
	data.post[i] = { "id" : i+1, "title":inputData.title, "nickname":inputData.nickname, "content":inputData.content };
	fs.writeFileSync(dbFile, JSON.stringify(data));
	console.log(i+1+" 항목 추가")
	return res.status(200).json({postSuccess:true})
})

app.patch('/api/post', (req,res) => {
	// EDIT
	var inputData = req.body;
	if(!inputData["title"] || !inputData["nickname"] || !inputData["content"] ){
		return res.json({ editSuccess:false, message: "내용 부족" })
	}
	data.post[inputData["id"]-1] = inputData;
	fs.writeFileSync(dbFile, JSON.stringify(data));
	console.log(inputData["id"]+"변경")
	return res.status(200).json({editSuccess:true})
})

app.delete('/api/post', (req,res) => {
	// DELETE
	console.log(req.body);
	delete data.post[req.body.postId-1];
	data.post = data.post.filter( (item) => item!=null );
	fs.writeFileSync(dbFile, JSON.stringify(data));
	return res.status(200).json({success:true});
})
