import { useParams } from "react-router-dom";

function MovieDetails() {

    const {id, title, description} = useParams();

    return (
        <div className="descriptionBox">

            <h1>{title}</h1>

            <div className="description">
                {description}
            </div>

            <div className="spoilers">
                Our description policy is to keep it short in order to avoid spoilers
            </div>
        </div>
    )
}

export default MovieDetails;