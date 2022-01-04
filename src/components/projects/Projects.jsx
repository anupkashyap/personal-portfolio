import { GitHub } from "@material-ui/icons";
import "./projects.scss";

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <div className="header">
                <h1>Projects</h1>
            </div>
            <div className="wrapper">
                <div className="column">
                    <div className="itemContainer">
                        <div className="itemHeader">
                            <h2>Find My Books</h2>
                        </div>
                        <div className="itemContent">
                            <p>
                                - Semantic sentence vectorization for Book recommendation .<br />
                                - A pre-trained distilRoberta model was used to generate vectors for description sentences of shape 768. A corpus of 50k books' descriptions was vectorized and saved as np arrays which are further used to output similar books by calculating the dot product of the vectors. <br />
                                - The machine learning backend was backed by a responsive react application with a cards-style user interface allowing users to rate books.
                            </p>
                        </div>
                        <div className="techStack">
                            <i class="devicon-python-plain colored"></i>
                            <i class="devicon-react-original colored"></i>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png" ></img>
                        </div>
                        <div className="itemFooter">
                            <GitHub onClick={()=>window.open("https://github.com/anupkashyap/find-my-books")} style={{"cursor":"pointer"}}/>
                        </div>


                    </div>

                    <div className="itemContainer">
                        <div className="itemHeader">
                            <h2>Smart Public Transport using BT5</h2>
                        </div>
                        <div className="itemContent">
                            <p>
                                - Developed a public transport information system that works without internet access. <br />
                                - Used Bluetooth Low Energy beacons at both vehicles (buses) and infrastructure (bus stops).<br />
                                - An android app provides details about the bus stop the user is at, the bus that has arrived, etc, based on the Bluetooth beacons.<br />
                                - The app also tracks the user inside the bus and alerts when the destination has arrived - å even when offline.<br />
                                - The findings from this project were then published in a Springer journal.
                            </p>
                        </div>
                        <div className="techStack">
                            <i class="devicon-java-plain colored"></i>
                            <i class="devicon-android-plain colored"></i>
                        </div>
                        {/* <div className="itemFooter">
                            <GitHub onClick={()=>window.open("https://github.com/anupkashyap/find-my-books")}/>
                        </div> */}


                    </div>
                </div>
                <div className="column">
                <div className="itemContainer">
                        <div className="itemHeader">
                            <h2>Postify</h2>
                        </div>
                        <div className="itemContent">
                            <p>
                                - A minimalistic blog/social media-style web application site  <br />
                                - Uses a serverless architecture with the backend API hosted on Cloudflare Workers<br />
                                - Features includes viewing post feed, creating new post, deleting a post, filtering etc.   
                            </p>
                        </div>

                        <div className="techStack">
                            <i class="devicon-react-plain colored"></i>
                            <i class="devicon-javascript-plain colored"></i>
                        </div>
                        <div className="itemFooter">
                            <GitHub onClick={()=>window.open("https://github.com/anupkashyap/postify")} style={{"cursor":"pointer"}}/>
                        </div>


                    </div>

                    <div className="itemContainer">
                        <div className="itemHeader">
                            <h2>Open In WhatsApp</h2>
                        </div>
                        <div className="itemContent">
                            <p>
                                - Simple application developed to learn and explore Progressive Web Apps (PWAs) <br />
                                - Allows users to enter a phone number to open directly in Whatsapp chat without having to save the number to contacts. <br />
                                - Fully PWA-compliant with the ability to work offline.
                            </p>
                        </div>

                        <div className="techStack">
                            <i class="devicon-html5-plain colored"></i>
                            <i class="devicon-javascript-plain colored"></i>
                        </div>
                        <div className="itemFooter">
                            <GitHub onClick={()=>window.open("https://github.com/anupkashyap/openInWhatsapp")} style={{"cursor":"pointer"}}/>
                        </div>


                    </div>
                </div>
                <div className="column">
                    <div className="itemContainer">
                        <div className="itemHeader">
                            <h2>BlahCoin</h2>
                        </div>
                        <div className="itemContent">
                            <p>
                                - Project implemented by integrating the learnings from two courses (Blockchain A-Z and Go programming language) <br />
                                - An implementation of a basic decentralized cryptocurrency in Go. <br />
                                - Provides API endpoints for different crpto functions hosted on Gin HTTP server.
                            </p>
                        </div>
                        <div className="techStack">
                            <i class="devicon-go-original-wordmark colored"></i>
                        </div>
                        <div className="itemFooter">
                            <GitHub onClick={()=>window.open("https://github.com/anupkashyap/blahcoin-cryptocurrency")} style={{"cursor":"pointer"}}/>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;