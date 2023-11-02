import App from "../../App";
import BlogWrap from "../../miniBlog/components/blogWrap";
import TodoWrap from "../../todoList/components/TodoWrap";
import LogoType from "./logobox/logotype";
// 컴포넌트 임포트

const navLinks = [
    {title : 'home', link: '/', ruth:"", img:<LogoType/>}, // 임시 홈화면
    {title : 'blog', link: '/blog', ruth: <BlogWrap />, img:""},
    {title : 'todolist', link: '/todolist', ruth: <TodoWrap/>, img:""},
    /* {title : 'home', link: '/'}, */
]
// title, link, ruth 설정
// title은 키값과 버튼 텍스트를 설정한다.
// link는 url의 path값을 설정한다.
// ruth는 해당 url이 보여줄 화면의 컴포넌트를 설정한다.

export default navLinks;