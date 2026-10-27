import ResumeLine from "./ResumeLine";

const ResumeDetail = () => {

    return <>
        <header className="simple-counter">
            <h1>Un sushi</h1>
        </header>

        <div className="sub-title">
            <h3>Resumen detallado</h3>
        </div>

        <div className="resume-lines-container">
            <ResumeLine imgSrc={"../maki.png"} alt={"Maki"} quantity={0}/>
            <ResumeLine imgSrc={"../uramaki.png"} alt={"Uramaki"} quantity={10}/>
            <ResumeLine imgSrc={"../niguiri.png"} alt={"Niguiri"} quantity={15}/>
            <ResumeLine imgSrc={"../temaki.png"} alt={"Temaki"} quantity={12}/>
            <ResumeLine imgSrc={"../bao.png"} alt={"Bao"} quantity={22}/>
            <ResumeLine imgSrc={"../other.png"} alt={"Otro"} quantity={60}/>
        </div>
        <div className="total-line">
            <div className="empty-line-space"></div>
            <div className="resume-line-label">
                <p>TOTAL:</p>
            </div>
            <div className="resume-line-quantity">
                <p>{100}</p>
            </div>
        </div>
    </>
        
}

export default ResumeDetail;