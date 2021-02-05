본 프로젝트에 들어가기에 앞서 리액트에 적응하기 위해 간단한 게시판을 구현함.

![image](https://user-images.githubusercontent.com/57705512/107053786-96955080-6812-11eb-9ad1-a579c0b37cee.png)

# 구조

src>Component

Layout.js 페이지에서 불러오는 레이아웃

Nav.js 레이아웃에서 위에 있는 Navigation Bar

src>pages

index.js export전용

LandingPage.js 사이트에 들어왔을 때 보여지는 기본 페이지

ListPage.js '/list', 포스트 목록을 볼 수 있는 페이지

PostPage.js '/post', 포스트를 작성할 수 있는 페이지


backend

간단하게 postData.json파일을 만들어뒀음.

해당 파일로 post, get, delete 등 함.

## 실행 방법
메인 폴더에서 npm start, backend 폴더에서 npm start.

