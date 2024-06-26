const Home =()=> {

    return (
        <main className="main" id="homeMain">
            <div className="container">
                <h2 className="text-capitalize">home</h2>
                <div className="cards">
                    <div className="card">
                        <div className="container">
                            <img src={`/images/${props.imgUrl}`} alt={props.name} />
                        </div>
                        <div className="details">
                            <h3>placeholder</h3>
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home