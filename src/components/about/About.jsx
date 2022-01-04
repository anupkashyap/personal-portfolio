import "./about.scss";

const Portfolio = () => {
    return (
        <div className="about" id="about">
            <div className="left">
               
                <div className="itemContainer">
                    <div className="imgContainer">
                        <img src="/assets/ASU-logo.png" />
                    </div>
                    <div className="description">
                        <h2>MS Computer Science </h2>
                        <h5>2021-2023</h5>
                    </div>

                </div>

                <div className="itemContainer">
                    <div className="imgContainer">
                        <img src="/assets/VIT-logo.png" />
                    </div>
                    <div className="description">
                        <h2>BTech Electronics & Communication Engineering </h2>
                        <h5>2015-2019</h5>
                    </div>

                </div>

            </div>


            <div className="right">
               
               
                <div className="itemContainer">
                    <div className="imgContainer">
                        <img src="/assets/deloitte-logo.png" />
                    </div>
                    <div className="description">
                        <h2>Full Stack Developer </h2>
                        <h5>2019-2021</h5>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default Portfolio;