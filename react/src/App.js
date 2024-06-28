import { useState, useEffect } from "react"  
import { Routes, Route } from 'react-router-dom'
import axios from "axios"

import Form from "./components/Form";
import ErrorPage from "./components/ErrorPage";
import Single from "./components/Single";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Pc from "./components/Pc";




const App =()=> {

    //First Create State for Form; formData is an object // Initialzing state

    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        email: '',
        phone: '',
        password: ''
    })

    const [ users, setUsers] = useState([])


    // Fetch Call

    useEffect(() => {
        axios.get('http://localhost:3005/api/user').then(res => setUsers(res.data))
    }, [])


    // Form Functionality 

    const handleChange = (event)=> {
        const {name, value} = event.target

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit =(e)=> {
        e.preventDefault()
        console.log(formData)
        axios({
            method: 'post',
            url: 'http://localhost:3005/api/user/create',
            data: formData
        })
    }


    //Route paths 

    return(
        <>
            <Header />
            <Routes>
                <Route path='/' element={ <Home  />} />
                <Route path='/sign_up' element={ 
                    <Form 
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit} 
                    />} 
                />
                <Route path='*' element={ <ErrorPage  />} />
                <Route path='/shop' element={ <Pc />} />
                <Route path='/:path/:id' element={<Single />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App