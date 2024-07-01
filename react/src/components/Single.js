import {useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Single =()=> {


    const [ item, setItem ] = useState({})
    const params = useParams()

    const url = `http://localhost:3005/api/${params.path}/${params.id}`

    useEffect(()=> {
        axios.get(url).then(res => setItem(res.data)) 
    }, [])

    console.log(item)

    let product 

    switch (item.category) {
        case 'os':
            product = item.os 
            break
        case 'pc':
            product = item.name 
            break
        case 'processor':
            product = item.processor
        default: 
            product = 'Your Product'
    }


    return (
        <main className='main' id='singleMain'>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-5 mt-4'>
                        <div className='text-center'>
                            <img src={`/images/${item.imgUrl}`} alt={item.name} className="img-fluid image w-75 single-img"/>
                        </div>
                    </div>
                <div className='col-md-7 d-flex flex-column mt-5'>
                <h2 className='single-h2 text-center'>{product}</h2>
                            <ul className='image-ul list-unstyled mt-3 text-center'>
                                <li className='single-li'>Tower: {item.tower} </li>
                                <li className='single-li'>Os:
                                    {item.os}
                                </li>
                                <li className='single-li'>Processor: {item.processor} </li>
                                <li className='single-li'>Video Card: {item.video_card} </li>
                                <li className='single-li'>Memory: {item.memory} </li>
                                <li className='single-li'>Primary Storage: {item.primary_storage} </li>
                                <li className='single-li'>Power Supply: {item.power_supply} </li>
                                <li className='single-li'>Price: ${item.price} </li>
                            </ul>
                </div>
                </div>
            </div>
        </main>
    )
}

export default Single