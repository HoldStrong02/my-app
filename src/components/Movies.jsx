import { useState } from "react";
import Movie from "../components/Movie";
import moviesData from "../data/moviesData"
import Comments from "./comments/Comments";
import CreateArea from "./comments/CreateArea";

function Movies() {

    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false)
    }, 1000)


    const [comment, setComment] = useState([]);


    function addComment(newComment) {
        setComment(prevComments => {

            return [...prevComments, newComment];
        })
    }

    function deleteComment(id) {
        setComment(prevComments => {
            return prevComments.filter((commentItem, index) => {
            return index !== id;
            })
        })
    }


    return (
       <div>
            <div className="container">
                {isLoading && <p className="loading">Loading Available Movies</p>}
                {!isLoading && moviesData.map(m => <Movie movie={m} key={m.id}/>)}
            </div>

            <div>
                {!isLoading && <CreateArea onAdd={addComment}/>}
                {
                    
                    comment.map((commentItem, index) =>  {
                    return <Comments key={index} id={index} title={commentItem.title} content={commentItem.content} onDelete={deleteComment}/>})
                }
                
            </div>
                
            
       </div>
    )
}

export default Movies;