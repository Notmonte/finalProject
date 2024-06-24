import {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SingleCard from './SingleCard'

const Single =()=> {


    const [ pc, setPc ] = useState([])
    const params = useParams()

    const url = `http://localhost:3005/api/${params.path}/${params.id}`

    useEffect(()=> {
        axios.get(url).then(res => setPc(res.data))
    }, [])


    // console.log(pc)

    // const pcSingle = (pc => {
    //     return <SingleCard 
    //                 key={pc.pc_id}
    //                 id={pc.pc_id}
    //                 imgUrl={pc.imgUrl}
    //                 name={pc.name}
    //                 tower={pc.tower}
    //                 os={pc.os}
    //                 processor={pc.processor}
    //                 video_card={pc.video_card}
    //                 memory={pc.memeory}
    //                 primary_storage={pc.primary_storage}
    //                 power_supply={power_supply}
    //                 price={pc.price}
    //                 path={'/single'}
    //             />
    // })




    return (
        <main className='main' id='singleMain'>
            <div className='container'>
                <div className='row row-cols-1 row-cols-md-4 g-4'>
                    <h2>Single</h2>
                </div>
            </div>
        </main>
    )
}

export default Single