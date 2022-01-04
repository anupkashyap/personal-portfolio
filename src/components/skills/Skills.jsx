import "./skills.scss";
import DevIcon from "devicon-react-svg";
const skillList = [
    {
        "icon": "devicon-csharp-plain colored",
        "name": "C#"
    },
    {
        "icon": "devicon-javascript-plain colored",
        "name": "Javascript"
    }
    ,
    {
        "icon": "devicon-html5-plain colored",
        "name": "HTML"
    }
    ,
    {
        "icon": "devicon-css3-plain colored",
        "name": "CSS"
    }
    ,
    {
        "icon": "devicon-typescript-plain colored",
        "name": "Typescript"
    }
    ,
    {
        "icon": "devicon-sass-original colored",
        "name": "Sass"
    }
    ,
    {
        "icon": "devicon-dotnetcore-plain colored",
        "name": ".NET Core"
    }
    ,
    {
        "icon": "devicon-python-plain colored",
        "name": "Python"
    }
    ,
    {
        "icon": "devicon-java-plain colored",
        "name": "Java"
    }
    ,
    {
        "icon": "devicon-cplusplus-plain colored",
        "name": "C++"
    }
    ,
    {
        "icon": "devicon-react-original colored",
        "name": "React"
    }
    ,
    {
        "icon": "devicon-angularjs-plain colored",
        "name": "Angular"
    }
    ,
    {
        "icon": "devicon-jquery-plain colored",
        "name": "jQuery"
    }
    ,
    {
        "icon": "devicon-linux-plain colored",
        "name": "Linux"
    }
    ,
    {
        "icon": "devicon-amazonwebservices-plain-wordmark colored",
        "name": "AWS"
    }
    ,
    {
        "icon": "devicon-git-plain colored",
        "name": "Git"
    }
    ,
    {
        "icon": "devicon-jira-plain colored",
        "name": "Jira"
    }
    ,
    {
        "icon": "devicon-materialui-plain colored",
        "name": "Material UI"
    }
    ,
    {
        "icon": "devicon-mongodb-plain colored",
        "name": "MongoDB"
    }
    ,
    {
        "icon": "devicon-mysql-plain colored",
        "name": "MySQL"
    }
    ,
    {
        "icon": "devicon-nodejs-plain colored",
        "name": "NodeJS"
    }
];
const Skills = () => {
    return (
        <div className="skills" id="skills">
            <div className="header">
                <h2>Skills</h2>
            </div>

            <div className="wrapper">
                {
                    skillList.map(x => (
                        <div key={x}>
                            <div className="iconContainer">
                                <i class={x.icon} style={{ "fontSize": "8rem" }}></i>
                            </div>
                            {/* <div className="nameHolder">
                                <h5>{x.name}</h5>
                            </div> */}

                        </div>

                    ))
                }

            </div>


        </div>
    );
};

export default Skills;