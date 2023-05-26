import { useState } from "react";

function CreateArea(props) {

    const [comment, setComment] = useState({
        title: '',
        content:''
    })

    function handleChange(event) {
       const {name, value} =  event.target;

       setComment(prevNote => {
        return {
            ...prevNote,
            [name]:value
        };
       });
    }

    function submitComment(event) {
        props.onAdd(comment)
        event.preventDefault();

    }

    return (
        <div>
            <form>
                <input type="text" onChange={handleChange} value={comment.title} name="title" placeholder="Title" />
                <textarea name="content" onChange={handleChange} value={comment.content} placeholder="Leave a comment..." rows="3"></textarea>
                <button onClick={submitComment}>Add</button>
            </form>
        </div>
    )
}

export default CreateArea;