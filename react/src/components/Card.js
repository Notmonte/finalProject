import { Link } from 'react-router-dom'

const Card =(props)=> {

    // I passed in props to get info from my Database using .map
    // I use link to link everything together

    return (
        <div className="col">
            <div className="card h-100">
                <img src={`/images/${props.imgUrl}`} alt={props.name} className="img-fluid image card-img-top"/>
                <div className="card-body">
                    <h2 className="card-title">
                        <Link to={`${props.path}/${props.id}`}>
                            {props.name}
                        </Link>
                    </h2>
                    <p>{props.tower}</p>
                </div>
            </div>
        </div>
    )
}

export default Card