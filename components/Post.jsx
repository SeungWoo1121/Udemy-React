import classes from './Post.module.css';

function Post(props) { // 함수이름 첫글자는 대문자
    return (
    <li className = {classes.post}>
        <p className = {classes.author}>{props.author}</p>
        <p className = {classes.text}>{props.body}</p>
    </li>
    );
} 

export default Post;