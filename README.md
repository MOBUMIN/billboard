본 프로젝트에 들어가기에 앞서 리액트에 적응하기 위해 간단한 게시판을 구현함.

![소개gif](https://user-images.githubusercontent.com/57705512/107053871-b6c50f80-6812-11eb-9e94-45d44cf3eb5e.gif)

# 구조

src>Component

Layout.js 페이지에서 불러오는 레이아웃

Nav.js 레이아웃에서 위에 있는 Navigation Bar

src>pages

index.js export전용

LandingPage.js 사이트에 들어왔을 때 보여지는 기본 페이지

ListPage.js '/list', 포스트 목록을 볼 수 있는 페이지

PostPage.js '/post', 포스트를 작성할 수 있는 페이지

PostDetailPage.js '/post/:id', 포스트를 클릭했을 때 뜨는 페이지 ( => 수정, 삭제 가능 )

EditPage.js '/edit/:id', 수정을 눌렀을 때 뜨는 페이지


backend

간단하게 postData.json파일을 만들어뒀음.

해당 파일로 post, get, delete 등 함.

## 실행 방법
메인 폴더에서 npm start, backend 폴더에서 npm start.

