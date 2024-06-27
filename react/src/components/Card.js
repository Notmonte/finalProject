import { Link } from 'react-router-dom'

const Card =(props)=> {

    // I passed in props to get info from my Database using .map
    // I use link to link everything together

    return (
        <div className="col">
            <div className="new-cards h-100">
                <div className="new-card">
                    <div className="new-container">
                        <img className="new-img" src={`/images/${props.imgUrl}`} alt={props.name} />
                    </div>
                    <div className="details">
                    <h2 className="card-title card-h2">
                        <Link to={`/${props.path}/${props.id}`} className='h2-link'>
                            {props.name}
                        </Link>
                    </h2>
                        <ul>
                            <li>{props.price}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Card