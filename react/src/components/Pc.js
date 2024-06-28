import { useState, useEffect } from "react"
import axios from "axios"
import Card from "./Card"



const Pc = ()=> {

    const [ pc, setPc ] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3005/api/pc').then(res => {
            setPc(res.data)
        })
    }, [])

    //  I used .map to get my info from card.js

    const pcCards = pc.map(pc => {
        return <Card 
                    key={pc.pc_id}
                    id={pc.pc_id}
                    name={pc.name}
                    price={pc.price}
                    imgUrl={pc.imgUrl}
                    path={'pc'}
                />
    })



    return (
        <main className="main" id="pcMain">
            <div className="container">
                <h2>Pc's</h2>
                <div className='row row-cols-1 row-cols-lg-5 row-cols-md-3 g-4 d-md-flex justify-content-md-evenly'>
                    { pcCards }
                </div>
            </div>
        </main>
    )
}

export default Pc