function Post(props) { // 함수이름 첫글자는 대문자
    return (
    <div>
        <p>{props.author}</p>
        <p>{props.body}</p>
    </div>
    );
} 

export default Post;