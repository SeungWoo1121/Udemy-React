import {useState} from 'react';
import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost';

function PostsList() {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');


    function bodyChangeHandler(event) {
        setEnteredBody (event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }
    return (
    <>
        <NewPost onBodyChange = {bodyChangeHandler} onAuthorChange = {authorChangeHandler}/>
    <ul className = {classes.posts}>
        <Post author = {enteredAuthor} body = {enteredBody} />
        <Post author = "Coding" body = "is too bad, be bad for one's health, too many stress"/>
	    <Post author = "that's too bad!" body = "the person who made the code is a very bad person"/>
        <Post author = "React begineer class" body = "fighting everyone! "/>
    </ul>
    </>
    );
}

export default PostsList;