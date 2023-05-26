import { useState } from "react";

function TicketCounter(props) {

    const [counter, setCounter] = useState(0);

    const [ticketPrice, setTicketPrice] = useState(0);

    const increaseCounter = () => {
        setCounter(counter => counter + 1);
        setTicketPrice(ticketPrice => ticketPrice + 12);
    }

    const decreaseCounter = () => {
        setCounter(counter => counter - 1);
        setTicketPrice(ticketPrice => ticketPrice - 12);
    }

    if(counter < 0) {
        setCounter(0);
        setTicketPrice(0);
    }

    const purchase = () => {

        if(counter === 0) {
            alert("Add Ticket First");
        }

        else {
            setCounter(0);
            setTicketPrice(0);
            // eslint-disable-next-line no-useless-concat
            alert("Successful purchase of " + counter + " '" + props.title + "'" + " ticket/s worth of " + ticketPrice + "$");
        }
    }



    return (
        <div>
            <p className="margin">Number Of Tickets: {counter}</p>
            <p className="margin">Price: {ticketPrice}$</p>
            <div className="btns">
                <button className="add-btn" onClick={decreaseCounter}>-</button>
                <button className="purchase-btn" onClick={purchase}>Purchase</button>
                <button className="add-btn" onClick={increaseCounter}>+</button>
            </div>
        </div>
    )
}

export default TicketCounter;