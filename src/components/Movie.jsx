import { useNavigate } from "react-router-dom";
import TicketCounter from "../components/TicketCounter";

function Movie(props) {

    const navigate = useNavigate();

    /* Object destructuring */
    const { id , title, year, genre, poster, description } = props.movie;

    const goToDetails = () => {
        navigate(`/home/${id}/${title}/${description}`);
    }
   
    return (
           <div>
                <div className="movieBox">
                    <h2 className="title margin">{title}</h2>
                    <p className="margin">{year}</p>
                    <p className="margin">{genre}</p>
                    <img src={poster} alt=""/>
                    <p className="ticket-purchase margin">Purchase Ticket Now</p>
                    <p className="ticket-price margin">Only 12$</p>
                    <TicketCounter title={title}/>
                    <button className="movie-details-btn" onClick={goToDetails}>Show Movie Details</button>
                </div>
           </div>
    )

}

export default Movie;