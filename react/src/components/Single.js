import {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SingleCard from './SingleCard'

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
            <div className='container'>
                <div className='row row-cols-1 row-cols-md-4 g-4'>
                    <h2>{product}</h2>
                    <img src={`/images/${item.imgUrl}`} alt={item.name} className="img-fluid image card-img-top"/>
                </div>
            </div>
        </main>
    )
}

export default Single