const CounterImage = ({count}) => {

    return <div className="sushi-size-container">
        {count < 10 && <img src="size1.png" className="sushi-size" alt="Sushi size"/>}
        {count >= 10 && count < 15 && <img src="size2.png" className="sushi-size" alt="Sushi size"/>}
        {count >= 15 && count < 20 && <img src="size3.png" className="sushi-size" alt="Sushi size"/>}
        {count >= 20 && count < 30 && <img src="size4.png" className="sushi-size" alt="Sushi size"/>}
        {count >= 30 && count < 40 && <img src="size5.png" className="sushi-size" alt="Sushi size"/>}
        {count >= 40 && count < 50 && <img src="size6.png" className="sushi-size" alt="Sushi size"/>}
        {count >= 50 && count < 60 && <img src="size7.png" className="sushi-size" alt="Sushi size"/>}
        {count >= 60 && count < 70 && <img src="size8.png" className="sushi-size" alt="Sushi size"/>}
        {count >= 70 && <img src="size9.png" className="sushi-size" alt="Sushi size"/>}

    </div>
}   

export default CounterImage;