const ResumeLine = ({imgSrc, alt, quantity}) => {
    return <>
        <div className="resume-line">
            <img src={imgSrc} alt={alt} />
            <div className="resume-line-label">
                <p>{alt}:</p>
            </div>
            <div className="resume-line-quantity">
                <p>{quantity}</p>
            </div>
            
        </div>
    </>
}

export default ResumeLine;