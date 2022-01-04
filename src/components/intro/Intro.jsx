import "./intro.scss";
import {LinkedIn, GitHub, Mail} from '@material-ui/icons'


const Intro = () => {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="/assets/dp.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Anup Kashyap</h1>
                    <h3>CS Graduate Student</h3>
                    <h3>Full stack developer</h3>

                    <div className="socialLinks">
                    <LinkedIn onClick={()=>window.open("https://linkedin.com/in/anupkashyap")}/>
                    <GitHub onClick={()=>window.open("https://github.com/anupkashyap")}/>
                    <Mail onClick={()=>window.open("mailto:akashy15@asu.edu")}/>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Intro;