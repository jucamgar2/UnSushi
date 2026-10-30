const CounterImage = ({count}) => {

    return <div className="sushi-size-container">
        {count < 10 && <img src="size1.webp" className="sushi-size" alt="Sushi size 1"/>}
        {count >= 10 && count < 15 && <img src="size2.webp" className="sushi-size" alt="Sushi size 2"/>}
        {count >= 15 && count < 20 && <img src="size3.webp" className="sushi-size" alt="Sushi size 3"/>}
        {count >= 20 && count < 30 && <img src="size4.webp" className="sushi-size" alt="Sushi size 4"/>}
        {count >= 30 && count < 40 && <img src="size5.webp" className="sushi-size" alt="Sushi size 5"/>}
        {count >= 40 && count < 50 && <img src="size6.webp" className="sushi-size" alt="Sushi size 6"/>}
        {count >= 50 && count < 60 && <img src="size7.webp" className="sushi-size" alt="Sushi size 7"/>}
        {count >= 60 && count < 70 && <img src="size8.webp" className="sushi-size" alt="Sushi size 8"/>}
        {count >= 70 && <img src="size9.webp" className="sushi-size" alt="Sushi size 9"/>}

    </div>
}   

export default CounterImage;