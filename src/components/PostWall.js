import { useState, useEffect, useContext } from 'react';
import { auth, db } from '../App';
import { collection, getDocs } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import "firebase/firestore";

const PostWall = () => {
    const db = firebase.firestore();
    const postsRef = db.collection("Posts");
    
    useEffect (() => {
        postsRef.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        });
    });
    
    return (
        <div>
            hello
        </div>
    );
}

// insert 
/*
const CreatePost = (props) => {
    const [displayForm, setDisplayForm] = useState(false);
    const [topic, setTopic] = useState("");
    const [content, setContent] = useState("");

    const handleClick = () => {
        if (displayForm == false) setDisplayForm(true);
        else setDisplayForm(false);
    };

    const submit = async(e) => {     
        e.preventDefault();
        console.log(content);
        const { data, error } = await supabase
            .from('post')
            .insert([
            { content: `${content}`, topic: `${topic}`, author_id: `${props.user_id}` },
            ])
            .select()
        if (error){
            console.log(error);
        }
        console.log(data);
    } ;
    return(
        <div>
            <button className="popup-form" onClick={handleClick}> + </button>
            {displayForm &&
            <form onSubmit={submit}>
                <h1> Make a Post</h1>
                <label> What is the topic of your thoughts? </label>
                <input type="text" placeholder="Enter a topic..." name="topic" onChange={(e) =>{setTopic(e.target.value)}} required /> 
                <div />
                <label> What are you thinking? </label>
                <input type="text" placeholder="Type here..." name="post-content" onChange={(e)=> {setContent(e.target.value)}} required />
                <input type="submit" />
            </form>
            }
        </div>
    );
}// pass props to make post from PostWall query
const Post = (props) => {
    return(
        <div className='container post'>
            <div className='header'>
                <div className='content'>
                    hello
                </div>
            </div>
        </div>
    )
}


const Comments = () => {
    return(
        <div className='comments'>
            <h1 className='comments user'></h1>
            <h1 className='comment content'></h1>
        </div>
    )
}
*/
export default PostWall;
