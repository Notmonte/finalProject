import { link } from "react-router-dom"


const SingleCard =(props)=> {

        return (
            <div className="col">
                <div className="card single-card h-100">
                <img src={`/images/${props.imgUrl}`} alt={`image of ${props.name}`} className="img-fluid image card-img-top single-image"/>
                <div className="card-body">
                    <h2 className="card-title album-title">
                        {props.name}
                    </h2>
                    <ul className="single-ul">
                        <li>Tower: {props.tower} </li>
                        <li>Os: {props.os} </li>
                        <li>Processor: {props.processor} </li>
                        <li>Video Card: {props.video_card} </li>
                        <li>Memory: {props.memory} </li>
                        <li>Primary Storage: {props.primary_storage} </li>
                        <li>Power Supply: {props.power_supply} </li>
                        <li>Price: {props.price} </li>
                    </ul>
                </div>
                </div>
            </div>
        )
    }


export default SingleCard